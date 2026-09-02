import { useEffect } from "react";
import { useRef } from "react";

export function isArrayEmpty(array) {
	if (!Array.isArray(array) || !array.length) return true;
	else return false;
}

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Source - https://stackoverflow.com/a/63203862
// Posted by TarVK, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-02, License - CC BY-SA 4.0
export function useHorizontalScroll() {
	const elRef = useRef();

	useEffect(() => {
		const el = elRef.current;
		if (!el) return;

		const onWheel = (e) => {
			if (e.deltaY === 0) return;
			e.preventDefault();
			el.scrollTo({
				left: el.scrollLeft + e.deltaY,
				// behavior: "smooth",
			});
		};
		el.addEventListener("wheel", onWheel);
		return () => el.removeEventListener("wheel", onWheel);
	}, []);
	return elRef;
}
