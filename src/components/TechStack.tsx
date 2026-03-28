import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
	return (
		<section data-section="stack" className="section-shell scroll-mt-28 py-16">
			<div className="mb-10 max-w-3xl">
				<h2 className="section-title">Tech stack</h2>
				<p className="section-intro">
					Tools I use often, grouped by the kind of problems they solve.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{techStack.map((category) => (
					<Card
						key={category.title}
						className="surface h-full gap-0 border-primary/15 bg-gradient-to-b from-card to-secondary/15 p-0"
					>
						<CardHeader className="gap-2.5 pb-5">
							<CardTitle className="text-xl">{category.title}</CardTitle>
							<CardDescription className="text-sm leading-6">
								{category.description}
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-6">
							<div className="flex flex-wrap gap-2">
								{category.technologies.map((tech) => (
									<Badge
										key={tech.name}
										variant={tech.variant}
										className="px-3 py-1 text-xs"
									>
										{tech.name}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
