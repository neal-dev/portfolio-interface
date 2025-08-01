"use client";

import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useLocalStorage } from "@uidotdev/usehooks";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";

interface LinkItem {
	icon: JSX.Element;
	label: string;
	link: string;
}

const navItems: LinkItem[] = [
	{
		icon: <HomeRoundedIcon fontSize="medium" />,
		label: "Home",
		link: "#home",
	},
	{
		icon: <FolderSpecialRoundedIcon fontSize="medium" />,
		label: "About",
		link: "#about",
	},
	{
		icon: <AutoAwesomeRoundedIcon fontSize="medium" />,
		label: "Experience",
		link: "#experience",
	},
	{
		icon: <AutoAwesomeRoundedIcon fontSize="medium" />,
		label: "Skills",
		link: "#skills",
	},
	{
		icon: <CallRoundedIcon fontSize="medium" />,
		label: "Projects",
		link: "#projects",
	},
];

const AppBar = () => {
	const [activeSection, setActiveSection] = useState("Home");
	const [defaultDark] = useState(false);
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const isDarkMode = window.matchMedia(
				"(prefers-color-scheme: light)"
			).matches;
			setTheme(isDarkMode ? "dark" : "light");
		}
	}, []);

	// Intersection Observer for tracking active section
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -80% 0px", // Adjust these values to control when a section is considered "active"
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					// Map section IDs to nav labels
					const sectionMap: { [key: string]: string } = {
						home: "Home",
						about: "About", // Since home section has id="home"
						profile: "About",
						experience: "Experience",
						skills: "Skills",
						projects: "Projects",
					};

					const navLabel = sectionMap[sectionId] || "Home";
					setActiveSection(navLabel);
				}
			});
		}, observerOptions);

		// Observe all sections
		const sections = document.querySelectorAll("section[id]");
		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	const switchTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const handleScroll = (id: string, label: string) => {
		const section = document.querySelector(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setActiveSection(label);
		}
	};

	return (
		<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
			<div className="bg-card/80 backdrop-blur-sm rounded-lg px-6 py-1 border border-border shadow-sm">
				<div className="flex items-center space-x-4">
					<div className="flex space-x-1 max-w-full overflow-x-auto">
						{navItems.map((item) => (
							<button
								key={item.label}
								onClick={() => handleScroll(item.link, item.label)}
								className={`px-3 py-2 rounded-md transition-all duration-200 text-sm whitespace-nowrap ${
									activeSection === item.label
										? "bg-primary text-color-text-contrast"
										: "text-color-text-primary"
								}`}>
								{item.label}
							</button>
						))}
					</div>

					<div className="flex-shrink-0 border-l border-border pl-4">
						<button
							className="p-2 rounded-md text-color-text-primary"
							title="Toggle theme">
							{theme == "light" ? (
								<LightModeIcon
									fontSize="small"
									onClick={switchTheme}
									className="hover:cursor-pointer"
								/>
							) : (
								<NightsStayIcon
									fontSize="small"
									onClick={switchTheme}
									className="hover:cursor-pointer"
								/>
							)}
							<span className="sr-only">Toggle theme</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AppBar;
