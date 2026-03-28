import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { philosophy } from "@/data/philosophy";

export function PhilosophySection() {
	return (
		<section className="section-padding border-b border-border/60 bg-muted/15">
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">How I like to work</h2>
					<p className="section-subheading">
						Clear ownership, stable systems, and straightforward communication.
						A few preferences are non-negotiable.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{philosophy.map((item) => (
						<Card
							key={item.id}
							className="h-full rounded-2xl border border-border/80 bg-card shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)]"
						>
							<CardHeader>
								<div className="flex items-start justify-between gap-2">
									<CardTitle className="text-lg leading-6">
										{item.title}
									</CardTitle>
									<Badge
										variant="outline"
										className={
											item.type === "like"
												? "border-emerald-500/40 text-emerald-500"
												: "border-rose-500/40 text-rose-500"
										}
									>
										{item.type === "like" ? (
											<ThumbsUp className="h-3 w-3" />
										) : (
											<ThumbsDown className="h-3 w-3" />
										)}
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-6 text-muted-foreground">
									{item.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
