import { buttons } from "../data";
import GifImage from "./GifImage";

export default function CoolWebsiteLinks() {
	const width = 88 * 1.17;
	const height = 31;

	const allButtons = buttons;

	return (
		<div className=" flex gap-1 flex-wrap border p-6 [border-image-source:url(../../../img/fleabag.png)] [border-image-slice:77] [border-image-width:20]">
			{allButtons.map((btn) => (
				<a href={btn.url} target="_blank" key={btn.imageSlug}>
					<GifImage
						srcSlugPath={`img/buttons`}
						imgName={btn.imageSlug}
						orig={btn.orig ? btn.orig : undefined}
						copy={btn.copy ? btn.copy : undefined}
						width={width}
						height={height}
					/>
				</a>
			))}
		</div>
	);
}
