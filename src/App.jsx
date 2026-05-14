import { useEffect, useRef, useState } from "react";
import Clock from "./components/Clock";
import DraggableWindow from "./layouts/DraggableWindow";
import { GlobalZIndexCounterContext } from "./contexts";
import Draggable from "./layouts/Draggable";
import MovieReviews from "./components/MovieReviews";
import Blinkies from "./components/Blinkies";
import CoolWebsiteLinks from "./components/CoolWebsiteLinks";
import HeaderMarquee from "./components/HeaderMarquee";
import Button from "./components/Button";
import GifImage from "./components/GifImage";

function App() {
	const zIndexCounterHook = useState(1);
	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const movieWindowRef = useRef();

	const [isMusicVisible, setIsMusicVisible] = useState(false);
	const musicWindowRef = useRef();

	const [fullscreenImage, setFullscreenImage] = useState("");
	const dimWrapperRef = useRef(null);

	function toggleMovieReviews() {
		setIsMoviesVisible(!isMoviesVisible);
		movieWindowRef.current.style.zIndex = zIndexCounterHook[0];
		zIndexCounterHook[1](zIndexCounterHook[0] + 1);
	}

	function toggleMyMusic() {
		setIsMusicVisible(!isMusicVisible);
		musicWindowRef.current.style.zIndex = zIndexCounterHook[0];
		zIndexCounterHook[1](zIndexCounterHook[0] + 1);
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (dimWrapperRef.current && !dimWrapperRef.current.contains(event.target)) {
				setFullscreenImage("");
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dimWrapperRef]);

	const musicAlbums = [
		{
			artist: "Simon and Garfunkel",
			name: "Parsley, Sage, Rosemary and Thyme",
			img: "ParsleySage.jpg",
		},
		{
			artist: "ELO",
			name: "Time",
			img: "time.jpg",
		},
		{
			artist: "Small Fools",
			name: "Tree of Life, Melt in the Sun, Violet (singles but covers are similar...)",
			img: "tree_of_life.jpg",
		},
	];

	const welcomeText = [
		"Hello there, fellow digital traveler.",
		"I am pleased to see you here in my little corner of this vast Virtual Web.",
		"I am glad you found me, and didn't get lost along the way.",
		"",
		"Relax and enjoy this cup of tea (or coffee.)",
		"(Use the buttons in the top right of every window to collapse or close it.)",
		"(To restore all: reload the page)",
	];

	return (
		<GlobalZIndexCounterContext value={zIndexCounterHook}>
			<main
				style={{
					position: "relative",
					height: "2077px",
					backgroundImage: "url('../../../public/img/patterns/clovers.gif')",
					backgroundRepeat: "repeat",
				}}
			>
				<DraggableWindow
					horizontalPosition={"far-right"}
					distanceFromTop={20}
					title={"Clock"}
				>
					<Clock />
				</DraggableWindow>
				<DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={780}
					title={"Cool websites I like"}
					noMargin={true}
				>
					<CoolWebsiteLinks />
				</DraggableWindow>
				<DraggableWindow
					title={"Blinkies"}
					noMargin={false}
					horizontalPosition={"far-right"}
					distanceFromTop={370}
				>
					<Blinkies />
				</DraggableWindow>
				<DraggableWindow
					horizontalPosition={"far-right"}
					distanceFromTop={180}
					noMargin={true}
				>
					<div className="flex flex-col gap-2 p-3">
						<Button onClick={toggleMovieReviews}>My Movies</Button>
						<Button onClick={toggleMyMusic}>My Music</Button>
						<Button>My Photos</Button>
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={426}
					title={"Dolor"}
					classes="text-sm"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi at
					quaerat ab sequi quos quia recusandae. Esse perspiciatis recusandae ea
					saepe consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime cum
					porro. Asperiores fuga eius adipisci expedita alias doloremque sint
					rerum, eum, saepe, maxime quisquam iure ab ad eos veritatis! Lorem
					ipsum dolor, sit amet consectetur adipisicing elit.
				</DraggableWindow>
				<DraggableWindow
					classes="text-sm min-w-[280px]"
					horizontalPosition={"far-left"}
					distanceFromTop={20}
					title={"Sit"}
				>
					{" "}
					<div className="overflow-y-scroll ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
						at quaerat ab sequi quos quia recusandae. Esse perspiciatis
						recusandae ea saepe consectetur rem autem sunt, sit itaque,
						dignissimos sint. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit.
					</div>
				</DraggableWindow>
				<DraggableWindow
					horizontalPosition={"center-left"}
					distanceFromTop={770}
					title={"Amet"}
				>
					<div className="text-sm h-[470px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
						at quaerat ab sequi quos quia recusandae. Esse perspiciatis
						recusandae ea saepe consectetur rem autem sunt, sit itaque,
						dignissimos sint. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
						adipisci expedita alias doloremque sint rerum, eum, saepe, maxime
						quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit amet
						consectetur adipisicing elit.
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"center-left"}
					distanceFromTop={1325}
					title={"Consectetur"}
				>
					<div className="text-sm h-[375px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
						at quaerat ab sequi quos quia recusandae. Esse perspiciatis
						recusandae ea saepe consectetur rem autem sunt, sit itaque,
						dignissimos sint. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
						adipisci expedita alias doloremque sint rerum, eum, saepe, maxime
						quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit amet
						consectetur adipisicing elit.
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"center-right"}
					distanceFromTop={900}
					title={"Lorem"}
				>
					<div className="text-sm h-[285px]" title={"Adipisicing"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
						at quaerat ab sequi quos quia recusandae. Esse perspiciatis
						recusandae ea saepe consectetur rem autem sunt, sit itaque,
						dignissimos sint. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
						adipisci expedita alias doloremque sint rerum, eum, saepe, maxime
						quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit amet
						consectetur adipisicing elit.
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"center-right"}
					distanceFromTop={1260}
					title={"Ipsum"}
				>
					<div className="text-sm h-[565px]" title={"Elit"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
						at quaerat ab sequi quos quia recusandae. Esse perspiciatis
						recusandae ea saepe consectetur rem autem sunt, sit itaque,
						dignissimos sint. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
						adipisci expedita alias doloremque sint rerum, eum, saepe, maxime
						quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit amet
						consectetur adipisicing elit.
					</div>
				</DraggableWindow>

				<DraggableWindow
					title={"Main Window"}
					horizontalPosition={"center"}
					distanceFromTop={190}
					notClosable={false}
				>
					<div className="h-[500px] p-5">
						<h1 className="text-3xl font-bold">Hello World!</h1>
						<h2 className="text-lg italic">This is my page.</h2>
						<div className="border border-sky-200 my-3"></div>
						{/* <div className="flex flex-wrap">
							{[...Array(6)].map(() => (
								<img
									src="/img/construction.gif"
									className="h-[22.25px]"
								/>
							))}
						</div> */}
					</div>
				</DraggableWindow>

				<DraggableWindow
					noMargin={true}
					initialPos={{ x: window.innerWidth - 650, y: 650 }}
				>
					<a href="/dungeon">
						<div className="relative">
							<GifImage srcSlugPath={"/img/hallway_1"} classes="w-100" />
							<p className="absolute text-center top-[calc(50%-30px)] text-white left-[calc(50%-70px)] font-mono text-shadow-lg text-shadow-white">
								Follow me <br />
								into the dungeon
							</p>
						</div>
					</a>
				</DraggableWindow>

				<Draggable
					initialPos={{ x: window.innerWidth - 710, y: 610 }}
					shadow={true}
					material={true}
				>
					<img src="/img/jester2_right.png" className="h-70" alt="" />
				</Draggable>

				<DraggableWindow
					title={"Footer"}
					horizontalPosition={"center"}
					distanceFromTop={1900}
				>
					<div className="h-[100px]"></div>
				</DraggableWindow>
				<Draggable initialPos={{ x: 20, y: 1090 }} shadow={true} material={true}>
					<div className="w-65">
						<img src="../img/bliss_poster.jpg" alt="" />
					</div>
				</Draggable>
				<Draggable
					initialPos={{ x: window.innerWidth - 350, y: 1600 }}
					shadow={"large"}
					material={true}
				>
					<div className="w-70 transform-[rotate(0.005turn)] border-10 border-b-20 border-white">
						<img src="../img/ruins.jpg" alt="" />
					</div>
				</Draggable>
				<DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={250}
					title={"See you space cowboy..."}
					noMargin={true}
				>
					<div className="h-30 p-7 bg-[url('../../../public/img/patterns/stars.gif')] motion-reduce:bg-[url('../../../public/img/patterns/stars.jpg')]"></div>
				</DraggableWindow>
				<MovieReviews
					isMoviesVisible={isMoviesVisible}
					setIsMoviesVisible={setIsMoviesVisible}
					movieWindowRef={movieWindowRef}
					fullscreenImage={fullscreenImage}
					setFullscreenImage={setFullscreenImage}
				/>

				<DraggableWindow
					ref={musicWindowRef}
					initialPos={{
						x: 400,
						y: 200,
					}}
					isVisible={isMusicVisible}
					setIsVisible={setIsMusicVisible}
				>
					<div className=" w-120">
						<div className="flex gap-5">
							<h2 className="text-xl font-bold mb-3 whitespace-nowrap">
								My Favorite Albums
							</h2>
							<span className="text-xs leading-3 text-right">
								I love music, and I listen to different stuff every day.
								This is more of a hall of fame for albums I can listen to
								from the first song to the last.
							</span>
						</div>
						<div className="flex gap-4 flex-wrap justify-between items-start p-3 ">
							{musicAlbums.map((album) => (
								<div className="w-35 text-xs font-mono text-center relative">
									<img
										className="relative w-35 h-35 mb-2 [box-shadow:1px_1px_4px_0px_#000] border scale-100 hover:scale-[2.5] z-2 hover:z-4 transition-transform"
										src={`/img/music/${album.img}`}
									/>
									<img
										src="/img/music/overlay2.jpg"
										className="absolute top-0 left-0 z-3 w-35 h-35 pointer-events-none mix-blend-screen"
									/>
									<p className="font-bold text-sm">{album.name}</p>
									<p>{album.artist}</p>
								</div>
							))}
						</div>
					</div>
				</DraggableWindow>

				<HeaderMarquee />

				<DraggableWindow
					title={"Command Prompt - Welcome :3"}
					noMargin={true}
					initialPos={{
						x: window.innerWidth / 2 - 250,
						y: window.innerHeight / 2 - 170,
					}}
					shadow={"large"}
				>
					<pre className="w-125 h-100 whitespace-pre-wrap text-sm">
						<p className="leading-4 mb-2">
							Microsoft❮R❯ Windows DOS
							<br />
							❮C❯ Copyright Microsoft Corp 1990-2001.
						</p>
						{welcomeText.map((paragraph) =>
							paragraph !== "" ? (
								<div className="flex">
									<p>C:\WINDOWS\SYSTEM32{">"}</p>

									<p className="ml-2 text-white filter-[drop-shadow(0_0_4px_#FFF)]">
										{paragraph}
									</p>
								</div>
							) : (
								<p className="text-[0.3rem] flex justify-center text-[#00FF00]">
									<br />
									<br />
									<br />
									{"      "}██{"    "}██{"    "}██{"      "} <br />
									{"    "}██{"      "}██{"  "}██{"        "} <br />
									{"    "}██{"    "}██{"    "}██{"        "} <br />
									{"      "}██{"  "}██{"      "}██{"      "} <br />
									{"      "}██{"    "}██{"    "}██{"      "} <br />
									{"                              "}
									<br />
									{"  "}████████████████████{"    "} <br />
									{"  "}██{"                "}██████{""} <br />
									{"  "}██{"                "}██{"  "}██{""} <br />
									{"  "}██{"                "}██{"  "}██{""} <br />
									{"  "}██{"                "}██████{""} <br />
									{"    "}██{"            "}██{"      "} <br />
									{""}████████████████████████{"  "} <br />
									{""}██{"                    "}██{"  "} <br />
									{"  "}████████████████████{"    "} <br />
									<br />
									<br />
									<br />
								</p>
							),
						)}
					</pre>
				</DraggableWindow>
			</main>
			{fullscreenImage && (
				<div
					className="w-screen h-screen flex justify-center fixed top-0 left-0 items-center p-25 bg-[rgba(0,0,0,0.5)]"
					style={{ zIndex: 99998 }}
				>
					<img
						ref={dimWrapperRef}
						src={`public/img/${fullscreenImage}`}
						alt=""
						className="h-full"
					/>
					<button
						onClick={() => setFullscreenImage("")}
						className="absolute top-3 right-3 bg-white p-5 border cursor-pointer"
					>
						Close
					</button>
				</div>
			)}
		</GlobalZIndexCounterContext>
	);
}

export default App;
