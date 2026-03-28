export interface PhilosophyItem {
	id: string;
	type: "like" | "hate";
	title: string;
	description: string;
}

export const philosophy: PhilosophyItem[] = [
	{
		id: "weird-problems",
		type: "like",
		title: "Complex edge cases",
		description:
			"I enjoy debugging race conditions and failure paths that only show up under real production load.",
	},
	{
		id: "building-cool-things",
		type: "like",
		title: "Shipping useful software",
		description:
			"From large event pipelines to small internal tools, I care most about software people can trust daily.",
	},
	{
		id: "game-dev",
		type: "like",
		title: "Game development side projects",
		description:
			"I occasionally build game prototypes. It keeps my problem solving sharp and gives me room to experiment.",
	},
	{
		id: "pizza-deploy",
		type: "hate",
		title: "Risky late-night deploys",
		description:
			"Releases should be routine. If deploys feel risky, the process needs work before the next launch.",
	},
	{
		id: "non-relational",
		type: "hate",
		title: "Schemaless by default",
		description:
			"I prefer explicit data models for core systems. Clear structure makes systems easier to evolve safely.",
	},
	{
		id: "timezones",
		type: "hate",
		title: "Timezone surprises",
		description:
			"Time math breaks quietly and expensively, so I design systems to handle timezone boundaries carefully.",
	},
];
