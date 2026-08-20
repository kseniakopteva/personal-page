export default function Footer() {
	const footerButtons = [
		"bestondesktop.gif",
		"bookmark.gif",
		"graphicdesign.png",
		"htmllearnittoday.gif",
		"krisbtn.png",
		"nyancat.gif",
		"pbimagination.gif",
		"www.png",
	];

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
