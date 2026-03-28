import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { philosophy } from "@/data/philosophy";

export function PhilosophySection() {
	return (
		<section
			data-section="philosophy"
			className="section-shell scroll-mt-28 py-16"
		>
			<div className="mb-10 max-w-3xl">
				<h2 className="section-title">How I like to work</h2>
				<p className="section-intro">
					Clear ownership, stable systems, and straightforward communication. A
					few preferences are non-negotiable.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				{philosophy.map((item) => (
					<Card
						key={item.id}
						className="surface h-full gap-0 border-border/75 bg-card/92 p-0"
					>
						<CardHeader className="pb-4">
							<div className="flex items-start justify-between gap-2">
								<CardTitle className="text-lg leading-6">
									{item.title}
								</CardTitle>
								<Badge
									variant="outline"
									className={
										item.type === "like"
											? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700"
											: "border-rose-500/40 bg-rose-500/10 text-rose-700"
									}
								>
									{item.type === "like" ? (
										<ThumbsUp className="size-3.5" />
									) : (
										<ThumbsDown className="size-3.5" />
									)}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="pb-6">
							<p className="text-sm leading-6 text-muted-foreground">
								{item.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
