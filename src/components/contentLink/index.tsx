import React from "react";
import styles from "./content.module.css";
import { contentImages } from "./contentImages";

const baseUrl = process.env.BASE_URL || "";

type ContentLink = {
	title?: string;
	link: string;
	iconType?: string;
	imageLink?: string;
	description?: string;
	bottomText?: string;
};

function ContentLinks({
	link,
	title,
	iconType,
	imageLink,
	description,
	bottomText,
}: ContentLink) {
	let Svg;
	if (iconType) {
		Svg = contentImages[iconType];
	}
	const target = link?.startsWith("http") ? "_blank" : "";
	return (
		<>
			<a
				href={`${link?.startsWith("http") ? "" : baseUrl}${link}`}
				className={styles.cardContainer}
				target={target}
			>
				{Svg && <Svg />}
				{imageLink && (
					<img src={imageLink} alt="logo" className={styles.imageLink} />
				)}
				<div className={styles.textContainer}>
					<p className={styles.text}>{title}</p>
					{description && (
						<div className={styles.descriptionContainer}>{description}</div>
					)}
				</div>
			</a>
			{bottomText && (
				<p className="mt-3 text-[#8899A8] w-full text-center">{bottomText}</p>
			)}
		</>
	);
}

export default ContentLinks;
