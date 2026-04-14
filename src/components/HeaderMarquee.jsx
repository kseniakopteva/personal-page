import { memo } from "react";
import DraggableWindow from "../layouts/DraggableWindow";

export default memo(function HeaderMarquee() {
	return (
		<DraggableWindow
			initialPos={{ x: 340, y: 20 }}
			noMargin={true}
			classes="italic text-lg"
		>
			<div className="w-250 h-30 bg-repeat bg-[url('/img/patterns/pcb.gif')] bg-size-[250px] relative animate-marquee border border-white flex justify-center items-center">
				<p className="text-8xl filter-[drop-shadow(5px_5px_0_#000)]  text-white font-serif font-bold">
					WELCOME!
				</p>
			</div>
		</DraggableWindow>
	);
});
