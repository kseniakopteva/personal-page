import { useState } from "react";
import Draggable from "./Draggable";
import DraggableWindowTopBar from "./DraggableWindowTopBar";
import DraggableWindowBody from "./DraggableWindowBody";

export default function DraggableWindow({
	isVisible,
	setIsVisible,
	title,
	notClosable,
	children,
	classes = "",
	okButton,
	noMargin,
	shadow,
	horizontalPosition = null, // far-left, center, far-right, center-left, center-right
	distanceFromTop = null,
	...props
}) {
	const [internalIsVisible, setInternalIsVisible] = useState(true);
	const finalIsVisible = isVisible ?? internalIsVisible;
	const setFinalIsVisible = setIsVisible ?? setInternalIsVisible;

	const [isOpen, setIsOpen] = useState(true);

	const xp = true;

	let distanceFromLeft = 0;
	let width = 0;
	switch (horizontalPosition) {
		case "far-left": {
			distanceFromLeft = 0.01 * window.innerWidth;
			width = "w-[18%]";
			break;
		}
		case "center": {
			distanceFromLeft = 0.2 * window.innerWidth;
			width = "w-[65%]";
			break;
		}
		case "far-right": {
			distanceFromLeft = 0.86 * window.innerWidth;
			width = "w-[12%]";
			break;
		}
		case "center-left": {
			distanceFromLeft = 0.2 * window.innerWidth;
			width = "w-[32%]";
			break;
		}
		case "center-right": {
			distanceFromLeft = 0.53 * window.innerWidth;
			width = "w-[32%]";
			break;
		}
	}

	return (
		<Draggable
			initialPos={{
				x: horizontalPosition
					? distanceFromLeft
					: props.initialPos
						? props.initialPos.x
						: 0,
				y: distanceFromTop
					? distanceFromTop
					: props.initialPos
						? props.initialPos.y
						: 0,
			}}
			shadow={shadow}
			classes={`${classes} ${width} border border-black m-0 absolute shadow ${isOpen && xp ? "border-b rounded-b" : ""} ${finalIsVisible ? "block" : "hidden"}  pb-[3px] antialiased ${xp ? "px-[3px] rounded-t-[8px] shadow-[inset_-1px_-1px_#00138c,_inset_1px_1px_#0831d9,_inset_-2px_-2px_#001ea0,_inset_2px_2px_#166aee,_inset_-3px_-3px_#003bda,_inset_3px_3px_#0855dd]" : ""}`}
			{...props}
			TopBarComponent={(props2) => (
				<DraggableWindowTopBar
					{...props2}
					title={title}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isVisible={finalIsVisible}
					setIsVisible={setFinalIsVisible}
					notClosable={notClosable}
				/>
			)}
			ChildrenWrapperComponent={(props3) => (
				<DraggableWindowBody
					{...props3}
					noMargin={noMargin}
					setIsVisible={setFinalIsVisible}
					isOpen={isOpen}
					children={children}
					okButton={okButton}
				/>
			)}
		/>
	);
}
