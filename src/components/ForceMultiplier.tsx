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
		<section className="section-padding border-b border-border/50">
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">Beyond code delivery</h2>
					<p className="section-subheading">
						The best results come from healthy engineering habits, not heroics.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					{impactItems.map((item) => {
						const Icon = item.icon;
						return (
							<Card
								key={item.id}
								className="h-full rounded-xl border border-border bg-white shadow-none"
							>
								<CardHeader className="pb-3">
									<div className="flex items-center gap-3">
										<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground/70">
											<Icon className="h-4 w-4" />
										</div>
										<CardTitle className="text-base font-semibold text-foreground">
											{item.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm leading-relaxed text-muted-foreground">
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
