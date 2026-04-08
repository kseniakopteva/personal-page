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
		<>
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
			<h2 className="text-[1.65rem] leading-7">{formatDate(time, "HH:mm:ss")}</h2>
		</>
	);
}
