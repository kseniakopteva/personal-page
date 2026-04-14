export default function Button({ colorClass, onClick, children }) {
	return (
		<button className={`xp-button cursor-pointer`} onClick={onClick}>
			<div
				className={`bg-${colorClass}d px-2 py-1 mix-blend-multiplyk
        `}
			>
				{children}
			</div>
		</button>
	);
}
