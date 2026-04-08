import { useState } from "react";
import Draggable from "./Draggable";
import DraggableWindowTopBar from "./DraggableWindowTopBar";
import DraggableWindowBody from "./DraggableWindowBody";

export default function DraggableWindow({
	isVisible,
	setIsVisible,
	scrollable,
	title,
	notClosable,
	children,
	classes = "",
	okButton,
	noMargin,
	halfTransparent,
	...props
}) {
	const [internalIsVisible, setInternalIsVisible] = useState(true);
	const finalIsVisible = isVisible ?? internalIsVisible;
	const setFinalIsVisible = setIsVisible ?? setInternalIsVisible;

	const [isOpen, setIsOpen] = useState(true);

	return (
		<Draggable
			classes={`${classes} ${halfTransparent ? "bg-[rgba(255,255,255,0.5)]" : "bg-white"} w-max border-x border-black m-0 absolute shadow ${scrollable ? "" : ""} ${isOpen ? "border-b rounded-b" : ""} ${finalIsVisible ? "block" : "hidden"}`}
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
					scrollable={scrollable}
					children={children}
					okButton={okButton}
				/>
			)}
		/>
	);
}
