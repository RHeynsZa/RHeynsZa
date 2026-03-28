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
			className="section-padding border-y border-border/60 bg-muted/20"
		>
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">Tech stack</h2>
					<p className="section-subheading">
						Tools I use often, grouped by the kind of problems they solve.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{techStack.map((category) => (
						<Card
							key={category.title}
							className="h-full rounded-2xl border border-border/80 bg-card shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)]"
						>
							<CardHeader>
								<CardTitle className="text-xl leading-7">
									{category.title}
								</CardTitle>
								<CardDescription className="text-sm leading-6">
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
