import { DashSquareSvg, XSquareSvg } from "../assets/svgs";

export default function DraggableWindowTopBar({
	title,
	onMouseDown,
	notClosable,
	isOpen,
	setIsOpen,
	isVisible,
	setIsVisible,
	classes,
}) {
	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	function close() {
		if (notClosable) return;
		setIsVisible(!isVisible);
	}

	return (
		<div className={`${classes} flex justify-between`} onMouseDown={onMouseDown}>
			<p
				className="text-xs font-bold pl-2 py-0.5"
				style={{
					fontWeight: 700,
					color: "#fff",
					letterSpacing: 0,
					marginRight: "24px",
				}}
			>
				{title}
			</p>
			<div className="flex gap-1 py-0.5">
				<button
					className=" cursor-pointer rounded-sm"
					onClick={toggleOpen}
					onMouseDown={(e) => e.stopPropagation()}
				>
					<DashSquareSvg color="#FFF" />
				</button>
				<button
					className="bg-red-500 h-4 w-4 cursor-pointer rounded-sm"
					onClick={close}
					onMouseDown={(e) => e.stopPropagation()}
				>
					<XSquareSvg color={"#FFF"} classes="h-full w-full" />
				</button>
			</div>
		</div>
	);
}
