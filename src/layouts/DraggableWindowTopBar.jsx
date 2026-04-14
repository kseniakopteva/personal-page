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
			className="min-h-3 border-y border-emerald-800 flex justify-between p-1 -mx-0.5 bg-emerald-600 "
			style={{
				fontFamily: "Trebuchet MS",
				background:
					"linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)",
				padding: "3px 5px 3px 3px",
				borderTop: "1px solid #0831d9",
				borderLeft: "1px solid #0831d9",
				borderRight: "1px solid #001ea0",
				borderTopLeftRadius: "8px",
				borderTopRightRadius: "7px",
				fontSize: "13px",
				textShadow: "1px 1px #0f1089",
			}}
			onMouseDown={onMouseDown}
		>
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
