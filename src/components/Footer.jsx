import { properties } from "../data";

export default function Footer() {
	const footerButtons = properties;

	// TODO: make reduced motion version

	return (
		<div className="h-[100px] bg-emerald-800 flex flex-col justify-between">
			<div className="flex flex-wrap">
				{footerButtons.map((img, index) => {
					return (
						<img key={index} src={`/public/img/properties/${img}`} alt="" />
					);
				})}
			</div>
			<p className="text-white text-xs p-1">Made by me. Nice to see you here, by the way.</p>
		</div>
	);
}
