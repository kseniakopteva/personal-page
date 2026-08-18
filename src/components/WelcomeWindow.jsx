import { useState } from "react";
import DraggableWindow from "../layouts/DraggableWindow";

export default function WelcomeWindow() {
	const [isWelcomeVisible, setIsWelcomeVisible] = useState(() => {
		const stored = window.localStorage.getItem("welcome-window-visible");
		return stored ? JSON.parse(stored) : true;
	});

	const welcomeText = [
		"Hello there, fellow digital traveler.",
		"I am pleased to see you here in my little corner of this vast Virtual Web.",
		"I am glad you found me, and didn't get lost along the way.",
		"",
		"Relax and enjoy this cup of tea (or coffee.)",
		"(Use the buttons in the top right of every window to collapse or close it.)",
		"(To restore all: reload the page)",
	];

	return (
		<DraggableWindow
			isVisible={isWelcomeVisible}
			setIsVisible={setIsWelcomeVisible}
			title={"Command Prompt - Welcome :3"}
			noMargin={true}
			initialPos={{
				x: window.innerWidth / 2 - 250,
				y: window.innerHeight / 2 - 290,
			}}
			shadow={"large"}
		>
			<pre className="w-125 h-100s whitespace-pre-wrap text-sm">
				<p className="leading-4 mb-2">
					Microsoft❮R❯ Windows DOS
					<br />
					❮C❯ Copyright Microsoft Corp 1990-2001.
				</p>
				{welcomeText.map((paragraph, index) =>
					paragraph !== "" ? (
						<div className="flex" key={index}>
							<p>C:\WINDOWS\SYSTEM32{">"}</p>

							<p className="ml-2 text-white filter-[drop-shadow(0_0_4px_#FFF)]">
								{paragraph}
							</p>
						</div>
					) : (
						<p
							className="text-[0.3rem] flex justify-center text-[#00FF00]"
							key={index}
						>
							<br />
							<br />
							<br />
							{"      "}██{"    "}██{"    "}██{"      "} <br />
							{"    "}██{"      "}██{"  "}██{"        "} <br />
							{"    "}██{"    "}██{"    "}██{"        "} <br />
							{"      "}██{"  "}██{"      "}██{"      "} <br />
							{"      "}██{"    "}██{"    "}██{"      "} <br />
							{"                              "}
							<br />
							{"  "}████████████████████{"    "} <br />
							{"  "}██{"                "}██████{""} <br />
							{"  "}██{"                "}██{"  "}██{""} <br />
							{"  "}██{"                "}██{"  "}██{""} <br />
							{"  "}██{"                "}██████{""} <br />
							{"    "}██{"            "}██{"      "} <br />
							{""}████████████████████████{"  "} <br />
							{""}██{"                    "}██{"  "} <br />
							{"  "}████████████████████{"    "} <br />
							<br />
							<br />
							<br />
						</p>
					),
				)}
				<div className="flex justify-between mt-5">
					<button
						onClick={() => {
							setIsWelcomeVisible(false);
							window.localStorage.setItem(
								"welcome-window-visible",
								"false",
							);
						}}
						className="border-2 border-slate-400 text-slate-400 px-4 py-2 filter-[drop-shadow(0_0_4px_#FFF)] cursor-pointer hover:-translate-y-1 active:translate-y-1"
					>
						DON'T SHOW THIS AGAIN
					</button>
					<button
						onClick={() => {
							setIsWelcomeVisible(false);
						}}
						className="border-2 border-white px-4 py-2 filter-[drop-shadow(0_0_4px_#FFF)] cursor-pointer hover:-translate-y-1 active:translate-y-1"
					>
						OK
					</button>
				</div>
			</pre>
		</DraggableWindow>
	);
}
