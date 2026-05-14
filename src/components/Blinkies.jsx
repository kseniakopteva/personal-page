export default function Blinkies() {
	const blinkies = [
		{
			img: "pretty.gif",
			url: "",
		},
		{
			img: "oldoldpicture.gif",
			url: "https://blinkies.cafe",
		},
		{
			img: "artist.gif",
			url: "",
		},
		{
			img: "computerneversleeps.gif",
			url: "",
		},
		{
			img: "cats1.gif",
			url: "",
		},
		// {
		// 	img: "drinkwater.gif",
		// 	url: "https://glittergroovy.tumblr.com/",
		// },
		{
			img: "ducks.gif",
			url: "",
		},
		{
			img: "hornsnfangs.gif",
			url: "",
		},
		// {
		// 	img: "antinftcryptoai.gif",
		// 	url: "",
		// },
		{
			img: "htmltags.gif",
			url: "",
		},
		{
			img: "mediaplayer.gif",
			url: "",
		},
		{
			img: "igazeatstars.gif",
			url: "",
		},
		{
			img: "piracyethical.gif",
			url: "",
		},
		{
			img: "stretch.gif",
			url: "https://glittergroovy.tumblr.com/",
		},
		// {
		// 	img: "violentvideogames.gif",
		// 	url: "",
		// },
		{
			img: "in_the_dungeon_1.gif",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "knight.gif",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "let_me_look.gif",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		// {
		// 	img: "otherworldly_creature_1.gif",
		// 	url: "https://vinnyvistazo.com/resources/graphics",
		// },
		{
			img: "spellcasting.gif",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "wizard.gif",
			url: "https://vinnyvistazo.com/resources/graphics",
		},
		{
			img: "0028-computer.gif",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0015-exit-button.gif",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0055-rainbowswirl.gif",
			url: "https://graphics-cafe.tumblr.com/",
		},
		{
			img: "0231-treeforest.gif",
			url: "https://kotatsu.me/",
		},
		// {
		// 	img: "0148-kirbyswim.gif",
		// 	url: "https://transbro.neocities.org/",
		// },

		{
			img: "0253-rainbowheartclownballoons.gif",
			url: "https://crowpunk.neocities.org/",
		},
	];

	return (
		<div className="flex flex-col gap-1">
			{blinkies.map((blinky) =>
				blinky.url ? (
					<a href={blinky.url}>
						<img
							src={`img/blinkies/${blinky.img}`}
							alt=""
							className={`h-5 w-37.5 ${blinky.url ? "" : "cursor-default"}`}
						/>
					</a>
				) : (
					<img
						src={`img/blinkies/${blinky.img}`}
						alt=""
						className={`h-5 w-37.5 ${blinky.url ? "" : "cursor-default"}`}
					/>
				),
			)}
		</div>
	);
}
