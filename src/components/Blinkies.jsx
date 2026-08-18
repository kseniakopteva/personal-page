import GifImage from "./GifImage";

export default function Blinkies() {
	const blinkies = [
		{
			img: "pretty",
			url: "",
		},
		{
			img: "oldoldpicture",
			url: "https://blinkies.cafe",
		},
		{
			img: "artist",
			url: "",
		},
		{
			img: "computerneversleeps",
			url: "",
		},
		{
			img: "cats1",
			url: "",
		},
		// {
		// 	img: "drinkwater",
		// 	url: "https://glittergroovy.tumblr.com/",
		// },
		{
			img: "ducks",
			url: "",
		},
		{
			img: "hornsnfangs",
			url: "",
		},
		// {
		// 	img: "antinftcryptoai",
		// 	url: "",
		// },
		{
			img: "htmltags",
			url: "",
		},
		{
			img: "mediaplayer",
			url: "",
		},
		{
			img: "igazeatstars",
			url: "",
		},
		{
			img: "piracyethical",
			url: "",
		},
		{
			img: "stretch",
			url: "https://glittergroovy.tumblr.com/",
		},
		// {
		// 	img: "violentvideogames",
		// 	url: "",
		// },
		{
			img: "in_the_dungeon_1",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "knight",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "let_me_look",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		// {
		// 	img: "otherworldly_creature_1",
		// 	url: "https://vinnyvistazo.com/resources/graphics",
		// },
		{
			img: "spellcasting",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "wizard",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "0028-computer",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0015-exit-button",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0055-rainbowswirl",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0231-treeforest",
			url: "https://kotatsu.me/",
		},
		// {
		// 	img: "0148-kirbyswim",
		// 	url: "https://transbro.neocities.org/",
		// },
		{
			img: "0253-rainbowheartclownballoons",
			url: "https://crowpunk.neocities.org/",
		},
	];

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
