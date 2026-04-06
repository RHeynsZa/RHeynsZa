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
			className="section-padding border-y border-border/50 bg-muted/20"
		>
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">Tech stack</h2>
					<p className="section-subheading">
						Tools I use often, grouped by the kind of problems they solve.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{techStack.map((category) => (
						<Card
							key={category.title}
							className="h-full rounded-xl border border-border bg-white shadow-none"
						>
							<CardHeader className="pb-3">
								<CardTitle className="text-base font-semibold text-foreground">
									{category.title}
								</CardTitle>
								<CardDescription className="text-sm leading-relaxed text-muted-foreground">
									{category.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-1.5">
									{category.technologies.map((tech) => (
										<Badge
											key={tech.name}
											variant={tech.variant}
											className="rounded-md px-2.5 py-1 text-xs font-medium"
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
