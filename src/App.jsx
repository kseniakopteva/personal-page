import { useContext, useRef, useState } from "react";
import Clock from "./components/Clock";
import DraggableWindow from "./layouts/DraggableWindow";
import { GlobalZIndexCounterContext, ThemeContext } from "./contexts";
import Draggable from "./layouts/Draggable";
import MovieReviews from "./components/MovieReviews";
import Blinkies from "./components/Blinkies";
import CoolWebsiteLinks from "./components/CoolWebsiteLinks";
import Button from "./components/Button";
import GifImage from "./components/GifImage";
import WelcomeWindow from "./components/WelcomeWindow";
import Tarot from "./components/Tarot";
import {
	artPieces,
	intro,
	leonQuips as lq,
	musicAlbums as mb,
	stickyNotes as sn,
} from "./data";
import Footer from "./components/Footer";
import FullscreenImage from "./components/FullscreenImage";
import { getRandomInt } from "./util";
import Stamps from "./components/Stamps";

function App() {
	const zIndexCounterHook = useContext(GlobalZIndexCounterContext);
	const { themeMainBackgroundObject } = useContext(ThemeContext);

	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const movieWindowRef = useRef();

	const [isMusicVisible, setIsMusicVisible] = useState(false);
	const musicWindowRef = useRef();

	const [fullscreenImage, setFullscreenImage] = useState("");

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

	const [paintingID] = useState(getRandomInt(1, 13));
	// const paintingID = getRandomInt(1, 13);
	const painting = artPieces.find((painting) => painting.id === paintingID);

	const musicAlbums = mb;

	const stickyNotes = sn;

	const leonQuips = lq;
	const [leonQuip, setLeonQuip] = useState(getRandomInt(0, 17));

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
					horizontalPosition={"far-left"}
					distanceFromTop={20}
					title={"Art Gallery"}
					noMargin={true}
				>
					<div className="w-full h-90 p-3 bg-[url('../../../public/img/patterns/red.webp')] bg-size-[100%_auto] bg-center flex flex-col justify-center items-center">
						<a href="/art-gallery">
							<img
								className="max-h-50 border-18 [border-image:url(/img/borders/frame1.png)_18_round]"
								src={`/img/art/${painting.image}`}
								alt=""
							/>
						</a>
						<div className="bg-stone-400 mt-3 border-l-2 border-t-2 border-stone-200 [box-shadow:inset_-2px_-2px_0px_rgba(0,0,0,0.25)] text-amber-950 font-serif rounded-xs p-2 mb-5 text-xs/tight max-w-62 drop-shadow-[0px_0px_2px_#000]">
							{painting.author} <br />
							<span className="font-bold text-xs">
								{painting.title.slice(0, 51)}
								{painting.title.length > 51 ? "..." : ""}
							</span>
							, {painting.year} <br />
							<br />
							{painting.medium} <br />
						</div>
						<a
							href="/art-gallery"
							className="text-white underline text-shadow font-bold font-italic text-shadow-md text-shadow-white/50"
						>
							VISIT THE ART GALLERY NOW
						</a>
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"center-left"}
					distanceFromTop={790}
					title={"Corkboard"}
					noMargin={true}
				>
					<div className="flex justify-end items-end p-5 text-sm h-[470px] bg-[url(../../../public/img/corkboard/corkboard.jpg)] bg-cover">
						<img
							className="w-20"
							src="/public/img/corkboard/pushpins.png"
							alt=""
						/>
					</div>
				</DraggableWindow>

				{stickyNotes.map((sticky) => {
					return (
						<Draggable
							key={sticky.id}
							material={"small"}
							shadow={"small"}
							initialPos={{ x: sticky.x, y: sticky.y }}
							toRotate={true}
						>
							<img
								className="w-[150px] relative  m-1.25"
								src={`/img/corkboard/${sticky.img}.png`}
								alt=""
							/>
							{!sticky.long ? (
								<p className="absolute italic text-blue-900 leading-tight top-6 left-2 my-4 mr-6 ml-2 text-center sticky-note-font">
									{!sticky.link ? (
										sticky.text
									) : (
										<a className="underline" href={sticky.link} target="_blank">
											{sticky.text}
										</a>
									)}
								</p>
							) : (
								<p className="absolute italic text-blue-900 text-[11px]/tight top-8 left-0 mx-3 text-center sticky-note-font">
									{!sticky.link ? (
										sticky.text
									) : (
										<a className="underline" href={sticky.link} target="_blank">
											{sticky.text}
										</a>
									)}
								</p>
							)}
						</Draggable>
					);
				})}

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
					horizontalPosition={"center-left"}
					distanceFromTop={1790}
					title={"Don't open me"}
					minimized={true}
				>
					<div className="text-sm h-[35px] w-full flex justify-center items-center">
						... Oh man... :(
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"center-left"}
					distanceFromTop={1830}
					title={"Open me instead"}
					minimized={true}
				>
					<div className="text-sm h-[35px] w-full flex justify-center items-center">
						Hey, nice! :)
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

				{/* <DraggableWindow
					horizontalPosition={"center-right"}
					distanceFromTop={1260}
					title={
						"For sudden bursts of creativity... (if you drag/minimize: the art will be lost!)"
					}
					noMargin={true}
				>
					<div className="text-sm h-[565px]">
						<iframe
							title="Paint"
							src="https://jspaint.app"
							width="100%"
							height="100%"
						></iframe>
					</div>
				</DraggableWindow> */}

				<DraggableWindow
					noMargin={true}
					horizontalPosition={"center"}
					distanceFromTop={20}
					// classes="text-lg bg-emerald-200"
				>
					<div className="p-1 xl:p-2 2xl:p-3 gap-3 bg-repeat relative border border-white grid grid-cols-4 justify-center items-center bg-emerald-50">
						<div className=" flex flex-col text-xs/tight">
							{
								// intro
							}
						</div>
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

				<DraggableWindow
					title={"Main Window"}
					horizontalPosition={"center"}
					distanceFromTop={190}
					notClosable={false}
				>
					<div className="h-[520px] p-2 flex flex-col justify-between">
						<header>
							<h1 className="text-3xl font-bold">Hello World!</h1>
							<h2 className="text-lg italic">This is my page.</h2>
							<div className="border border-sky-200 my-3"></div>
						</header>
						<div className="flex gap-5">
							<p className="text-sm/tight text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								dolore error, et dicta sequi voluptatibus ullam delectus
								repellendus fuga similique sed consequuntur. Repudiandae,
								maiores ullam ad quo nemo asperiores doloribus. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Earum non quis fuga
								deserunt. Repudiandae esse maiores quos, enim facere delectus et
								ullam tenetur unde nesciunt ad error modi maxime tempore. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Atque nemo
								neque deleniti blanditiis porro quae odio, a cumque impedit
								adipisci repellat architecto obcaecati aut nihil fugit vitae
								expedita reiciendis maiores? Lorem ipsum dolor sit, amet
								consectetur adipisicing elit. Voluptatibus voluptas nulla nihil
								explicabo ex, non fuga, fugiat alias ab perspiciatis velit nobis
								omnis in quas, doloribus aliquam minus ipsam aliquid. Lorem
								ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
								dolor? Possimus aut amet voluptatum, quo quisquam culpa
								distinctio magni accusantium reiciendis in, est incidunt iusto
								voluptatibus quasi. Sequi, adipisci earum? Lorem ipsum dolor sit
								amet consectetur, adipisicing elit.
							</p>
							<img className="w-130" src="/img/boot_up.gif" alt="" />
							{/* TODO: put GifImage here. for some reason doesn't work rn */}
						</div>
						<Stamps />
					</div>
				</DraggableWindow>

				<Draggable
					material={"small"}
					shadow={"small"}
					initialPos={{ x: window.innerWidth - 610, y: 135 }}
				>
					<img className="w-[450px]" src="/img/gumi.png" alt="" />
				</Draggable>

				<DraggableWindow
					noMargin={true}
					offset={50}
					// initialPos={{ x: window.innerWidth - 650, y: 650 }}
					horizontalPosition={"center-right"}
					distanceFromTop={600}
				>
					<a href="/dungeon">
						<div className="relative">
							<GifImage
								srcSlugPath={"/img"}
								imgName={"hallway_1"}
								classes="w-full"
							/>
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
					noMargin={true}
				>
					<Footer />
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
					distanceFromTop={1040}
					title={"Wake up, Neo..."}
					noMargin={true}
				>
					<div className="h-25 bg-[url('../../../public/img/digital_rain.gif')] bg-cover motion-reduce:bg-[url('../../../public/img/patterns/stars.jpg')]"></div>
				</DraggableWindow>

				<div className="absolute bottom-0 right-0">
					<button
						className="cursor-pointer"
						type="button"
						onClick={() => setLeonQuip(getRandomInt(0, 17))}
					>
						<img
							className="relative m-7 z-1 "
							src="/public/img/leon.png"
							alt=""
						/>

						<div className="text-center text-emerald-950 speech-bubble absolute -top-20 left-5 bg-white z-9999 h-20 w-40 border rounded-lg p-3 flex justify-center items-center italic text-xs/tight">
							{leonQuips[leonQuip]}
						</div>
						<div className="absolute bottom-10 right-13 bg-emerald-950 w-30 h-20 rounded-[100%] blur-md opacity-70"></div>
					</button>
				</div>

				<MovieReviews
					isMoviesVisible={isMoviesVisible}
					setIsMoviesVisible={setIsMoviesVisible}
					movieWindowRef={movieWindowRef}
					setFullscreenImage={setFullscreenImage}
					fullscreenImage={fullscreenImage}
				/>

				<DraggableWindow
					title={"Music"}
					ref={musicWindowRef}
					initialPos={{
						x: 500,
						y: 170,
					}}
					isVisible={isMusicVisible}
					setIsVisible={setIsMusicVisible}
					noMargin={true}
				>
					<div className=" w-180">
						<div className="flex gap-5"></div>
						<div className="flex gap-5 [row-gap:10px] flex-wrap justify-start items-start p-3 overflow-hidden ">
							{musicAlbums.map((album) => (
								<div
									className="w-25 text-xs font-mono text-center relative mr-5"
									key={album.id}
								>
									<img
										alt=""
										src="/img/music/CD-ROM.png"
										className="absolute top-0 left-8 z-1 w-25 h-25 pointer-events-none"
									/>
									<img
										alt=""
										className="relative w-25 h-25 mb-2 [box-shadow:1px_1px_4px_0px_#000] border scale-100 hover:scale-[2] z-2 hover:z-100 transition-transform"
										src={`/img/music/${album.img}`}
									/>
									<div className=" drop-shadow-[4px_4px_0_#000] bg-white absolute top-0 left-0 w-25 h-25 z-0">
										fsd
									</div>
									<img
										alt=""
										src="/img/music/overlay2.jpg"
										className="absolute top-0 left-0 z-3 w-25 h-25 pointer-events-none mix-blend-screen"
									/>
									<p className="font-bold text-sm">{album.name}</p>
									<p>{album.artist}</p>
								</div>
							))}
							<span className="text-xs w-20 ml-5 h-25 flex items-center justify-center leading-3 text-center">
								Here is some stuff I like.
							</span>
						</div>
					</div>
				</DraggableWindow>

				<WelcomeWindow />
			</main>
			<FullscreenImage
				fullscreenImage={fullscreenImage}
				setFullscreenImage={setFullscreenImage}
			/>
		</>
	);
}

export default App;
