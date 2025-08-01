"use client";

import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Profile from "@/app/components/Profile";
import Projects from "@/app/components/Projects";
import Skill from "@/app/components/Skill";
import React from "react";

const HomePage = () => {
	return (
		<div className="flex flex-col gap-y-5">
			<section id="home">
				<About />
			</section>
			<section id="about">
				<Profile />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="skill">
				<Skill />
			</section>
			<section id="project">
				<Projects />
			</section>
		</div>
	);
};

export default HomePage;
