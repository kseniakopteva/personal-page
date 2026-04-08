import { DashSquareSvg, XSquareSvg } from "../assets/svgs";

export default function DraggableWindowTopBar({
	title,
	onMouseDown,
	notClosable,
	isOpen,
	setIsOpen,
	isVisible,
	setIsVisible,
}) {
	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	function close() {
		if (notClosable) return;
		setIsVisible(!isVisible);
	}

	return (
		<div
			className="min-h-3 border-y border-black flex justify-between p-1 bg-sky-400"
			onMouseDown={onMouseDown}
		>
			<p className="text-xs font-bold">{title}</p>
			<div className="flex gap-1">
				<button
					className="bg-lime-500 cursor-pointer border border-sky-500 rounded-sm"
					onClick={toggleOpen}
					onMouseDown={(e) => e.stopPropagation()}
				>
					<DashSquareSvg />
				</button>
				<button
					className="bg-red-500 cursor-pointer border border-sky-500 rounded-sm"
					onClick={close}
					onMouseDown={(e) => e.stopPropagation()}
				>
					<XSquareSvg />
				</button>
			</div>
		</div>
	);
}
