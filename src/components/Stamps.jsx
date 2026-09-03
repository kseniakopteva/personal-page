import { useRef } from "react";
import GifImage from "./GifImage";
import { useEffect } from "react";
import { stamps as s } from "../data";
import { useHorizontalScroll } from "../util";

export default function Stamps() {
	const stamps = s;

	// const containerRef = useRef(null);
	const scrollRef = useHorizontalScroll();

	// TODO: fix stamp box width (make it 100% not set length)

	return (
		<div className="bg-white">
			<p className="text-xs text-slate-600">(Scroll with your mouse wheel!)</p>
			<div
				ref={scrollRef}
				className="flex gap-1 max-w-[1000px] overflow-x-scroll whitespace-nowrap"
			>
				{stamps.map((stamp) =>
					stamp.url ? (
						<a href={stamp.url} key={stamp.img}>
							<GifImage
								srcSlugPath={`/img/stamps`}
								orig={stamp.orig}
								imgName={stamp.img}
								classes={`h-[55px] w-[99px] my-2 drop-shadow-[0_0_2px_rgba(0,0,0,0.75)]`}
							/>
						</a>
					) : (
						<GifImage
							key={stamp.img}
							srcSlugPath={`/img/stamps`}
							orig={stamp.orig}
							imgName={stamp.img}
							classes={`h-[55px] min-w-[99px] my-2 drop-shadow-[0_0_2px_rgba(0,0,0,0.75)]`}
						/>
					),
				)}
				<div className="min-w-170 flex items-center p-3 text-xs italic">
					This is all... for now...
				</div>
			</div>
		</div>
	);
}
