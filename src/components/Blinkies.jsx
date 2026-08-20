import { blinkies as bl } from "../data";
import GifImage from "./GifImage";

export default function Blinkies() {
	const blinkies = bl;

	return (
		<div className="flex flex-col gap-1 items-center">
			{blinkies.map((blinky) =>
				blinky.url ? (
					<a href={blinky.url} key={blinky.img}>
						<GifImage
							srcSlugPath={`img/blinkies/${blinky.img}`}
							classes={`h-5 w-37.5`}
						/>
					</a>
				) : (
					<GifImage
						key={blinky.img}
						srcSlugPath={`img/blinkies/${blinky.img}`}
						classes={`h-5 w-37.5`}
					/>
				),
			)}
		</div>
	);
}
