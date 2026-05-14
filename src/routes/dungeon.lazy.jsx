import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dungeon")({
	component: DungeonRoute,
});

function DungeonRoute() {
	return (
		<main
			style={{
				position: "relative",
				height: "2077px",
				backgroundImage: "url('/img/patterns/cobblestone_1.gif')",
				backgroundRepeat: "repeat",
			}}
		>
			<div className="flex flex-col w-full justify-center items-center h-screen">
				<h1 className="text-white text-4xl font-serif italic font-bold filter-[drop-shadow(0_0_3px_#FFF)]">
					This dungeon is under construction...
				</h1>
				<img src="/img/candelebra.gif" alt="" className="w-50" />
				<a
					href="/"
					className="text-white underline filter-[drop-shadow(0_0_3px_#FFF)] mt-5"
				>
					Return
				</a>
			</div>
		</main>
	);
}
