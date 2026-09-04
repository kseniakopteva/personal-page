export default function GifImage({
	srcSlugPath,
	imgName,
	alt,
	orig = "gif",
	copy = "jpg",
	classes,
	pictureClasses,
	...props
}) {
	const isReducedNecessary = orig === "gif";

	return (
		<picture className={pictureClasses}>
			{isReducedNecessary ? (
				<source
					srcSet={`${srcSlugPath}/reduced/${imgName}.${copy}`}
					media="(prefers-reduced-motion: reduce)"
					className={classes}
					{...props}
				></source>
			) : (
				""
			)}
			<img
				src={`${srcSlugPath}/${imgName}.${orig}`}
				alt={alt}
				className={classes}
				{...props}
			/>
		</picture>
	);
}
