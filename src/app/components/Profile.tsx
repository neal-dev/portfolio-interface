export default function Profile() {
	return (
		<section id="about" className="py-20 bg-accent/30">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-medium mb-4 text-color-text-primary">
						About Me
					</h2>
					<div className="w-16 h-px bg-border mx-auto"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium mb-4 text-color-text-primary">
									Background
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									I&apos;m a passionate Software Developer with over 1
									year of experience specializing in modern web
									applications and blockchain solutions. My journey
									started with a degree in Computer Engineering, and
									I&apos;ve since honed my skills as a frontend
									developer, focusing on React, TypeScript, and
									Blockchain technologies.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-4 text-color-text-primary">
									What I Do
								</h3>
								<ul className="space-y-3 text-muted-foreground">
									<li className="flex items-start">
										<span className="text-primary mr-3 mt-1">•</span>
										<span>
											Design and develop responsive web applications
											using React and Next.js
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-color-text-primary mr-3 mt-1">
											•
										</span>
										<span>
											Integrate RESTful APIs with backend services
											using Node.js and Express
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-color-text-primary mr-3 mt-1">
											•
										</span>
										<span>
											Implement database solutions using PostgreSQL
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-3 mt-1">•</span>
										<span>
											Optimize application performance and implement
											unit testing
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-3 mt-1">•</span>
										<span>
											Collaborate with cross-functional teams using
											Agile methodologies
										</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="space-y-6">
							<div className="bg-card border border-border rounded-lg p-6 text-color-text-primary">
								<h3 className="text-xl font-medium mb-4 text-color-text-primary">
									Quick Facts
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Experience
										</span>
										<span className="font-medium">1+ Years</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Current Focus
										</span>
										<span className="font-medium">
											Full-Stack Development
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Location
										</span>
										<span className="font-medium">
											Bangkok, Thailand
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Languages
										</span>
										<span className="font-medium">Thai, English</span>
									</div>
								</div>
							</div>

							<div className="bg-card border border-border rounded-lg p-6 text-color-text-primary">
								<h3 className="text-xl font-medium mb-4 ">Interests</h3>
								<div className="grid grid-cols-2 gap-3">
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										AI
									</span>
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										Finance
									</span>
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										Movie / Anime
									</span>
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										Travel
									</span>
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										Gaming
									</span>
									<span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-center">
										Cooking
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
