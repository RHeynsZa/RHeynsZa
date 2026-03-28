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
		<section className="border-b border-border/60 px-4 py-20">
			<div className="mx-auto w-full max-w-6xl">
				<div className="mb-10 max-w-3xl">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						Beyond code delivery
					</h2>
					<p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg">
						The best results come from healthy engineering habits, not heroics.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					{impactItems.map((item) => {
						const Icon = item.icon;
						return (
							<Card
								key={item.id}
								className="h-full border border-border/80 bg-card/80 shadow-sm"
							>
								<CardHeader>
									<div className="flex items-center gap-3">
										<div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
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
