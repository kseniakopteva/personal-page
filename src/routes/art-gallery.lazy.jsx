import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import FullscreenImage from "../components/FullscreenImage";
import { artPieces as ap } from "../data";

export const Route = createLazyFileRoute("/art-gallery")({
	component: ArtGalleryRoute,
});

function ArtGalleryRoute() {
	const [fullscreenImage, setFullscreenImage] = useState("");

	const artPieces = ap;

	return (
		<main
			style={{
				position: "relative",
				// height: "2077px",
				backgroundImage: "url('/img/patterns/red.webp')",
				backgroundRepeat: "repeat",
				backgroundSize: "150px",
			}}
		>
			<div class="pb-10 px-10">
				<div className="bg-slate-800 text-white mb-20 rounded-b-none border-b-20 border-x-20 border-transparent p-2.5 [border-image:url(/img/borders/floral.png)_30_30_round] overflow-auto flex items-center">
					<a className="w-40 text-slate-400 text-sm" href="/">
						← <span className="underline">Return</span>
					</a>
					<div className="flex-1">
						<h1 className="text-2xl font-serif text-center">
							Welcome to the Art Gallery.
						</h1>
						<h2 className="text-sm font-serif text-center text-slate-400">
							Here are my favorite paintings. Click to enlarge.
						</h2>
					</div>
					<p className="w-40 h-20 flex justify-center items-center">
						<img className="opacity-70" src="/img/not_allowed.png" alt="" />
					</p>
				</div>
				<div class="gap-18 columns-2 md:columns-3 lg:columns-4">
					{artPieces.map((painting) => (
						<div
							key={painting.id}
							className="flex flex-col break-inside-avoid items-center gap-3 mb-10"
						>
							<button
								className="cursor-pointer"
								type="button"
								onClick={() =>
									setFullscreenImage(`../img/art/${painting.image}`)
								}
							>
								<div className="border-18 [border-image:url(/img/borders/frame1.png)_18_round] drop-shadow-[0px_0px_5px_#000]">
									<img src={`/img/art/${painting.image}`} alt="" />
								</div>
							</button>
							<div className="bg-stone-400 border-l-2 border-t-2 border-stone-200 [box-shadow:inset_-2px_-2px_0px_rgba(0,0,0,0.25)] text-amber-950 font-serif rounded-xs p-3 mb-5 text-xs max-w-65 drop-shadow-[0px_0px_2px_#000]">
								{painting.author} <br />
								<span className="font-bold text-sm">{painting.title}</span>,{" "}
								{painting.year} <br />
								<br />
								{painting.medium} <br />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="border-t-15 border-t-[#1F0B01] bg-[url('/img/patterns/parquet.jpg')] bg-size-[auto_250px] h-28.5 outline-2 outline-amber-950">
				<div className="h-full w-full bg-amber-950/50 mix-blend-multiply border-t border-t-black"></div>
			</div>
			<FullscreenImage
				fullscreenImage={fullscreenImage}
				setFullscreenImage={setFullscreenImage}
				padding={5}
				classes={
					"border-18 [border-image:url(/img/borders/frame1.png)_18_round]"
				}
			/>
		</main>
	);
}

// .frame1 {
//     border: 18px solid;
//     border-image: url(borders/frame1.png) 18 round;
//     margin: 5px;
//     }
// .frame2 {
//     border: 50px solid;
//     border-image: url(borders/frame2.png) 50;
//     margin: 5px;
//     }
// .frame4 {
//     border: 30px solid;
//     border-image: url(borders/frame4.png) 30 round;
//     padding: 5px;
//     margin: 5px;
//     }
