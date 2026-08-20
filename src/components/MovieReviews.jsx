import { useState } from "react";
import DraggableWindow from "../layouts/DraggableWindow";
import FilmStrip from "../layouts/FilmStrip";
import { movieReviews as mv } from "../data";
import { isArrayEmpty } from "../util";
import { useRef } from "react";
import { useEffect } from "react";

export default function MovieReviews({
	isMoviesVisible,
	setIsMoviesVisible,
	movieWindowRef,
	setFullscreenImage,
	fullscreenImage,
}) {
	const [activeMovie, setActiveMovie] = useState("");

	const scrollable = useRef(null); // ref to elem that needs scroll restored after fullscreen
	const savedScrollTop = useRef(null);

	const movieReviews = mv;

	function localOpenFullscreen(path) {
		// saving the scroll position
		savedScrollTop.current = scrollable.current.scrollTop;

		setFullscreenImage(path);
	}

	// restore scroll position on fullscreen close
	useEffect(() => {
		if (!fullscreenImage && savedScrollTop.current !== null) {
			scrollable.current.scrollTop = savedScrollTop.current;
		}
	}, [fullscreenImage]);

	// restore scroll position on fullscreen open
	useEffect(() => {
		if (fullscreenImage && scrollable.current) {
			scrollable.current.scrollTop = savedScrollTop.current;
		}
	}, [fullscreenImage]);

	return (
		<DraggableWindow
			ref={movieWindowRef}
			isVisible={isMoviesVisible}
			setIsVisible={setIsMoviesVisible}
			initialPos={{
				x: window.innerWidth / 2 - 200,
				y: 260,
			}}
		>
			<div className="flex gap-5 h-100">
				<div className="m-1 min-h-0 flex flex-col">
					<h2 className="text-xl font-bold">My Movie Reviews</h2>
					<ul className="overflow-y-scroll min-h-0 h-full">
						{movieReviews.map((review) => (
							<button
								type="button"
								key={review.id}
								className={`w-full mt-2 text-left flex gap-3 cursor-pointer items-center  px-2 py-1 transition-all min-h-0 ${review.id === activeMovie.id ? "bg-slate-200" : "hover:bg-slate-100"}`}
								onClick={() => {
									setActiveMovie(review);
								}}
							>
								<div className="h-15 w-10 flex justify-center items-center">
									<img
										src={`public/img/reviews/${review.folder}/${review.poster}`}
										alt=""
										className="border border-gray-700 box-content shadow"
									/>
								</div>
								<div className=" min-h-0 flex-1">
									<h3 className="text-lg font-bold">{review.name}</h3>
									<div className="flex justify-between items-center">
										<p className="text-xs text-slate-400">
											{review.created_at}
										</p>
										<span className="text-amber-500">
											{"★".repeat(review.rating)}
											{"☆".repeat(5 - review.rating)}
										</span>
									</div>
									<p className="text-xs">
										{review.body?.join(" ").substr(0, 33)}
									</p>
									<p className="text-xs">
										{review.body?.join(" ").substr(33, 36)}...
									</p>
								</div>
							</button>
						))}
					</ul>
				</div>
				{activeMovie ? (
					<div ref={scrollable} className="flex-1 overflow-y-scroll w-150">
						<div className="flex justify-between items-start">
							<div className="flex-1">
								<h3 className="text-lg font-bold">{activeMovie.name}</h3>
								<p>
									Year: <span className="font-bold">{activeMovie.year}</span>
								</p>
								<p>
									Main actors:{" "}
									{activeMovie.actors?.map((actor, index) => (
										<span key={index}>
											<span className="inline-block border px-1 rounded-sm shadow bg-slate-200 border-slate-500 italic text-sm">
												{actor}
											</span>{" "}
										</span>
									))}
								</p>
								<hr className="m-3 ml-0" />
								<p>First seen: {activeMovie.first_seen}</p>
								<p>Last seen: {activeMovie.last_seen}</p>
								<p>
									Rating:{" "}
									<span className="text-amber-500">
										{"★".repeat(activeMovie.rating)}
										{"☆".repeat(5 - activeMovie.rating)}
									</span>
								</p>
							</div>
							<button
								type="button"
								onClick={() =>
									localOpenFullscreen(
										`reviews/${activeMovie.folder}/${activeMovie.poster}`,
									)
								}
							>
								<img
									src={`public/img/reviews/${activeMovie.folder}/${activeMovie.poster}`}
									alt=""
									className="border mr-3 border-gray-700 box-content [box-shadow:3px_3px_3px_0_#000000] h-40 cursor-pointer"
								/>
							</button>
						</div>

						{!isArrayEmpty(activeMovie.body) && (
							<div>
								{activeMovie.body.map((par, index) => (
									<p className="text-sm my-5" key={index}>
										{par}
										<br />
									</p>
								))}
							</div>
						)}
						{/* <p className="text-sm my-5">{activeMovie.body}</p> */}

						{!isArrayEmpty(activeMovie.favorite_shots) && (
							<div>
								<h4 className="font-bold italic mt-2">Best shots</h4>
								<div className="flex flex-wrap">
									{activeMovie.favorite_shots?.map((shot, index) => (
										<button
											type="button"
											key={index}
											onClick={() =>
												localOpenFullscreen(
													`reviews/${activeMovie.folder}/${shot}`,
												)
											}
										>
											<FilmStrip classes="border-2 m-0.5">
												<img
													src={`public/img/reviews/${activeMovie.folder}/${shot}`}
													alt=""
													className="w-37 h-21 cursor-pointer"
												/>
											</FilmStrip>
										</button>
									))}
								</div>
							</div>
						)}

						{!isArrayEmpty(activeMovie.best_moments) && (
							<div>
								<h4 className="font-bold italic mt-2">Best moments</h4>
								<div className="flex flex-wrap">
									{activeMovie.best_moments?.map((shot, index) => (
										<button
											key={index}
											type="button"
											onClick={() => {
												localOpenFullscreen(
													`reviews/${activeMovie.folder}/${shot}`,
												);
											}}
										>
											<FilmStrip classes="border-2 m-0.5">
												<img
													src={`public/img/reviews/${activeMovie.folder}/${shot}`}
													alt=""
													className="w-37 h-21 cursor-pointer"
												/>
											</FilmStrip>
										</button>
									))}
								</div>
							</div>
						)}
					</div>
				) : (
					<div className="text-sm italic h-full flex-1 flex justify-center items-center  w-150">
						<p className="text-center">
							Click on any movie on the left to read the review! <br />
							Beware of spoilers...
						</p>
					</div>
				)}
			</div>
		</DraggableWindow>
	);
}
