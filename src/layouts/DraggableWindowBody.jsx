export default function DraggableWindowBody({
	children,
	isOpen,
	setIsVisible,
	okButton,
	noMargin,
	classes,
}) {
	return (
		<div
			className={`${classes} bg-white min-w-0 ${!noMargin ? "px-3" : ""} cursor-auto ${isOpen ? (!noMargin ? "visible py-3" : "visible") : "invisible h-0! py-0"}`}
		>
			{children}
			{okButton && (
				<div className="flex justify-center">
					<button
						onClick={() => {
							setIsVisible(false);
						}}
						className="border border-black shadow px-3 py-0.5 mt-3 text-sm cursor-pointer"
					>
						Ok
					</button>
				</div>
			)}
		</div>
	);
}
