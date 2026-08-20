import clsx from "clsx";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function FullscreenImage({
	fullscreenImage,
	setFullscreenImage,
	padding = null,
	classes,
}) {
	const dimWrapperRef = useRef(null);

	// function openFullscreen(path) {
	// 	setFullscreenImage(path);
	// }

	function closeFullScreen() {
		setFullscreenImage("");
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				dimWrapperRef.current &&
				!dimWrapperRef.current.contains(event.target)
			) {
				closeFullScreen();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dimWrapperRef]);

	useEffect(() => {
		if (fullscreenImage) {
			document.body.style.overflowY = "hidden";
		}
		return () => {
			document.body.style.overflowY = "scroll";
		};
	}, [fullscreenImage]);

	return (
		fullscreenImage && (
			<div
				className={clsx(
					`w-screen h-screen flex justify-center fixed top-0 left-0 items-center bg-[rgba(0,0,0,0.5)]`,
					padding ? `p-${padding}` : "p-25",
				)}
				style={{ zIndex: 99998 }}
			>
				<img
					ref={dimWrapperRef}
					src={`public/img/${fullscreenImage}`}
					alt=""
					className={clsx(classes, "max-h-full")}
				/>
				<button
					type="button"
					onClick={() => closeFullScreen()}
					className="absolute top-3 right-6 bg-white p-5 border cursor-pointer"
				>
					Close
				</button>
			</div>
		)
	);
}
