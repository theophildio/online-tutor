import React from "react";
import Feature from "./Feature/Feature";
import "./Features.css";
import iconFace from "../../../images/icons/facetoface.png";

const Features = () => {
	const features = [
		{
			id: "1",
			icon: `${iconFace}`,
			title: "Face to face learning",
			details:
				"I can tutor your child and ensure they remain proficient in their core subjects, and enjoy learning along the way.",
		},
		{
			id: "2",
			icon: `${iconFace}`,
			title: "Share And Collaborate",
			details:
				"I can tutor your child and ensure they remain proficient in their core subjects, and enjoy learning along the way.",
		},
		{
			id: "3",
			icon: `${iconFace}`,
			title: "Rewatch Lessons",
			details:
				"I can tutor your child and ensure they remain proficient in their core subjects, and enjoy learning along the way.",
		},
	];

	return (
		<section className="features-container">
			<div className="features">
				{features.map((feature) => (
					<Feature key={feature.id} feature={feature}></Feature>
				))}
			</div>
		</section>
	);
};

export default Features;
