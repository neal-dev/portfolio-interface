import { FC } from "react";
import type { Skill, SkillCategory } from "../data/skills";
import { skillCategories, additionalSkills } from "../data/skills";
import { getProficiencyColor } from "../utils/skills";

// Components
const SkillItem: FC<{ skill: Skill }> = ({ skill }) => (
	<div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
		<div className="flex-grow">
			<h4 className="font-medium text-color-text-primary">{skill.name}</h4>
			<p className="text-muted-foreground text-sm">{skill.experience}</p>
		</div>
		<div className="flex-shrink-0 ml-4">
			<span
				className={`px-3 py-1 rounded-full text-xs font-medium border ${getProficiencyColor(skill.proficiency)}`}>
				{skill.proficiency}
			</span>
		</div>
	</div>
);

const SkillCategory: FC<{ category: SkillCategory }> = ({ category }) => (
	<div className="bg-card border border-border rounded-lg p-6">
		<div className="mb-6 text-color-text-primary">
			<h3 className="text-xl font-medium mb-2">{category.title}</h3>
			<p className="text-muted-foreground text-sm">{category.description}</p>
		</div>
		<div className="space-y-4">
			{category.skills.map((skill) => (
				<SkillItem key={skill.name} skill={skill} />
			))}
		</div>
	</div>
);

const AdditionalSkills: FC = () => (
	<div className="mt-12 text-center text-color-text-primary">
		<h3 className="text-lg font-medium mb-6">
			Other Technologies & Concepts
		</h3>
		<div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
			{additionalSkills.map((skill) => (
				<span
					key={skill}
					className="px-3 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors text-sm">
					{skill}
				</span>
			))}
		</div>
	</div>
);

const SectionHeader: FC<{ title: string; description: string }> = ({
	title,
	description,
}) => (
	<div className="text-center mb-16">
		<h2 className="text-3xl font-medium mb-4 text-color-text-primary">
			{title}
		</h2>
		<div className="w-16 h-px bg-border mx-auto"></div>
		<p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
			{description}
		</p>
	</div>
);

// Main component
export default function Skills() {
	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-6">
				<SectionHeader
					title="Technical Skills"
					description="My technical expertise spans across modern web development technologies, from frontend frameworks to backend systems and cloud services."
				/>

				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{skillCategories.map((category) => (
							<SkillCategory key={category.title} category={category} />
						))}
					</div>

					<AdditionalSkills />
				</div>
			</div>
		</section>
	);
}
