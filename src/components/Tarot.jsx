import { useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import { getRandomInt } from "../util";
import { tarotCards } from "../data";
import { useRef } from "react";

export default function Tarot() {
	// TODO: make reduced motion version

	const [status, setStatus] = useState("initial");
	const [card, setCard] = useState(null);
	const [areReversed, setAreReversed] = useState(false);
	const [isCurrentReversed, setIsCurrentReversed] = useState(false);

	const timeoutRef = useRef(null);

	function drawCard() {
		clearTimeout(timeoutRef.current);

		setStatus("draw");

		const randomID = getRandomInt(0, 77);

		const randomCard = tarotCards.find((card) => {
			return card.id === randomID;
		});
		setCard(randomCard);

		if (areReversed) {
			if (getRandomInt(0, 1)) {
				setIsCurrentReversed(true);
			} else {
				setIsCurrentReversed(false);
			}
		}
		// setCard(tarotCards.find((card) => card.id === 0));
		timeoutRef.current = setTimeout(() => {
			setStatus("result");
		}, 3000);
	}

	const [rotation, setRotation] = useState(0);

	function tumble() {
		setRotation((r) => r + 360);
	}

	return (
		<div
			className={clsx(
				"text-white text-sm h-75 flex bg-[url('../../../public/img/patterns/stars.gif')] motion-reduce:bg-[url('../../../public/img/patterns/stars.jpg')]",
				status === "initial" ? "" : "",
			)}
		>
			{status === "initial" && (
				<div className="h-full flex-1 flex flex-col justify-center items-center">
					<img className="h-35 mb-2" src="/public/img/tarot/decor.png" alt="" />
					<Button onClick={drawCard}>Get a Tarot card reading</Button>
					<div className="flex gap-2">
						<div className="mt-2 flex gap-2">
							<input
								type="checkbox"
								name="isReverse"
								id="isReverse"
								checked={areReversed}
								onChange={(e) => setAreReversed(e.target.checked)}
							/>
							<label htmlFor="isReverse">add reversed cards too</label>
						</div>
					</div>

					<p className="m-2 text-xs/tight italic text-center text-slate-400">
						(No meaning will be shown. It is yours to understand the guidance of
						the stars.)
					</p>
					<p className="m-2 text-xs/tight italic text-center text-slate-400">
						(Don't move anything. The result will disappear.)
					</p>
				</div>
			)}

			{status === "draw" && (
				<div className="flex justify-center items-center w-full flex-col">
					<div>
						<div className="perspective-[1000px]">
							<div className="transform-3d tarot-tumble">
								<img
									className="h-45 mb-2 mt-5 border-2 border-white rounded-lg"
									src={`/img/tarot/cover.webp`}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="h-2 w-25 rounded-[100%] blur opacity-40 bg-black"></div>
				</div>
			)}

			{status === "result" && card && (
				<div className="flex flex-col justify-center items-center w-full text-center">
					<h3 className="text-lg font-bold font-serif text-white">
						{isCurrentReversed ? "Reversed " : ""}
						{card.name}
					</h3>
					<div className="perspective-[1000px]">
						<button
							type="button"
							className="transform-3d transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
							style={{
								transform: `rotateY(${rotation}deg)`,
							}}
							onClick={tumble}
						>
							<div className="perspective-[1000px]">
								<img
									className={clsx(
										"h-45 my-2 transform-3d tarot-rocking cursor-pointer border-2 border-white rounded-lg",
										isCurrentReversed ? "rotate-180" : "",
									)}
									src={`/img/tarot/${card.id}.webp`}
									alt=""
								/>
							</div>
						</button>
						{/* <div className="h-2 w-25 rounded-[100%] blur opacity-40 bg-black"></div> */}
					</div>
					{/* <p>Divinatory meaning:</p> */}
					{/* <p className="text-xs">{card.meaning}</p> */}
					{/* <Button onClick={drawCard} className="text-xs">
						Reroll
					</Button> */}
				</div>
			)}
		</div>
	);
}
