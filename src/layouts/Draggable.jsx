import { useState, useRef, useEffect, useContext } from "react";
import { GlobalZIndexCounterContext } from "../contexts";

// code adapted from this post: "Recommended way of making React component/div draggable"
// link: https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
// from the answer by Jared Forsyth, link: https://stackoverflow.com/users/290784/jared-forsyth answered Jan 4, 2014 at 23:13

export default function Draggable({
	initialPos = { x: 0, y: 0 },
	TopBarComponent,
	ChildrenWrapperComponent,
	children,
	classes,
	...rest
}) {
	// position of the draggable element
	const [position, setPosition] = useState(initialPos);
	// is user currently dragging the element?
	const [isDragging, setIsDragging] = useState(false);
	// difference between mouse position and top left element corner
	const mouseAndElementOffset = useRef({ x: 0, y: 0 }); // ref so it doesn't cause a re-render

	// reference to the element if none is provided,
	const internalNodeRef = useRef(null);
	// ... otherwise use the provided one. (neede in case of pop up by button)
	const nodeRef = rest.ref ?? internalNodeRef;

	// the top z-index. so that the last moved (globally) is on top.
	const [zIndexCounter, setZIndexCounter] = useContext(GlobalZIndexCounterContext);

	useEffect(() => {
		// when mouse moves...
		function handleMouseMove(e) {
			// if it isn't currently dragging anything...
			if (!isDragging) return; // ... we don't care.

			// if it is, change the position of the element, keeping in mind the offset
			setPosition({
				x: e.pageX - mouseAndElementOffset.current.x,
				y: e.pageY - mouseAndElementOffset.current.y,
			});

			e.preventDefault();
		}

		// if mouse is up...
		function handleMouseUp(e) {
			// set new z-index and increment it
			nodeRef.current.style.zIndex = zIndexCounter;
			setZIndexCounter(zIndexCounter + 1);

			// tell the window to stop following the mouse
			setIsDragging(false);

			e.preventDefault();
		}

		// adding the listeners so everything written above - works
		if (isDragging) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		} else {
			// if mouse isn't dragging, remove the listeners
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		}

		return () => {
			// when element is unmounted, remove the listeners
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [nodeRef, isDragging, zIndexCounter, setZIndexCounter]);

	// when user starts clicking...
	function onMouseDown(e) {
		// only left mouse button can drag
		if (e.button !== 0) return;

		// getBoundingClientRect() returns a DOMRect object providing
		// information about the size of an element and its position relative to the viewport.
		const rect = nodeRef.current.getBoundingClientRect();

		// set the element above everything else while the mouse is dragging
		nodeRef.current.style.zIndex = 9999;

		// store the initial offset between the mouse position and the element’s top-left corner
		mouseAndElementOffset.current = {
			x: e.pageX - rect.left,
			y: e.pageY - rect.top,
		};

		// mouse IS dragging!
		setIsDragging(true);

		e.preventDefault();
		e.stopPropagation();
	}

	return (
		<div
			ref={nodeRef}
			style={{
				position: "absolute",
				left: `${position.x}px`,
				top: `${position.y}px`,
				cursor: isDragging ? "grabbing" : "grab",
				zIndex: -1, // initial z-index
			}}
			className={classes}
			{...rest}
		>
			{/* if it is a draggable with a handle, show top bar component and a children wrapper (passed as props) */}
			{TopBarComponent !== undefined && ChildrenWrapperComponent !== undefined ? (
				<>
					<TopBarComponent onMouseDown={onMouseDown} />
					<ChildrenWrapperComponent>{children}</ChildrenWrapperComponent>
				</>
			) : (
				<div onMouseDown={onMouseDown}>{children}</div>
			)}
		</div>
	);
}
