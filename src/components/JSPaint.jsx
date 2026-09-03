import DraggableWindow from "../layouts/DraggableWindow";
import clsx from "clsx";
import { ThemeContext } from "../contexts";
import { useContext } from "react";

export default function JSPaint() {
	const {
		themeWindowClasses,
		themeTopBarClasses,
		themeBodyClasses,
		themeClosedBodyClasses,
		themeOpenBodyClasses,
		themeTopBarOpenClasses,
		themeTopBarClosedClasses,
	} = useContext(ThemeContext);

	return (
		// <DraggableWindow
		// 	horizontalPosition={"center-right"}
		// 	distanceFromTop={1260}
		// 	title={
		// 		"For sudden bursts of creativity... (if you drag/minimize: the art will be lost!)"
		// 	}
		// 	noMargin={true}
		// >

		<div
			className={clsx(
				"absolute w-[32%] top-[1260px]",
				themeWindowClasses,
				themeTopBarClasses,
				themeBodyClasses,
			)}
			style={{
				left: `calc(53vw)`,
			}}
		>
			<div className="text-sm h-[610px] borderf">
				<iframe
					title="Paint"
					src="https://jspaint.app"
					width="100%"
					height="100%"
				></iframe>
			</div>
		</div>
		// </DraggableWindow>
	);
}
