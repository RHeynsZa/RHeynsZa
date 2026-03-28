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
		<section
			data-section="stack"
			className="border-b border-border/60 bg-muted/20 px-4 py-20"
		>
			<div className="mx-auto w-full max-w-6xl">
				<div className="mb-10 max-w-3xl">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						Tech stack
					</h2>
					<p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg">
						Tools I use often, grouped by the kind of problems they solve.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{techStack.map((category) => (
						<Card
							key={category.title}
							className="h-full border border-border/80 bg-card/80 shadow-sm"
						>
							<CardHeader>
								<CardTitle className="text-xl">{category.title}</CardTitle>
								<CardDescription className="text-sm">
									{category.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
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
			</div>
		</section>
	);
}
