import { useRef, useState } from "react";
import Clock from "./components/Clock";
import DraggableWindow from "./layouts/DraggableWindow";
import { GlobalZIndexCounterContext } from "./contexts";
import Draggable from "./layouts/Draggable";

function App() {
	const zIndexCounterHook = useState(0);
	const [isMoviesVisible, setIsMoviesVisible] = useState(false);
	const [isCDBroken, setIsCDBroken] = useState(false);
	const movieWindowRef = useRef();

	const [activeMovie, setActiveMovie] = useState(0);

	function toggleMovieReviews() {
		setIsMoviesVisible(!isMoviesVisible);
		movieWindowRef.current.style.zIndex = zIndexCounterHook[0];
		zIndexCounterHook[1](zIndexCounterHook[0] + 1);
	}

	const movieReviews = [
		{
			id: 0,
			name: "Movie 1",
			body: "Rerum unde,autem dicta qui quam omnis dolorum velit debitis amet nesciunt ipsum alias quis possimus accusamus, isteofficia! Lorem ipsum dolor sit amet consecteturadipisicing elit. Similique sequi beatae, minus quasi labore a veniam repellendus libero quia id earum,autem exercitationem animi, sed doloribus eaque ipsa velit.",
			rating: 4,
		},
		{
			id: 1,
			name: "Movie 2",
			body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quasi quia quas, veniam eum at quod officia velit necessitatibus voluptatum omnis facere quidem sit magni aperiam ipsam sequi minus obcaecati! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga asperiores repudiandae dolore adipisci temporibus magni,ratione aliquid id labore quam expedita soluta maxime explicabo, saepe accusamus numquam reprehenderitconsectetur non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus autem! Rerum unde,autem dicta qui quam omnis dolorum velit debitis amet nesciunt ipsum alias quis possimus accusamus, isteofficia! Lorem ipsum dolor sit amet consecteturadipisicing elit. Similique sequi beatae, minus quasi labore a veniam repellendus libero quia id earum,autem exercitationem animi, sed doloribus eaque ipsa 								velit.",
			rating: 5,
		},
		{
			id: 2,
			name: "Movie 3",
			body: "Rerum unde,autem dicta qui quam omnis dolorum velit debitis amet nesciunt ipsum alias quis possimus accusamus, isteofficia! Lorem ipsum dolor sit amet consecteturadipisicing elit. Similique sequi beatae, minus quasi labore a veniam repellendus libero quia id earum,autem exercitationem animi, sed doloribus eaque ipsa velit.",
			rating: 1,
		},
		{
			id: 3,
			name: "Movie 4",
			body: "Fuga asperiores repudiandae dolore adipisci temporibus magni,ratione aliquid id labore quam expedita soluta maxime explicabo, saepe accusamus numquam reprehenderitconsectetur non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus autem! Rerum unde,autem dicta qui quam omnis dolorum velit debitis amet nesciunt ipsum alias quis possimus accusamus, isteofficia! Lorem ipsum dolor sit amet consecteturadipisicing elit. Similique sequi beatae, minus quasi labore a veniam repellendus libero quia id earum,autem exercitationem animi, sed doloribus eaque ipsa 								velit.",
			rating: 3,
		},
		{
			id: 4,
			name: "Movie 5",
			body: "Perspiciatis quasi quia quas, veniam eum at quod officia velit necessitatibus voluptatum omnis facere quidem sit magni aperiam ipsam sequi minus obcaecati! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga asperiores repudiandae dolore adipisci temporibus magni,ratione aliquid id labore quam expedita soluta maxime explicabo, saepe accusamus numquam reprehenderitconsectetur non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus autem! Rerum unde,autem dicta qui quam omnis dolorum velit debitis amet nesciunt ipsum alias quis possimus accusamus, isteofficia! Lorem ipsum dolor sit amet consecteturadipisicing elit. Similique sequi beatae, minus quasi labore a veniam repellendus libero quia id earum,autem exercitationem animi, sed doloribus eaque ipsa 								velit.",
			rating: 2,
		},
	];

	return (
		<GlobalZIndexCounterContext value={zIndexCounterHook}>
			<header>
				<p className="-z-50 absolute top-[calc(50%-50px)] left-[calc(50%-100px)] text-white bg-[rgba(0,0,0,0.5)] px-3 text-sm">
					reload the page to restore everything...
				</p>
				<DraggableWindow
					initialPos={{ x: window.innerWidth - 200, y: 50 }}
					title={"Clock"}
				>
					<Clock />
				</DraggableWindow>
				<DraggableWindow
					initialPos={{ x: window.innerWidth - 200, y: 230 }}
					okButton={true}
				>
					<h1 className="text-sm italic max-w-30">
						Some things can be double-clicked...
					</h1>
				</DraggableWindow>

				<DraggableWindow
					initialPos={{ x: 20, y: window.innerHeight - 360 }}
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
				<DraggableWindow
					title={"Main Window"}
					initialPos={{ x: 300, y: 10 }}
					scrollable={true}
					notClosable={false}
				>
					<div className="md:w-150 lg:w-200 2xl:w-250  m-5">
						<div className="">
							<h1 className="text-3xl font-bold">Hello World!</h1>
							<h2 className="text-lg italic">This is my page.</h2>
							<div className="border border-sky-200 my-3"></div>
						</div>
						<button
							className="px-2 py-1 border border-black rounded bg-lime-400 cursor-pointer"
							onClick={toggleMovieReviews}
						>
							My Movie Reviews
						</button>
					</div>
				</DraggableWindow>
				<DraggableWindow
					ref={movieWindowRef}
					isVisible={isMoviesVisible}
					setIsVisible={setIsMoviesVisible}
					initialPos={{
						x: window.innerWidth / 2 - 300,
						y: window.innerHeight / 2,
					}}
				>
					<div className="md:w-90 lg:w-100 2xl:w-200 flex gap-5">
						<div className="m-1">
							<h2 className="text-xl font-bold">My Movie Reviews</h2>
							<ul className="overflow-y-scroll">
								{movieReviews.map((review) => (
									<li
										key={review.id}
										className={`mt-2 flex gap-3 cursor-pointer   px-2 py-1 transition-all ${review.id === activeMovie.id ? "bg-slate-200" : "hover:bg-slate-100"}`}
										onClick={() => {
											setActiveMovie(review);
										}}
									>
										<img src="https://placehold.co/40" alt="" />
										<div>
											<h3 className="text-lg font-bold">
												{review.name} {"★".repeat(review.rating)}
											</h3>
											<p>Small description here...</p>
										</div>
									</li>
								))}
							</ul>
						</div>
						<div className="flex-1 overflow-y-scroll">
							<h3 className="text-lg font-bold">{activeMovie.name}</h3>
							<p className="text-sm">{activeMovie.body}</p>
						</div>
					</div>
				</DraggableWindow>
				<DraggableWindow initialPos={{ x: 40, y: 40 }} classes="max-w-50">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi at
					quaerat ab sequi quos quia recusandae. Esse perspiciatis recusandae ea
					saepe consectetur rem autem sunt, sit itaque, dignissimos sint. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit.
				</DraggableWindow>
				<Draggable initialPos={{ x: 20, y: 370 }}>
					<div className="w-50 select-none">
						<img
							src="./img/bear.gif"
							alt="bear"
							className="w-full filter-[drop-shadow(0px_0px_2px_rgba(0,0,0,0.5))]"
						/>
					</div>
				</Draggable>
				<Draggable initialPos={{ x: window.innerWidth - 330, y: 370 }}>
					<div className="w-70 select-none">
						{!isCDBroken ? (
							<img
								onDoubleClick={() => {
									setIsCDBroken(true);
								}}
								src="./img/cd.png"
								alt="cd"
								className="w-full filter-[drop-shadow(0px_0px_2px_rgba(0,0,0,0.5))]"
							/>
						) : (
							<img
								src="./img/cd_broken.png"
								alt="cd"
								className="w-full filter-[drop-shadow(0px_0px_2px_rgba(0,0,0,0.5))]"
							/>
						)}
					</div>
				</Draggable>
				<Draggable
					initialPos={{
						x: window.innerWidth - 200,
						y: window.innerHeight - 100,
					}}
				>
					<div className="w-40 select-none">
						<img
							src="./img/nyancat.gif"
							alt="bear"
							className="w-full filter-[drop-shadow(0px_0px_2px_rgba(0,0,0,0.5))]"
						/>
					</div>
				</Draggable>
			</header>
		</GlobalZIndexCounterContext>
	);
}

export default App;
