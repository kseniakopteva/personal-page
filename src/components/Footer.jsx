import { properties } from "../data";

export default function Footer() {
	const footerButtons = properties;

	// TODO: make reduced motion version

	return (
		<div className="h-[100px]">
			<div className="flex">
				{footerButtons.map((img, index) => {
					return (
						<img key={index} src={`/public/img/properties/${img}`} alt="" />
					);
				})}
			</div>
		</div>
	);
}
