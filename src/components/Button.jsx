import { useContext } from "react";
import { ThemeContext } from "../contexts";

export default function Button({ onClick, children }) {
	const { themePrimaryButtonStyles } = useContext(ThemeContext);

	return (
		<button
			className={`${themePrimaryButtonStyles} cursor-pointer`}
			onClick={onClick}
		>
			<div className={`px-2 py-1`}>{children}</div>
		</button>
	);
}
