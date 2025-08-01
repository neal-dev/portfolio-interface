"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { ReactNode } from "react";
import AppBar from "../components/AppBar";
import Contact from "../components/Contact";
import Container from "../components/Container";
import "../globals.css";



export default function RootLayout({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useLocalStorage("theme");

	return (
		<html lang="en">
			<body data-theme={theme}>
				<Container>
					<AppBar />
					{children}
				</Container>
			</body>
		</html>
	);
}
