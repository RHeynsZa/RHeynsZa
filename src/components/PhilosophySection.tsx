import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { philosophy } from "@/data/philosophy";

export function PhilosophySection() {
	return (
		<section className="border-b border-border/60 bg-muted/20 px-4 py-20">
			<div className="mx-auto w-full max-w-6xl">
				<div className="mb-10 max-w-3xl">
					<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
						How I like to work
					</h2>
					<p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg">
						Clear ownership, stable systems, and straightforward communication.
						A few preferences are non-negotiable.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{philosophy.map((item) => (
						<Card
							key={item.id}
							className="h-full border border-border/80 bg-card/80 shadow-sm"
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
