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
		<section className="section-padding border-b border-border/60">
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">Beyond code delivery</h2>
					<p className="section-subheading">
						The best results come from healthy engineering habits, not heroics.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{impactItems.map((item) => {
						const Icon = item.icon;
						return (
							<Card
								key={item.id}
								className="h-full rounded-2xl border border-border/80 bg-card shadow-[0_12px_34px_-26px_rgba(0,0,0,0.45)]"
							>
								<CardHeader>
									<div className="flex items-center gap-3">
										<div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-lg">{item.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
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
