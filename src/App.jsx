import { useContext, useEffect, useRef, useState } from "react";
import Clock from "./components/Clock";
import DraggableWindow from "./layouts/DraggableWindow";
import { GlobalZIndexCounterContext, ThemeContext } from "./contexts";
import Draggable from "./layouts/Draggable";
import MovieReviews from "./components/MovieReviews";
import Blinkies from "./components/Blinkies";
import CoolWebsiteLinks from "./components/CoolWebsiteLinks";
import HeaderMarquee from "./components/HeaderMarquee";
import Button from "./components/Button";
import GifImage from "./components/GifImage";
import WelcomeWindow from "./components/WelcomeWindow";
import Photocard from "./layouts/Photocard";
import { createPortal } from "react-dom";
import Tarot from "./components/Tarot";
import { intro } from "./data";

function App() {
	const zIndexCounterHook = useContext(GlobalZIndexCounterContext);
	const { themeMainBackgroundObject } = useContext(ThemeContext);

	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const movieWindowRef = useRef();

	const [isMusicVisible, setIsMusicVisible] = useState(false);
	const musicWindowRef = useRef();

	const [fullscreenImage, setFullscreenImage] = useState("");
	const dimWrapperRef = useRef(null);

	function openFullscreen(path) {
		setFullscreenImage(path);
	}

	function closeFullScreen() {
		setFullscreenImage("");
	}

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
			if (
				dimWrapperRef.current &&
				!dimWrapperRef.current.contains(event.target)
			) {
				closeFullScreen();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dimWrapperRef]);

	const musicAlbums = [
		{
			id: 1,
			artist: "Simon and Garfunkel",
			name: "Parsley, Sage, Rosemary and Thyme",
			img: "ParsleySage.jpg",
		},
		{ id: 2, artist: "ELO", name: "Time", img: "time.jpg" },
		{
			id: 3,
			artist: "Small Fools",
			name: "Tree of Life, Melt in the Sun, Violet (singles but covers are similar...)",
			img: "tree_of_life.jpg",
		},
	];

	return (
		<>
			<main
				style={{
					position: "relative",
					height: "2077px",
					...themeMainBackgroundObject,
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
					title={"Tarot"}
					classes="text-sm"
					noMargin={true}
				>
					<Tarot />
				</DraggableWindow>
				<DraggableWindow
					classes="text-sm"
					horizontalPosition={"far-left"}
					distanceFromTop={20}
					title={"Sit"}
				>
					{" "}
					<div className="">
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
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius adipisci
						expedita alias doloremque sint rerum, eum, saepe, maxime quisquam
						iure ab ad eos veritatis! Lorem ipsum dolor, sit amet consectetur
						adipisicing elit.
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
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius adipisci
						expedita alias doloremque sint rerum, eum, saepe, maxime quisquam
						iure ab ad eos veritatis! Lorem ipsum dolor, sit amet consectetur
						adipisicing elit.
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
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius adipisci
						expedita alias doloremque sint rerum, eum, saepe, maxime quisquam
						iure ab ad eos veritatis! Lorem ipsum dolor, sit amet consectetur
						adipisicing elit.
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
						adipisicing elit. Ex maxime cum porro. Asperiores fuga eius adipisci
						expedita alias doloremque sint rerum, eum, saepe, maxime quisquam
						iure ab ad eos veritatis! Lorem ipsum dolor, sit amet consectetur
						adipisicing elit.
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
						<div className="flex flex-wrap">
							{[...Array(6)].map((index) => (
								<img
									key={index}
									src="/img/construction.gif"
									className="h-[21.93px]"
									alt="under construction blinkie"
								/>
							))}
						</div>
					</div>
				</DraggableWindow>

				<DraggableWindow
					noMargin={true}
					offset={50}
					// initialPos={{ x: window.innerWidth - 650, y: 650 }}
					horizontalPosition={"center-right"}
					distanceFromTop={600}
				>
					<a href="/dungeon">
						<div className="relative">
							<GifImage srcSlugPath={"/img/hallway_1"} classes="w-full" />
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
				<Draggable
					initialPos={{ x: 25, y: 1130 }}
					shadow={true}
					material={true}
				>
					<div className="w-65">
						<img src="../img/bliss_poster.jpg" alt="" />
					</div>
				</Draggable>

				<Draggable
					src="../img/fleabag.png"
					classes="w-60"
					toRotate={true}
					initialPos={{ x: window.innerWidth - 550, y: 1600 }}
				/>

				<DraggableWindow
					horizontalPosition={"far-right"}
					distanceFromTop={970}
					title={"Wake up, Neo..."}
					noMargin={true}
				>
					<div className="h-25 bg-[url('../../../public/img/digital_rain.gif')] bg-cover motion-reduce:bg-[url('../../../public/img/patterns/stars.jpg')]"></div>
				</DraggableWindow>

				{/* <DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={250}
					title={"See you space cowboy..."}
					noMargin={true}
				>
					<div className="h-30 p-7 bg-[url('../../../public/img/patterns/stars.gif')] motion-reduce:bg-[url('../../../public/img/patterns/stars.jpg')]"></div>
				</DraggableWindow> */}
				<MovieReviews
					isMoviesVisible={isMoviesVisible}
					setIsMoviesVisible={setIsMoviesVisible}
					movieWindowRef={movieWindowRef}
					openFullscreen={openFullscreen}
					fullscreenImage={fullscreenImage}
				/>

				{/* <DraggableWindow
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
								I love music, and I listen to different stuff every day. This is
								more of a hall of fame for albums I can listen to from the first
								song to the last.
							</span>
						</div>
						<div className="flex gap-4 flex-wrap justify-between items-start p-3 ">
							{musicAlbums.map((album) => (
								<div
									className="w-35 text-xs font-mono text-center relative"
									key={album.id}
								>
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
				</DraggableWindow> */}

				{/* <HeaderMarquee /> */}
				<DraggableWindow
					noMargin={true}
					horizontalPosition={"center"}
					distanceFromTop={20}
					// classes="text-lg bg-emerald-200"
				>
					<div className="p-1 xl:p-2 2xl:p-3 gap-3 bg-repeat relative border border-white grid grid-cols-4 justify-center items-center bg-emerald-50">
						<div className=" flex flex-col text-xs/tight">{intro}</div>
						<div className="col-span-2 flex flex-col justify-center items-center">
							<p className="italic text-3xl 2xl:text-4xl font-serif filter-[drop-shadow(2px_2px_0_#34d399)] font-bold">
								· · ─ ·✶ WELCOME! ✶· ─ · ·
							</p>
							<nav className="flex gap-5 text-sm">
								<a
									href=""
									className="underline font-bold hover:scale-108 hover:text-emerald-800"
								>
									Link 1
								</a>
								<a
									href=""
									className="underline font-bold hover:scale-108 hover:text-emerald-800"
								>
									Link 2
								</a>
								<a
									href=""
									className="underline font-bold hover:scale-108 hover:text-emerald-800"
								>
									Link 3
								</a>
							</nav>
						</div>
						<div className=" flex flex-col text-sm italic font-bold text-emerald-900 filter-[drop-shadow(0_0_3px_#6ee7b7)] text-right">
							Dear fellow traveller <br />
							under the moon <br /> I think I'm growing weary <br /> and I'm
							hoping you'll come soon...
							{/* Lorem ipsum dolor sit amet consectetur adipisicing */}
						</div>
					</div>
				</DraggableWindow>

				<WelcomeWindow />
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
						type="button"
						onClick={() => closeFullScreen()}
						className="absolute top-3 right-3 bg-white p-5 border cursor-pointer"
					>
						Close
					</button>
				</div>
			)}
		</>
	);
}

export default App;
