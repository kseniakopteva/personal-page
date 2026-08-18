import Draggable from "./Draggable";

export default function Photocard({ initialPos, classes, src, alt = "", toRotate = true }) {
	return (
		<Draggable
			initialPos={initialPos}
			shadow={"large"}
			material={true}
			toRotate={toRotate}
		>
			<div className={`w-70 border-10 border-b-20 border-white ${classes}`}>
				<img src={src} alt={alt} />
			</div>
		</Draggable>
	);
}
