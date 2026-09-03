import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { oldOneTalk as oot } from "../data";

export const Route = createLazyFileRoute("/old-one")({
	component: DungeonOldOneRoute,
});

function DungeonOldOneRoute() {
	const [currentNodeID, setCurrentNodeID] = useState(1);
	const oldOneTalk = oot;

	const currentNode = oldOneTalk.find((node) => node.id === currentNodeID);

	return (
		<main
			style={{
				position: "relative",
				backgroundColor: "black",
			}}
		>
			<div className="flex flex-col w-full justify-center items-center h-screen">
				<img className="w-300" src="/img/old_one.png" alt="" />

				{currentNode.text ? (
					<p className="text-white text-2xl font-serif italic font-bold filter-[drop-shadow(0_0_3px_#FFF)] mb-3">
						{currentNode.text}
					</p>
				) : (
					<p className="text-white text-xl italic mb-3">
						But you heard no answer... (this is a work in progress...)
					</p>
				)}

				<div className="flex flex-col gap-2 my-5">
					{currentNode.options.map((option) => (
						<button
							key={`${currentNode.id}.${option.id}`}
							type="button"
							className="text-xs text-slate-500 cursor-pointer hover:text-white focus:text-white px-3 py-1 border border-slate-500 hover:border-white focus:border-white rounded-lg bg-black drop-shadow drop-shadow-slate-500 focus:drop-shadow-white hover:drop-shadow-white hover:-translate-y-1 focus:-translate-y-1 active:translate-y-1"
							onClick={() => setCurrentNodeID(option.linkTo)}
						>
							{option.text}
						</button>
					))}
				</div>
				<a href="/dungeon" className="text-slate-600 underline text-sm mt-5">
					I can't, I need to go back...(return to the Dungeon)
				</a>
				<button
					type="button"
					className="text-slate-600 underline text-sm mt-2 cursor-pointer"
					onClick={() => setCurrentNodeID(1)}
				>
					The Old One gives you a second chance at this Talk...(start again)
				</button>
			</div>
		</main>
	);
}
