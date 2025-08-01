"use client";

import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
			setIsMobileMenuOpen(false); // Close mobile menu after navigation
		}
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4">
			<div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border shadow-sm">
				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center justify-between px-6 py-2">
					<div className="flex space-x-1 border-r border-border pr-4">
						{navItems.map((item) => (
							<button
								key={item.label}
								onClick={() => handleScroll(item.link, item.label)}
								className={`px-3 py-2 rounded-md transition-all duration-200 text-sm whitespace-nowrap ${
									activeSection === item.label
										? "bg-primary text-color-text-contrast"
										: "text-color-text-primary hover:bg-accent"
								}`}>
								{item.label}
							</button>
						))}
					</div>

					<div className="flex-shrink-0 pl-4">
						<button
							onClick={switchTheme}
							className="p-2 rounded-md text-color-text-primary hover:bg-accent transition-colors"
							title="Toggle theme">
							{theme === "light" ? (
								<LightModeIcon fontSize="small" />
							) : (
								<NightsStayIcon fontSize="small" />
							)}
							<span className="sr-only">Toggle theme</span>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex items-center justify-between px-4 py-2">
					<div className="flex items-center space-x-2">
						{navItems.slice(0, 2).map((item) => (
							<button
								key={item.label}
								onClick={() => handleScroll(item.link, item.label)}
								className={`px-2 py-1 rounded text-xs ${
									activeSection === item.label
										? "bg-primary text-color-text-contrast"
										: "text-color-text-primary"
								}`}>
								{item.label}
							</button>
						))}
					</div>

					<div className="flex items-center space-x-2">
						<button
							onClick={switchTheme}
							className="p-2 rounded-md text-color-text-primary hover:bg-accent transition-colors"
							title="Toggle theme">
							{theme === "light" ? (
								<LightModeIcon fontSize="small" />
							) : (
								<NightsStayIcon fontSize="small" />
							)}
						</button>

						<button
							onClick={toggleMobileMenu}
							className="p-2 rounded-md text-color-text-primary hover:bg-accent transition-colors"
							title="Toggle menu">
							{isMobileMenuOpen ? (
								<CloseIcon fontSize="small" />
							) : (
								<MenuIcon fontSize="small" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu Dropdown */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
						<div className="px-4 py-2 space-y-1">
							{navItems.slice(2).map((item) => (
								<button
									key={item.label}
									onClick={() => handleScroll(item.link, item.label)}
									className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 text-sm ${
										activeSection === item.label
											? "bg-primary text-color-text-contrast"
											: "text-color-text-primary hover:bg-accent"
									}`}>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default AppBar;
