export default function GifImage({
	srcSlugPath,
	alt,
	orig = "gif",
	copy = "jpg",
	classes,
	...props
}) {
	return (
		<picture>
			<source
				srcset={`${srcSlugPath}.${copy}`}
				media="(prefers-reduced-motion: reduce)"
			></source>
			<img
				src={`${srcSlugPath}.${orig}`}
				alt={alt}
				className={classes}
				{...props}
			/>
		</picture>
	);
}
