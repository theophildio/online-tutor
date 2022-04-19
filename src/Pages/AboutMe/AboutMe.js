import React from "react";
import "./AboutMe.css";
import Theo from "../../images/theo-tutor.png";

const AboutMe = () => {
	return (
		<div className="about">
			<h2>About Me</h2>
			<hr />
			<div className="about-me">
				<div className="image">
					<img src={Theo} alt="Theophil Dio" />
				</div>
				<div className="details">
					<h3>
						Hi, I'm <span>Theophil Dio</span>
					</h3>
					<p>
						I work as a Web Developer and Mentor of Web Courses. I am proficient
						in HTML5, CSS3, JavaScript, and React. I've also worked on projects
						that used HTML5, CSS3, Javascript, React, and WordPress. I am an
						expert in CSS frameworks like Bootstrap and Tailwind. Rest API,
						Node.js (Express), MongoDB, and Firebase Authentication are some of
						my basic skills. I am knowledgeable about code versioning systems
						such as Git. I've worked with live servers like Git, Netlify, and
						Firebase hosting for the client-side, and Heroku for the
						server-side. I will always be open to new challenges, have a
						learning attitude, and be able to balance my work and personal
						lives. In my opinion, great design is the outcome of teamwork
						between designers, developers, and stakeholders, who pool their
						knowledge and efforts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
