import { useState } from "react";
import DraggableWindow from "../layouts/DraggableWindow";
import FilmStrip from "../layouts/FilmStrip";

export default function MovieReviews({
	isMoviesVisible,
	setIsMoviesVisible,
	movieWindowRef,
	fullscreenImage,
	setFullscreenImage,
}) {
	const [activeMovie, setActiveMovie] = useState("");

	const movieReviews = [
		{
			id: 0,
			name: "Pretty Woman",
			folder: "pretty-woman",
			poster: "pretty_woman_movie.jpg",
			year: 1990,
			actors: ["Julia Roberts", "Richard Gere"],
			body: "The sweetest movie I have seen recently. It is a fairytale that elicits warm, cozy feelings as well as the feeling of justice being served and the feeling of being loved. The way Richard Gere's character Edward looks at Julia Roberts's character Vivian is full of undeniable adoration and love, even when he doesn't yet realize it himself.",
			rating: 5,
			favorite_shots: ["7119487.webp", "7119618.webp", "7121377.webp"],
			best_character: "",
			best_moments: ["7120105.webp", "7120711.webp", "7121794.webp"],
			first_seen: "27/02/26",
			last_seen: "18/03/26",
		},
	];

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
			<div className="md:w-90 lg:w-100 2xl:w-200 flex gap-5 h-[400px]">
				<div className="m-1 min-h-0 flex flex-col">
					<h2 className="text-xl font-bold">My Movie Reviews</h2>
					<ul className="overflow-y-scroll min-h-0 h-full">
						{movieReviews.map((review) => (
							<li
								key={review.id}
								className={`mt-2 flex gap-3 cursor-pointer items-center  px-2 py-1 transition-all min-h-0 ${review.id === activeMovie.id ? "bg-slate-200" : "hover:bg-slate-100"}`}
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
								<div className=" min-h-0">
									<h3 className="text-lg font-bold">{review.name}</h3>
									<p className="text-xs">{review.body.substr(0, 33)}</p>
									<p className="text-xs">
										{review.body.substr(33, 36)}...
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				{activeMovie ? (
					<div className="flex-1 overflow-y-scroll">
						<div className="flex justify-between items-start">
							<div className="flex-1">
								<h3 className="text-lg font-bold">{activeMovie.name}</h3>
								<p>
									Year:{" "}
									<span className="font-bold">{activeMovie.year}</span>
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
									</span>
								</p>
							</div>
							<img
								onClick={() =>
									setFullscreenImage(
										`reviews/${activeMovie.folder}/${activeMovie.poster}`,
									)
								}
								src={`public/img/reviews/${activeMovie.folder}/${activeMovie.poster}`}
								alt=""
								className="border mr-3 border-gray-700 box-content [box-shadow:3px_3px_3px_0_#000000] h-40 cursor-pointer"
							/>
						</div>

						<p className="text-sm my-5">{activeMovie.body}</p>
						<h4 className="font-bold italic mt-2">Best shots</h4>
						<div className="flex flex-wrap">
							{activeMovie.favorite_shots?.map((shot, index) => (
								<FilmStrip classes="border-2 m-0.5">
									<img
										src={`public/img/reviews/${activeMovie.folder}/${shot}`}
										alt=""
										className="w-37 h-21 cursor-pointer"
										key={index}
										onClick={() =>
											setFullscreenImage(
												`reviews/${activeMovie.folder}/${shot}`,
											)
										}
									/>
								</FilmStrip>
							))}
						</div>
						<h4 className="font-bold italic mt-2">Best moments</h4>
						<div className="flex flex-wrap">
							{activeMovie.best_moments?.map((shot, index) => (
								<FilmStrip classes="border-2 m-0.5">
									<img
										src={`public/img/reviews/${activeMovie.folder}/${shot}`}
										alt=""
										className="w-37 h-21 cursor-pointer"
										key={index}
										onClick={() =>
											setFullscreenImage(
												`reviews/${activeMovie.folder}/${shot}`,
											)
										}
									/>
								</FilmStrip>
							))}
						</div>
					</div>
				) : (
					<div className="text-sm italic w-full h-full flex-1 flex justify-center items-center">
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
