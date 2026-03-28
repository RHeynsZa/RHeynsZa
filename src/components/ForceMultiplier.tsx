import { Lightbulb, Presentation, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const impactItems = [
	{
		id: "mentorship",
		icon: Users,
		title: "Mentorship",
		description:
			"I treat reviews as coaching moments and help junior engineers become confident owners.",
	},
	{
		id: "techtalks",
		icon: Presentation,
		title: "Knowledge sharing",
		description:
			"I started recurring internal tech talks so teams can exchange patterns, tradeoffs, and lessons learned.",
	},
	{
		id: "modernization",
		icon: Rocket,
		title: "Platform modernization",
		description:
			"I led our move to infrastructure as code so environments are reproducible and operations are predictable.",
	},
	{
		id: "strategy",
		icon: Lightbulb,
		title: "Product alignment",
		description:
			"I work across product and engineering to turn business goals into practical technical roadmaps.",
	},
];

export function ForceMultiplier() {
	return (
		<section
			data-section="impact"
			className="section-shell scroll-mt-28 py-16 pb-20"
		>
			<div className="surface overflow-hidden border-primary/18 bg-gradient-to-br from-card via-card to-primary/6 p-7 md:p-9">
				<div className="mb-10 max-w-3xl">
					<h2 className="section-title">Beyond code delivery</h2>
					<p className="section-intro">
						The best results come from healthy engineering habits, not heroics.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					{impactItems.map((item) => {
						const Icon = item.icon;
						return (
							<Card
								key={item.id}
								className="h-full gap-0 border-border/70 bg-background/92 p-0 shadow-none"
							>
								<CardHeader className="pb-4">
									<div className="flex items-center gap-3">
										<div className="rounded-xl border border-primary/18 bg-primary/12 p-2.5 text-primary">
											<Icon className="size-5" />
										</div>
										<CardTitle className="text-lg">{item.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="pb-6">
									<p className="text-sm leading-6 text-muted-foreground">
										{item.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
