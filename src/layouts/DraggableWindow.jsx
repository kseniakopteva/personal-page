import { useContext, useState } from "react";
import Draggable from "./Draggable";
import DraggableWindowTopBar from "./DraggableWindowTopBar";
import DraggableWindowBody from "./DraggableWindowBody";
import { ThemeContext } from "../contexts";

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

	const {
		themeWindowClasses,
		themeTopBarClasses,
		themeBodyClasses,
		themeClosedBodyClasses,
		themeOpenBodyClasses,
	} = useContext(ThemeContext);

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
			classes={`${classes} ${width} m-0 absolute shadow antialiased ${isOpen ? themeOpenBodyClasses : themeClosedBodyClasses} ${finalIsVisible ? "block" : "hidden"} ${themeWindowClasses}`}
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
					classes={themeTopBarClasses}
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
					classes={themeBodyClasses}
				/>
			)}
		/>
	);
}
