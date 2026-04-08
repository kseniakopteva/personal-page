import { useState, useRef, useEffect, useContext } from "react";
import { GlobalZIndexCounterContext } from "../contexts";

export default function Draggable({
	initialPos = { x: 0, y: 0 },
	TopBarComponent,
	ChildrenWrapperComponent,
	children,
	classes,
	...rest
}) {
	const [pos, setPos] = useState(initialPos);
	const [dragging, setDragging] = useState(false);
	const rel = useRef({ x: 0, y: 0 });
	const internalNodeRef = useRef(null);
	const nodeRef = rest.ref ?? internalNodeRef;

	const [zIndexCounter, setZIndexCounter] = useContext(GlobalZIndexCounterContext);

	useEffect(() => {
		function handleMouseMove(e) {
			if (!dragging) return;

			setPos({
				x: e.pageX - rel.current.x,
				y: e.pageY - rel.current.y,
			});

			e.preventDefault();
		}

		function handleMouseUp(e) {
			nodeRef.current.style.zIndex = zIndexCounter;
			setZIndexCounter(zIndexCounter + 1);

			setDragging(false);
			e.preventDefault();
		}

		if (dragging) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		} else {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [dragging, zIndexCounter, setZIndexCounter]);

	function onMouseDown(e) {
		if (e.button !== 0) return;

		const rect = nodeRef.current.getBoundingClientRect();
		console.log(rect);

		nodeRef.current.style.zIndex = 999;

		rel.current = {
			x: e.pageX - rect.left,
			y: e.pageY - rect.top,
		};

		setDragging(true);
		e.preventDefault();
		e.stopPropagation();
	}

	return (
		<div
			ref={nodeRef}
			style={{
				position: "absolute",
				left: `${pos.x}px`,
				top: `${pos.y}px`,
				cursor: dragging ? "grabbing" : "grab",
				zIndex: -1,
			}}
			className={classes}
			{...rest}
		>
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
