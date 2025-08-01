import { cn } from "@/lib/utils";

export default function Projects() {
	const projects = [
		{
			title: "Prototype E-commerce Platform",
			description:
				"A prototype e-commerce solution built for a furniture company, featuring advanced search and product recommendations.",
			longDescription:
				"Developed a full-stack e-commerce platform with features including product catalog, shopping cart, secure payment processing, order management, and admin dashboard. Implemented advanced search with filters, user recommendations, and real-time inventory tracking.",
			image: "/images/project/homemade-1.png",
			technologies: [
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Shadcn UI",
				"Golang",
				"PostgreSQL",
				"Redis",
				"Docker",
			],
			isInProgress: true,
			githubFrontend: "https://github.com/neal-dev/e-commerce-interface",
			githubBackend: "https://github.com/neal-dev/e-commerce-api",
			liveUrl: "#",
			featured: true,
			highlights: [
				"Implemented product catalog with pagination and search functionality",
				"Integrated product recommendations with machine learning",
				"Implemented shopping cart with real-time inventory tracking",
				"Implemented admin dashboard with analytics",
			],
		},
		{
			title: "Prototype Blog Website",
			description:
				"A prototype blog website built with Next.js, Tailwind CSS, and TypeScript.",
			longDescription:
				"Created a prototype blog website with Next.js, Tailwind CSS, and TypeScript. Integrated with backend using NestJS and PostgreSQL.",
			image: "/images/project/blog-2.png",
			technologies: [
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Shadcn UI",
				"NestJS",
				"PostgreSQL",
			],
			githubFrontend: "https://github.com/thanapatspongpipat/board-frontend",
			githubBackend: "https://github.com/thanapatspongpipat/board-backend",
			liveUrl: "#",
			isDemo: false,
			featured: true,
			stats: {},
			highlights: [
				"Integrated with backend using NestJS and PostgreSQL",
				"Implemented authentication and authorization with NextAuth",
				"Implemented pagination and search functionality",
				"Implemented responsive design",
			],
		},
		{
			title: "Weather Report",
			description:
				"A weather report website built with Next.js, Tailwind CSS, and TypeScript.",
			longDescription:
				"Created a weather report website with Next.js, Tailwind CSS, and TypeScript. Integrated with API from OpenWeatherMap.",
			image: "/images/project/weather-1.png",
			technologies: [
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Shadcn UI",
				"NestJS",
				"PostgreSQL",
			],
			githubFrontend: "https://github.com/neal-dev/weather-interface",
			liveUrl: "#",
			isDemo: false,
			featured: true,
			highlights: [
				"Integrated with API from OpenWeatherMap",
				"Implemented weather report with real-time data",
				"Implemented responsive design",
				"Integrate Map for Tracking Location to Display Current Weather at Current Location",
			],
		},
	];

	const featuredProjects = projects.filter((p) => p.featured);

	return (
		<section id="projects" className="py-20 bg-accent/30">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-medium mb-4 text-color-text-primary">
						Featured Projects
					</h2>
					<div className="w-16 h-px bg-border mx-auto"></div>
					<p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
						Here are some of my most significant projects that showcase my
						skills and experience in full-stack development.
					</p>
				</div>

				{/* Featured Projects */}
				<div className="max-w-6xl mx-auto mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{featuredProjects.map((project) => (
							<div
								key={project.title}
								className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>

								<div className="p-6 flex flex-col flex-grow">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl font-medium text-color-text-primary max-w-[200px] md:max-w-full">
											{project.title}
										</h3>
										<div className="flex items-center gap-2">
											<span
												className={cn(
													"px-2 py-1 rounded text-xs text-color-text-contrast w-fit",
													project.isInProgress
														? "bg-green-500 "
														: "bg-color-text-primary"
												)}>
												{project.isInProgress
													? "In Progress"
													: "Featured"}
											</span>
										</div>
									</div>

									<p className="text-muted-foreground mb-4 leading-relaxed">
										{project.longDescription}
									</p>

									<div className="mb-4">
										<h4 className="font-medium mb-2 text-color-text-primary">
											Key Highlights:
										</h4>
										<ul className="space-y-1">
											{project.highlights
												.slice(0, 3)
												.map((highlight, idx) => (
													<li
														key={idx}
														className="flex items-center text-muted-foreground text-sm">
														<span className="text-color-text-primary mr-2">
															•
														</span>
														<span>{highlight}</span>
													</li>
												))}
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-color-text-primary text-color-text-contrast rounded-md text-sm">
												{tech}
											</span>
										))}
									</div>

									{/* Footer - Links pushed to bottom */}
									<div className="mt-auto pt-4 border-t border-border">
										<div className="flex flex-col space-y-2 gap-2">
											<div className="flex items-center justify-between">
												<span className="text-sm text-muted-foreground font-medium">
													Repository:
												</span>
												<div className="flex space-x-3">
													<a
														target="_blank"
														href={project.githubFrontend}
														className="transition-colors font-medium text-sm flex items-center gap-1 bg-color-text-primary text-color-text-contrast rounded-md px-2 py-1">
														Frontend
													</a>
													{project.githubBackend && (
														<a
															target="_blank"
															href={project.githubBackend}
															className="transition-colors font-medium text-sm flex items-center gap-1 bg-color-text-primary text-color-text-contrast rounded-md px-2 py-1">
															Backend
														</a>
													)}
												</div>
											</div>
											{project.isDemo && (
												<div className="flex justify-end">
													<a
														href={project.liveUrl}
														className="text-color-text-primary font-medium text-sm">
														Live Demo →
													</a>
												</div>
											)}
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
