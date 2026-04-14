export default function FilmStrip({ classes, children }) {
	return (
		<div className={`${classes}`}>
			<div className="border-y-3 border-slate-700">
				<div className="border-y-5 border-slate-700 border-dashed">
					<div className="border-y-3 border-slate-700 ">{children}</div>
				</div>
			</div>
		</div>
	);
}
