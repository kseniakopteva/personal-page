import GifImage from "./GifImage";

export default function CoolWebsiteLinks() {
	const width = 88 * 1.17;
	const height = 31;

	const allButtons = [
		{
			url: "https://miserabledolly.neocities.org/",
			imageSlug: "miserabledolly",
		},
		{
			url: "https://keysklubhouse.com/",
			imageSlug: "keysclubhouse",
		},
		{
			url: "https://dollarchive.neocities.org/",
			imageSlug: "dollarchive",
		},
		{
			url: "https://frutigeraeroarchive.org/",
			imageSlug: "frutigeraeroarchive_button_alt",
			orig: "png",
			copy: "png",
		},
		{
			url: "https://dokode.moe/",
			imageSlug: "dokodemobutton3",
		},
		{
			url: "https://daniele63.com/",
			imageSlug: "danieles_button",
			orig: "png",
			copy: "png",
		},
		{
			url: "https://controlcoreangel.neocities.org/",
			imageSlug: "cca_neocities_button",
		},
		{
			url: "https://arutemu64.neocities.org/",
			imageSlug: "arutemu64",
		},
		{
			url: "https://vaerael.neocities.org/",
			imageSlug: "vaerael",
			orig: "png",
			copy: "png",
		},
		{
			url: "https://unicodeangel.neocities.org/",
			imageSlug: "UnicodeAngelButton3",
		},
		{
			url: "https://olliveen.neocities.org/",
			imageSlug: "olliveen",
		},
	];

	return (
		<div className=" flex gap-1 flex-wrap border p-6 [border-image-source:url(../../../img/fleabag.png)] [border-image-slice:77] [border-image-width:20]">
			{allButtons.map((btn) => (
				<a href={btn.url} target="_blank" key={btn.imageSlug}>
					<GifImage
						srcSlugPath={`img/buttons/${btn.imageSlug}`}
						orig={btn.orig ? btn.orig : undefined}
						copy={btn.copy ? btn.copy : undefined}
						width={width}
						height={height}
					/>
				</a>
			))}
		</div>
	);
}
