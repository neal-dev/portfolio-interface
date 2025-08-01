export default function Experience() {
	const experiences = [
		{
			title: "Junior Software Developer",
			company: "100x Co.,Ltd",
			period: "Nov 2024 - Jul 2025",
			location: "Bangkok, Thailand",
			description:
				"Developed a cutting-edge real-time crypto trading platform, focusing on responsive UI and seamless user experience for cryptocurrency traders.",
			achievements: [
				"Built a real-time crypto trading platform using React with TypeScript, serving active traders with live market data",
				"Implemented WebSocket connections for real-time market data updates, improving trading speed and accuracy",
				"Integrated Orderly Network APIs for order management, market data, and trade status updates",
				"Created interactive Depth Chart visualizations using Visx for live order book data and market depth analysis",
				"Built accessible UI components using shadcn/ui aligned with design system standards",
				"Managed complex form states with React Hook Form for trading functionalities and validations",
				"Implemented TanStack Query for efficient data fetching and caching of dynamic market data",
				"Used Jotai for lightweight global state management of UI preferences and trading logic",
				"Developed Progressive Web App (PWA) version for optimal mobile trading experience",
				"Collaborated closely with designers and QA teams to deliver high-quality products",
			],
			technologies: [
				"React",
				"TypeScript",
				"WebSocket",
				"TanStack Query",
				"Jotai",
				"shadcn/ui",
				"React Hook Form",
				"Visx",
				"Blockchain",
			],
		},
		{
			title: "Internship Experience",
			company: "KASIKORN Business-Technology Group (KBTG)",
			period: "Sep 2023 - May 2024",
			location: "Bangkok, Thailand",
			description:
				"Contributed to frontend development and Web3 applications, gaining hands-on experience with blockchain technology and smart contracts.",
			achievements: [
				"Actively contributed to frontend development using Next.js for enterprise applications",
				"Developed Web3 applications integrating blockchain technology and smart contracts",
				"Engaged directly with clients to gather requirements and ensure user-centric approach",
				"Streamlined smart contract interactions, optimizing user experience in decentralized applications",
				"Connected and consumed blockchain APIs and smart contracts using Web3.js and Ethers.js",
				"Integrated LINE APIs and smart contracts into frontend applications effectively",
				"Implemented responsive design principles for cross-device compatibility",
				"Developed serverless applications using AWS CloudFront, Lambda, and S3 for enhanced performance",
			],
			technologies: [
				"Next.js",
				"Web3.js",
				"Ethers.js",
				"Smart Contracts",
				"AWS Lambda",
				"AWS S3",
				"AWS CloudFront",
				"LINE API",
				"Blockchain",
			],
		},
	];

	return (
		<section id="experience" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-medium mb-4 text-color-text-primary">
						Work Experience
					</h2>
					<div className="w-16 h-px bg-border mx-auto"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<div key={index} className="relative">
								{index !== experiences.length - 1 && (
									<div className="absolute left-4 top-12 w-px h-full bg-color-text-primary"></div>
								)}

								<div className="flex gap-6">
									<div className="flex-shrink-0 w-8 h-8 bg-color-text-primary rounded-full flex items-center justify-center mt-2">
										<div className="w-3 h-3 bg-color-text-contrast rounded-full"></div>
									</div>

									<div className="flex-grow bg-card border border-border rounded-lg p-6">
										<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 text-color-text-primary">
											<div>
												<h3 className="text-xl font-medium">
													{exp.title}
												</h3>
												<p className="text-primary font-medium">
													{exp.company}
												</p>
												<p className="text-muted-foreground">
													{exp.location}
												</p>
											</div>
											<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md mt-2 md:mt-0 self-start">
												{exp.period}
											</span>
										</div>

										<p className="text-muted-foreground mb-4 leading-relaxed">
											{exp.description}
										</p>

										<div className="mb-4">
											<h4 className="font-medium mb-2 text-color-text-primary">
												Key Achievements:
											</h4>
											<ul className="space-y-1">
												{exp.achievements.map(
													(achievement, idx) => (
														<li
															key={idx}
															className="flex items-start text-muted-foreground">
															<span className="text-color-text-primary mr-2 mt-1">
																•
															</span>
															<span>{achievement}</span>
														</li>
													)
												)}
											</ul>
										</div>

										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 bg-color-text-primary text-color-text-contrast rounded-md">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
