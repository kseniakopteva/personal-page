import { useState, useRef, useEffect, useContext } from "react";
import { GlobalZIndexCounterContext } from "../contexts";

// code adapted from this post: "Recommended way of making React component/div draggable"
// link: https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
// from the answer by Jared Forsyth, link: https://stackoverflow.com/users/290784/jared-forsyth answered Jan 4, 2014 at 23:13

//▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
//▐   DOESN'T SUPPORT   ▌
//▐  NESTED DRAGGABLES  ▌
//▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌

export default function Draggable({
	initialPos = { x: 0, y: 0 },
	TopBarComponent,
	ChildrenWrapperComponent,
	children,
	classes,
	material,
	shadow,
	toRotate = false,
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

	function getRandomDegree() {
		return ((Math.random() * 2 - 1) * 0.01).toFixed(3);
	}
	const [turnDegree, setTurnDegree] = useState(() => {
		return toRotate ? getRandomDegree() : 0;
	});
	function rotate() {
		if (rotate) setTurnDegree(getRandomDegree());
	}

	// TODO: rotation is peeking out of viewport
	useEffect(() => {
		// when mouse moves...
		function handleMouseMove(e) {
			// if it isn't currently dragging anything...
			if (!isDragging) return; // ... we don't care.

			function clamp(value, min, max) {
				return Math.max(min, Math.min(value, max));
			}
			let newX = e.pageX - mouseAndElementOffset.current.x;
			let newY = e.pageY - mouseAndElementOffset.current.y;

			const parentRect = nodeRef.current.parentElement.getBoundingClientRect();

			const maxX = parentRect.width - nodeRef.current.getBoundingClientRect().width;
			const maxY =
				parentRect.height - nodeRef.current.getBoundingClientRect().height;

			newX = clamp(newX, 0, maxX);
			newY = clamp(newY, 0, maxY);

			// if it is, change the position of the element, keeping in mind the offset
			setPosition({ x: newX, y: newY });

			e.preventDefault();
		}

		// if mouse is up...
		function handleMouseUp(e) {
			// set new z-index and increment it
			nodeRef.current.style.zIndex = zIndexCounter;
			setZIndexCounter(zIndexCounter + 1);

			// tell the window to stop following the mouse
			setIsDragging(false);

			if (material) nodeRef.current.style.scale = "1";

			if (toRotate) rotate();

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
		// const rect = nodeRef.current.getBoundingClientRect();

		// set the element above everything else while the mouse is dragging
		nodeRef.current.style.zIndex = 9999;
		if (material) nodeRef.current.style.scale = "1.05";

		// store the initial offset between the mouse position and the element’s top-left corner
		mouseAndElementOffset.current = {
			// x: e.pageX - (rect.left + window.scrollX), // keeps the scroll in mind now
			// y: e.pageY - (rect.top + window.scrollY),
			x: e.pageX - position.x,
			y: e.pageY - position.y,
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
				zIndex: 0, // initial z-index
				transition: "all", // for scaling to be smooth
				transform: `rotate(${turnDegree}turn)`,
			}}
			className={`${classes} ${shadow ? (shadow === "large" ? "filter-[drop-shadow(3px_2px_10px_#000)]" : "filter-[drop-shadow(0_2px_2px_#000)]") : ""}`}
			{...rest}
		>
			{/* if it is a draggable with a handle, show top bar component and a children wrapper (passed as props) */}
			{TopBarComponent !== undefined && ChildrenWrapperComponent !== undefined ? (
				<div>
					<TopBarComponent onMouseDown={onMouseDown} />
					<ChildrenWrapperComponent>{children}</ChildrenWrapperComponent>
				</div>
			) : (
				<div
					onMouseDown={onMouseDown}
					className={`${shadow ? (shadow === "large" ? "filter-[drop-shadow(3px_2px_10px_#000)]" : "filter-[drop-shadow(0_2px_2px_#000)]") : ""}`}
				>
					{children}
				</div>
			)}
		</div>
	);
}
