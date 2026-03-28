export interface TechCategory {
	title: string;
	description: string;
	technologies: Technology[];
}

export interface Technology {
	name: string;
	variant?: "default" | "secondary" | "outline" | "destructive";
}

export const techStack: TechCategory[] = [
	{
		title: "Core architecture",
		description: "Backend and data systems",
		technologies: [
			{ name: "Golang", variant: "outline" },
			{ name: "Python", variant: "outline" },
			{ name: "Apache Kafka", variant: "outline" },
			{ name: "C#", variant: "outline" },
			{ name: "PostgreSQL", variant: "outline" },
		],
	},
	{
		title: "Frontend delivery",
		description: "Product and interface engineering",
		technologies: [
			{ name: "React", variant: "outline" },
			{ name: "TypeScript", variant: "outline" },
			{ name: "TanStack Query", variant: "outline" },
			{ name: "TanStack Router", variant: "outline" },
			{ name: "Tailwind CSS", variant: "outline" },
		],
	},
	{
		title: "Infrastructure",
		description: "Platform and operations",
		technologies: [
			{ name: "Kubernetes", variant: "outline" },
			{ name: "Terraform", variant: "outline" },
			{ name: "AWS", variant: "outline" },
			{ name: "Grafana", variant: "outline" },
			{ name: "Docker", variant: "outline" },
		],
	},
];
