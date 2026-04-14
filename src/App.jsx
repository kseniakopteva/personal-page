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

function App() {
	const zIndexCounterHook = useState(0);
	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const movieWindowRef = useRef();

	const [fullscreenImage, setFullscreenImage] = useState("");
	const dimWrapperRef = useRef(null);

	function toggleMovieReviews() {
		setIsMoviesVisible(!isMoviesVisible);
		movieWindowRef.current.style.zIndex = zIndexCounterHook[0];
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

	return (
		<GlobalZIndexCounterContext value={zIndexCounterHook}>
			<header
				style={{
					position: "relative",
					minHeight: "100vh",
					height: "2000px",
				}}
			>
				<DraggableWindow
					initialPos={{ x: window.innerWidth - 200, y: 30 }}
					title={"Clock"}
				>
					<Clock />
				</DraggableWindow>
				<DraggableWindow
					initialPos={{ x: 40, y: 780 }}
					title={"Cool websites I like"}
					classes="max-w-60"
					noMargin={true}
				>
					<CoolWebsiteLinks />
				</DraggableWindow>
				<DraggableWindow
					initialPos={{ x: window.innerWidth - 230, y: 370 }}
					title={"Blinkies"}
					noMargin={false}
				>
					<Blinkies />
				</DraggableWindow>
				<DraggableWindow
					initialPos={{ x: window.innerWidth - 220, y: 180 }}
					noMargin={true}
				>
					<div className="flex flex-col gap-2 w-35 p-3">
						<Button onClick={toggleMovieReviews}>My Movies</Button>
						<Button>My Music</Button>
						<Button>My Photos</Button>
					</div>
				</DraggableWindow>

				<DraggableWindow
					initialPos={{ x: 20, y: 426 }}
					classes="text-sm max-w-65"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi at
					quaerat ab sequi quos quia recusandae. Esse perspiciatis recusandae ea
					saepe consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime cum
					porro. Asperiores fuga eius adipisci expedita alias doloremque sint
					rerum, eum, saepe, maxime quisquam iure ab ad eos veritatis! Lorem
					ipsum dolor, sit amet consectetur adipisicing elit.
				</DraggableWindow>
				<DraggableWindow initialPos={{ x: 20, y: 20 }} classes="text-sm max-w-65">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi at
					quaerat ab sequi quos quia recusandae. Esse perspiciatis recusandae ea
					saepe consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit.
				</DraggableWindow>
				<DraggableWindow initialPos={{ x: 300, y: 900 }}>
					{" "}
					<div className="text-sm max-w-145 h-[50vh]">
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

				<DraggableWindow initialPos={{ x: 300, y: 1450 }}>
					{" "}
					<div className="text-sm max-w-145 h-[40vh]">
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

				<DraggableWindow initialPos={{ x: window.innerWidth - 700, y: 900 }}>
					{" "}
					<div className="text-sm max-w-100 h-[30vh]">
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

				<DraggableWindow initialPos={{ x: window.innerWidth - 700, y: 1260 }}>
					{" "}
					<div className="text-sm max-w-100 h-[60vh]">
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
					initialPos={{ x: 300, y: 190 }}
					notClosable={false}
				>
					<div className="md:w-150 lg:w-200 2xl:w-260">
						<div className="h-[67vh] p-5">
							<h1 className="text-3xl font-bold">Hello World!</h1>
							<h2 className="text-lg italic">This is my page.</h2>
							<div className="border border-sky-200 my-3"></div>
						</div>
					</div>
				</DraggableWindow>

				<DraggableWindow
					noMargin={true}
					initialPos={{ x: window.innerWidth - 650, y: 650 }}
				>
					<div className="relative">
						<img src="/img/hallway_1.gif" alt="" className="w-100" />
						<p className="absolute text-center top-[calc(50%-30px)] text-white left-[calc(50%-70px)] font-mono text-shadow-lg text-shadow-white">
							Follow me <br />
							into the dungeon
						</p>
					</div>
				</DraggableWindow>

				<Draggable initialPos={{ x: window.innerWidth - 710, y: 610 }}>
					<img
						src="/img/jester2_right.png"
						className="h-70 filter-[drop-shadow(0_2px_2px_#000)]"
						alt=""
					/>
				</Draggable>

				<DraggableWindow title={"Footer"} initialPos={{ x: 300, y: 1900 }}>
					<div className="md:w-150 lg:w-200 2xl:w-250 mx-5 h-[10vh]">
						<div className=""></div>
					</div>
				</DraggableWindow>
				<Draggable initialPos={{ x: window.innerWidth - 350, y: 1600 }}>
					{" "}
					<div className="w-70 [box-shadow:0px_2px_10px_3px_#000] transform-[rotate(0.005turn)]">
						<img src="../img/ce13dfed0ee832386c9be45245b7f3f7.jpg" alt="" />
					</div>
				</Draggable>
				<DraggableWindow
					initialPos={{ x: 30, y: 250 }}
					title={"See you space cowboy..."}
					noMargin={true}
				>
					<div className="w-60 h-30 p-7 bg-[url('../../../public/img/patterns/stars.gif')]"></div>
				</DraggableWindow>
				<MovieReviews
					isMoviesVisible={isMoviesVisible}
					setIsMoviesVisible={setIsMoviesVisible}
					movieWindowRef={movieWindowRef}
					fullscreenImage={fullscreenImage}
					setFullscreenImage={setFullscreenImage}
				/>

				<HeaderMarquee />
			</header>
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
