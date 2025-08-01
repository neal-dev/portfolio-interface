import Image from "next/image";
import React from "react";
import Contact from "./Contact";
import { Phone } from "@mui/icons-material";

const About = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center">
			<div className="container mx-auto px-6 text-center max-w-4xl">
				<div className="mb-8">
					<img
						src={"/images/profile-2.png"}
						alt="Thanapat Pongpipat"
						className="w-32 h-32 mx-auto rounded-full border border-border"
					/>
				</div>

				<div className="space-y-6">
					<div>
						<p className="text-muted-foreground mb-2">Hi, I'm</p>
						<h1 className="text-4xl md:text-6xl font-medium text-color-text-primary mb-4">
							Thanapat Pongpipat
						</h1>
						<p className="text-muted-foreground">Software Developer</p>
					</div>

					<p className="text-color-text-primary max-w-2xl mx-auto leading-relaxed">
						Passionate about the intersection of design and technology. I
						specialize in building beautiful, intuitive, and
						lightning-fast web applications with a modern stack:
						JavaScript, TypeScript, React.js, and Next.js.
					</p>

					<div className="flex justify-center space-x-4 pt-4">
						<a
							target="_blank"
							href="https://github.com/neal-dev"
							className="px-6 py-2 bg-primary text-color-text-contrast rounded-md hover:bg-primary/90 transition-colors">
							GitHub
						</a>
						<a
							target="_blank"
							href="mailto:thanapatpongpipat.w@gmail.com"
							className="px-6 py-2 border border-border text-color-text-primary rounded-md hover:bg-accent transition-colors">
							Email
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/thanapat-pongpipat-344412267/"
							className="px-6 py-2 border border-border text-color-text-primary rounded-md hover:bg-accent transition-colors">
							LinkedIn
						</a>
					</div>
				</div>
				<div className="flex max-w-[200px] mx-auto items-center space-x-4 p-4 bg-card border border-border rounded-lg mt-6">
					<div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
						<Phone fontSize="small" />
					</div>
					<div className="flex flex-col text-left">
						<h4 className="font-medium text-color-text-primary">Phone</h4>
						<p className="text-muted-foreground">096-3711479</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
