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
	...props
}) {
	const [internalIsVisible, setInternalIsVisible] = useState(true);
	const finalIsVisible = isVisible ?? internalIsVisible;
	const setFinalIsVisible = setIsVisible ?? setInternalIsVisible;

	const [isOpen, setIsOpen] = useState(true);

	return (
		<Draggable
			classes={`${classes} w-max m-0 absolute shadow ${isOpen ? "border-b rounded-b" : ""} ${finalIsVisible ? "block" : "hidden"} rounded-t-[8px] pb-[3px] px-[3px] antialiased shadow-[inset_-1px_-1px_#00138c,_inset_1px_1px_#0831d9,_inset_-2px_-2px_#001ea0,_inset_2px_2px_#166aee,_inset_-3px_-3px_#003bda,_inset_3px_3px_#0855dd]`}
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
