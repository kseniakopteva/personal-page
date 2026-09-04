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
	mainWindowText,
	musicAlbums as mb,
	stickyNotes as sn,
} from "./data";
import Footer from "./components/Footer";
import FullscreenImage from "./components/FullscreenImage";
import { getRandomInt } from "./util";
import Stamps from "./components/Stamps";
import JSPaint from "./components/JSPaint";
import clsx from "clsx";
import { useEffect } from "react";

function App() {
	const zIndexCounterHook = useContext(GlobalZIndexCounterContext);
	const { themeMainBackgroundObject } = useContext(ThemeContext);

	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const movieWindowRef = useRef();

	const [isMusicVisible, setIsMusicVisible] = useState(false);
	const musicWindowRef = useRef();
	const [albumHoverDesc, setAlbumHoverDesc] = useState("");

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

	const { themeWindowClasses, themeTopBarClasses, themeBodyClasses } =
		useContext(ThemeContext);

	function setMusicText(album) {
		let finalText = "";
		if (album.name) {
			if (album.artist) {
				finalText = `${album.name} by ${album.artist}`;
			} else {
				finalText = `${album.name}`;
			}
		} else {
			if (album.artist) {
				finalText = `${album.artist}`;
			} else {
				finalText = ``;
			}
		}
		return setAlbumHoverDesc(finalText);
	}

	return (
		<>
			<main
				style={{
					position: "relative",
					height: "2077px",
					...themeMainBackgroundObject,
				}}
			>
				{/* top gradient */}
				<div className="absolute bg-[url(/img/patterns/stars.gif)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0))] [mix-blend-mode:overlay] top-0 left-0 w-screen h-[800px] "></div>
				<div className="absolute bg-[url(/img/patterns/stars.gif)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] [mix-blend-mode:overlay] top-0 left-0 w-screen h-[300px] "></div>

				{/* whole page sparkles */}
				<div className="absolute bg-[url(/img/patterns/stars.gif)] [mix-blend-mode:screen] top-0 left-0 w-screen h-full "></div>

				{/* bottom sparkle gradient */}
				<div className="absolute bg-[url(/img/patterns/stars.gif)] [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0))] [mix-blend-mode:overlay] bottom-0 left-0 w-screen h-[500px] "></div>

				{/* bottom green gradient */}
				<div className="absolute bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(75,134,42,0.75)_100%)] bottom-0 left-0 w-screen h-[500px]"></div>

				{/* <img
					className="absolute top-100 left-100 w-60"
					src="/public/img/pc.gif"
					alt=""
				/> */}

				<img
					className="absolute top-10 -left-30 w-100 drop-shadow-[0_0_10px_#a7f3d0]"
					src="/public/img/minecraft.gif"
					alt=""
				/>

				<div className="absolute top-100 left-100 w-60 opacity-80 ">
					<div className="relative">
						<img
							className="absolute left-0"
							src="/public/img/graffiti/x.png"
							alt=""
						/>
						<img
							className="absolute left-20 top-5"
							src="/public/img/graffiti/e.png"
							alt=""
						/>
						<img
							className="absolute left-42 -top-5f"
							src="/public/img/graffiti/n.png"
							alt=""
						/>
						<img
							className="absolute left-60"
							src="/public/img/graffiti/i.png"
							alt=""
						/>
						<img
							className="absolute left-75"
							src="/public/img/graffiti/a.png"
							alt=""
						/>

						<img
							className="w-25 absolute left-0 -bottom-70 filter-[hue-rotate(90deg)]"
							src="/public/img/graffiti/littleguy.gif"
							alt=""
						/>
					</div>
				</div>

				<img
					className="absolute bottom-10 left-10 w-160 drop-shadow-[1px_1px_0_black,-1px_-1px_0_black,-1px_1px_0_black,1px_-1px_0_black]"
					src="/public/img/treehouse.png"
					alt=""
				/>

				<div className="absolute bottom-20 right-80">
					<img className="" src="/public/img/flowers.png" alt="" />
					<img
						className="absolute top-5 -left-10"
						src="/public/img/flowers.png"
						alt=""
					/>
					<img
						className="absolute top-0 -left-20"
						src="/public/img/flowers.png"
						alt=""
					/>
					<img
						className="absolute top-5 -left-30"
						src="/public/img/flowers.png"
						alt=""
					/>
					<img
						className="absolute top-0 -left-40"
						src="/public/img/flowers.png"
						alt=""
					/>
					<img
						className="absolute top-5 -left-50"
						src="/public/img/flowers.png"
						alt=""
					/>
					<img
						className="absolute -top-2 -left-13"
						src="/public/img/frisk.png"
						alt=""
					/>
				</div>

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

				<Tarot />

				<DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={20}
					title={"Museum"}
					noMargin={true}
				>
					<div className="w-full h-90 p-3 bg-[url('../../../public/img/patterns/red.webp')] bg-size-[100%_auto] bg-center flex flex-col justify-center items-center">
						<a href="/museum">
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
							href="/museum"
							className="text-white underline text-shadow font-bold font-italic text-shadow-md text-shadow-white/50"
						>
							VISIT THE MUSEUM NOW
						</a>
					</div>
				</DraggableWindow>

				<div
					className={clsx(
						"absolute w-[32%] top-[790px]",
						themeWindowClasses,
						themeTopBarClasses,
						themeBodyClasses,
					)}
					style={{
						left: `calc(20vw)`,
					}}
				>
					<div className="flex justify-end items-end p-5 text-sm h-[500px] bg-[url(../../../public/img/corkboard/corkboard.jpg)] bg-cover">
						<img
							className="w-20"
							src="/public/img/corkboard/pushpins.png"
							alt=""
						/>
					</div>
				</div>

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

				<Draggable
					initialPos={{ x: 0.2 * window.innerWidth + 350, y: 820 }}
					material={true}
					shadow={"small"}
				>
					<img className="w-30" src="/public/img/garfield.gif" alt="" />
				</Draggable>

				<Draggable
					initialPos={{ x: 0.2 * window.innerWidth + 120, y: 1090 }}
					material={true}
					shadow={"small"}
					toRotate={true}
				>
					<img
						className="w-10 absolute -top-1 left-[calc(50%-25px)]"
						src="/public/img/thumbtack.png"
						alt=""
					/>
					<img
						className="w-70"
						src="/public/img/gravity_falls_postcard.jpg"
						alt=""
					/>
				</Draggable>

				<DraggableWindow
					horizontalPosition={"center-left"}
					distanceFromTop={1325}
					title={"Consectetur"}
					noMargin={true}
				>
					<div className=" h-[375px]">
						<div className="text-blue-900 pl-22 pb-5 pr-5 bg-[url(/img/patterns/paper.gif)] bg-size-[510px] bg-repeat">
							<h3 className="text-lg font-bold py-2">Heading</h3>
							<p className="text-xs/tight italic">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								modi at quaerat ab sequi quos quia recusandae. Esse perspiciatis
								recusandae ea saepe consectetur rem autem sunt, sit itaque,
								dignissimos sint. Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
								adipisci expedita alias doloremque sint rerum, eum, saepe,
								maxime quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit
								amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Amet modi at quaerat ab sequi quos
								quia recusandae. Esse perspiciatis recusandae ea saepe
								consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
								ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime
								cum porro. Asperiores fuga eius adipisci expedita alias
								doloremque sint rerum, eum, saepe, maxime quisquam iure ab ad
								eos veritatis! Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Amet modi at quaerat ab sequi quos quia
								recusandae. Esse perspiciatis recusandae ea saepe consectetur
								rem autem sunt, sit itaque, dignissimos sint. Lorem ipsum, dolor
								sit amet consectetur adipisicing elit. Ex maxime cum porro.
								Asperiores fuga eius adipisci expedita alias doloremque sint
								rerum, eum, saepe, maxime quisquam iure ab ad eos veritatis!
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Amet modi at
								quaerat ab sequi quos quia recusandae. Esse perspiciatis
								recusandae ea saepe consectetur rem autem sunt, sit itaque,
								dignissimos sint. Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Ex maxime cum porro. Asperiores fuga eius
								adipisci expedita alias doloremque sint rerum, eum, saepe,
								maxime quisquam iure ab ad eos veritatis! Lorem ipsum dolor, sit
								amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Amet modi at quaerat ab sequi quos
								quia recusandae. Esse perspiciatis recusandae ea saepe
								consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
								ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime
								cum porro. Asperiores fuga eius adipisci expedita alias
								doloremque sint rerum, eum, saepe, maxime quisquam iure ab ad
								eos veritatis! Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Amet modi at quaerat ab sequi quos quia
								recusandae. Esse perspiciatis recusandae ea saepe consectetur
								rem autem sunt, sit itaque, dignissimos sint. Lorem ipsum, dolor
								sit amet consectetur adipisicing elit. Ex maxime cum porro.
								Asperiores fuga eius adipisci expedita alias doloremque sint
								rerum, eum, saepe, maxime quisquam iure ab ad eos veritatis!
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</DraggableWindow>

				{/* <DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={1690}
					title={"Don't open me"}
					minimized={true}
				>
					<div className="text-sm h-[35px] w-full flex justify-center items-center">
						... Oh man... :(
					</div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"far-left"}
					distanceFromTop={1730}
					title={"Open me instead"}
					minimized={true}
				>
					<div className="text-sm h-[35px] w-full flex justify-center items-center">
						Hey, nice! :)
					</div>
				</DraggableWindow> */}

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

				<JSPaint key="jspaint" />

				<DraggableWindow
					noMargin={true}
					horizontalPosition={"center"}
					distanceFromTop={20}
					classes="relative"
				>
					<div className="p-1 xl:p-2 2xl:p-3 gap-3 bg-repeat border border-white grid grid-cols-4 justify-center items-center bg-emerald-50">
						<div className=" flex flex-col text-xs/tight">
							{
								// intro
							}
							<img
								className="w-40 absolute bottom-0 left-44 [transform:scale(-1,1)]"
								src="/public/img/sayori.png"
								alt=""
							/>
							<img
								className="w-35 absolute bottom-0 -left-10"
								src="/public/img/natsuki.png"
								alt=""
							/>
							<img
								className="w-35 absolute bottom-0 left-27"
								src="/public/img/yuri.png"
								alt=""
							/>
							<img
								className="w-38 absolute bottom-0 left-8"
								src="/public/img/monika2.png"
								alt=""
							/>
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
						</div>
					</div>
				</DraggableWindow>

				<DraggableWindow
					title={"Main Window"}
					horizontalPosition={"center"}
					distanceFromTop={190}
					notClosable={false}
				>
					<div className="p-2 flex flex-col justify-between min-w-0">
						<header>
							<h1 className="text-3xl font-bold">Hello World!</h1>
							<h2 className="text-lg italic">This is my page.</h2>
							<div className="border border-sky-200 my-3"></div>
						</header>
						<div className="flex flex-col lg:flex-row  gap-5 items-start">
							<p className="text-sm/tight text-justify w-full lg:min-w-[50%]">
								{mainWindowText.map((paragraph, index) => (
									<p
										key={index}
										className="mb-2f first-letter:text-xl first-letter:text-emerald-700"
									>
										{paragraph}
									</p>
								))}
							</p>
							<GifImage
								srcSlugPath={`/img`}
								orig={"gif"}
								imgName={"boot_up"}
								classes={"w-full"}
								pictureClasses={"w-full lg:min-w-[50%]"}
							/>
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

				{/* <Draggable material={"small"} shadow={"small"}>
					<img
						className="w-30 drop-shadow-[0px_0px_0_black,-0px_-0px_0_black,-0px_0px_0_black,0px_-0px_0_black]"
						src="/public/img/finn.png"
						alt=""
					/>
				</Draggable>
				<Draggable material={"small"} shadow={"small"}>
					<img
						className="w-30 drop-shadow-[1px_1px_0_black,-1px_-1px_0_black,-1px_1px_0_black,1px_-1px_0_black]"
						src="/public/img/fern.png"
						alt=""
					/>
				</Draggable>
				<Draggable material={"small"} shadow={"small"}>
					<img className="w-30 " src="/public/img/jake.png" alt="" />
				</Draggable>  */}

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
					initialPos={{ x: 20, y: 1230 }}
					shadow={true}
					material={true}
				>
					<div className="w-70 border-10 border-white">
						<img src="../img/cat_window.jpg" alt="" />
					</div>
				</Draggable>

				<DraggableWindow
					horizontalPosition={"far-right"}
					distanceFromTop={1060}
					title={"Wake up, Neo..."}
					noMargin={true}
				>
					<div className="h-25 bg-[url('../../../public/img/digital_rain.gif')] bg-cover motion-reduce:bg-[url('../../../public/img/reduced/digital_rain.jpg')]"></div>
				</DraggableWindow>

				<DraggableWindow
					horizontalPosition={"far-left"}
					offset={200}
					distanceFromTop={1200}
					title={"My button"}
					noMargin={true}
					setWidth={"w-[12%]"}
				>
					<div className="h-30 flex flex-col text-center justify-center items-center p-1 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#10b98155_100%)] border-2 border-white">
						<p className="text-xs text-emerald-700">
							Hey, in case you want to add it to your site.. here is my button.
						</p>
						<img
							className="[pointer-events:auto]! w-[103px] m-2 drop-shadow-[2px_2px_0_white,-2px_-2px_0_white,-2px_2px_0_white,2px_-2px_0_white]"
							src="/public/img/buttons/mine4.png"
							alt=""
						/>

						<p className="text-xs text-slate-400">(don't hotlink)</p>
					</div>
				</DraggableWindow>

				<DraggableWindow
					noMargin={true}
					title={"Thank you for visiting..."}
					// initialPos={{ x: window.innerWidth / 2 - 86, y: 1130 }}
					horizontalPosition={"far-right"}
					offset={-300}
					setWidth={true}
					distanceFromTop={1970}
				>
					<div className="bg-emerald-50 border-2 border-white ">
						<div className="px-1 py-2 w-60 text-[24px] font-serif italic font-bold filter-[drop-shadow(2px_1px_0_#34d399)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#10b98155_100%)]">
							·✶ Xenia's page ✶·
						</div>
					</div>
				</DraggableWindow>

				<div className="absolute bottom-0 right-0">
					<button
						className="cursor-pointer"
						type="button"
						onClick={() => setLeonQuip(getRandomInt(0, leonQuips.length - 1))}
					>
						<img
							className="slight-scale relative m-7 z-1 drop-shadow-[1px_1px_0_black,-1px_-1px_0_black,-1px_1px_0_black,1px_-1px_0_black]"
							src="/public/img/leon.png"
							alt=""
						/>

						<div
							key={leonQuip}
							className="poing text-center text-emerald-950 speech-bubble absolute -top-20 left-5 bg-white h-20 w-40 border rounded-lg p-3 flex justify-center items-center italic text-xs/tight"
						>
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
					<div className=" w-190 bg-[url(../../../public/img/patterns/purple2.gif)] shadow-[inset_0_0_50px_#000]">
						<div className="flex gap-5"></div>
						<div className="flex gap-5 [row-gap:10px] flex-wrap justify-start items-start p-8 overflow-hidden">
							{musicAlbums.map((album) => (
								// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
								// biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
								<div
									className="w-25 text-xs font-mono text-center relative mr-5"
									key={album.id}
									onMouseOver={() => {
										setMusicText(album);
									}}
									onMouseOut={() => setMusicText("")}
								>
									<img
										alt=""
										src="/img/music/CD-ROM.png"
										className="absolute top-0 left-8 z-1 w-25 h-25 pointer-events-none"
									/>
									<img
										alt=""
										className="relative w-25 h-25 mb-2 [box-shadow:1px_1px_4px_0px_#000] border scale-100 hover:scale-[1.6] z-2 hover:z-100 transition-transform"
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
								</div>
							))}
							<span className="text-xs text-white w-20 ml-5 h-25 flex items-center justify-center leading-3 text-center">
								{albumHoverDesc || "Here is some stuff I like. (hover over)"}
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
