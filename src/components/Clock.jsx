import { formatDate } from "date-fns";
import { useEffect, useState } from "react";

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, []);

	const season =
		formatDate(time, "M") === 12 || formatDate(time, "M") <= 2
			? "Winter"
			: formatDate(time, "M") >= 3 && formatDate(time, "M") <= 5
				? "Spring"
				: formatDate(time, "M") >= 6 && formatDate(time, "M") <= 8
					? "Summer"
					: "Fall";

	return (
		<div className="flex flex-row">
			<div>
				<h2 className="text-xs">
					Today is{" "}
					<span className="bg-teal-100">{formatDate(time, "EEEE")}</span>{" "}
				</h2>
				<h2 className="text-xs">
					{formatDate(time, "do")} of {formatDate(time, "MMMM")},{" "}
					<span className="bg-amber-100">{season}</span>
				</h2>
				<h2 className="text-xs">
					{formatDate(time, "wo")} week of {formatDate(time, "yyyy")}
				</h2>
				<h2 className="text-[1.65rem] leading-7">
					{formatDate(time, "HH:mm:ss")}
				</h2>
			</div>
			<div className="flex flex-1 justify-end items-center">
				<AnalogClock time={time} size={48} />
			</div>
		</div>
	);
}

function AnalogClock({ time, size = 52 }) {
	const radius = size / 2;

	const arr = [
		{
			length: radius - 11,
			width: 3,
			offset: 2,
			styles: "bg-black",
			time: ((time.getHours() % 12) * 60 + time.getMinutes()) * 0.5,
		},
		{
			length: radius - 6,
			width: 2,
			offset: 2,
			styles: "bg-black",
			time: (time.getMinutes() * 60 + time.getSeconds()) * 0.1,
		},
		{
			length: radius - 1,
			width: 2,
			offset: 5,
			styles: "bg-red-500",
			time: time.getSeconds() * 6,
		},
	];

	return (
		<div
			className={`rounded-full bg-slate-300  flex justify-center items-center border border-slate-600`}
			style={{ height: size + 8, width: size + 8 }}
		>
			<div
				className={`rounded-full bg-white border box-content border-slate-500  relative`}
				style={{ height: size, width: size }}
			>
				{arr.map((elem) => (
					<div
						className={`${elem.styles} absolute`}
						style={{
							height: elem.length,
							width: elem.width,
							left: `calc(50% - ${elem.width / 2}px)`,
							top: radius - (elem.length - elem.offset),
							transformOrigin: `center calc(100% - ${elem.offset}px)`,
							transform: `rotateZ(${elem.time}deg)`,
						}}
					></div>
				))}
				<div
					className="h-0.5 w-0.5 bg-red-500 absolute border border-red-500 box-content"
					style={{
						top: radius - 2,
						left: radius - 2,
					}}
				></div>
			</div>
		</div>
	);
}
