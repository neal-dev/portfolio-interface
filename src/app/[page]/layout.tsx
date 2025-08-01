"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { ReactNode } from "react";
import AppBar from "../components/AppBar";

import Container from "../components/Container";
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	const [theme] = useLocalStorage("theme");

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
