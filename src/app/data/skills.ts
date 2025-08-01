export interface Skill {
	name: string;
	experience: string;
	proficiency: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

export interface SkillCategory {
	title: string;
	description: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend Development",
		description: "Building responsive and interactive user interfaces",
		skills: [
			{ name: "React", experience: "1+ years", proficiency: "Advanced" },
			{
				name: "TypeScript",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "Next.js",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "JavaScript",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{ name: "HTML/CSS", experience: "2+ years", proficiency: "Advanced" },
			{
				name: "Tailwind CSS",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "shadcn/ui",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "React Hook Form",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
		],
	},
	{
		title: "Backend & Blockchain",
		description: "Decentralized applications and smart contract integration",
		skills: [
			{
				name: "Node.js",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "Express.js",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "Golang",
				experience: "3 months",
				proficiency: "Beginner",
			},
			{
				name: "Web3.js",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "Ethers.js",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
		],
	},
	{
		title: "Real-time & State Management",
		description: "Dynamic data handling and application state",
		skills: [
			{
				name: "WebSocket",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{
				name: "TanStack Query",
				experience: "1+ years",
				proficiency: "Intermediate",
			},
			{ name: "Jotai", experience: "1+ years", proficiency: "Intermediate" },
		],
	},
	{
		title: "Cloud & DevOps",
		description: "Cloud services and deployment infrastructure",
		skills: [
			{
				name: "AWS S3",
				experience: "1+ years",
				proficiency: "Beginner",
			},
			{
				name: "AWS CloudFront",
				experience: "1+ years",
				proficiency: "Beginner",
			},

			{ name: "Git", experience: "2+ years", proficiency: "Advanced" },
		],
	},
];

export const additionalSkills = [
	"Real-time Trading Platforms",
	"Crypto Trading APIs",
	"Orderly Network Integration",
	"Depth Chart Visualization",
	"WebSocket Connections",
	"Progressive Web Apps (PWA)",
	"Responsive Design",
	"UI/UX Design",
	"API Integration",
	"Smart Contract Integration",
	"Serverless Architecture",
	"AWS Services",
	"LINE API Integration",
	"State Management",
	"Form Validation",
	"Performance Optimization",
	"Cross-browser Compatibility",
];
