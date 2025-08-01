import { Skill } from "../data/skills";

export const getProficiencyColor = (proficiency: Skill["proficiency"]) => {
	const colors = {
		Expert: "bg-green-500/10 text-green-700 border-green-200",
		Advanced: "bg-blue-500/10 text-blue-700 border-blue-200",
		Intermediate: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
		Beginner: "bg-gray-500/10 text-gray-700 border-gray-200",
	};
	return colors[proficiency];
};
