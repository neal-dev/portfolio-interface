import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				"muted-foreground": "var(--muted-foreground)",
				"color-text-primary": "var(--text-color)",
				"color-text-contrast": "var(--text-color-contrast)",
				"color-text-secondary": "var(--text-color-secondary)",
			},
		},
	},
	plugins: [],
};
export default config;
