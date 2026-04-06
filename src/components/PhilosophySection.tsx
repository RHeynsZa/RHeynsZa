import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { philosophy } from "@/data/philosophy";

export function PhilosophySection() {
	return (
		<section className="section-padding border-b border-border/50 bg-muted/20">
			<div className="section-shell">
				<div className="mb-12 max-w-3xl">
					<h2 className="section-heading">How I like to work</h2>
					<p className="section-subheading">
						Clear ownership, stable systems, and straightforward communication.
						A few preferences are non-negotiable.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{philosophy.map((item) => (
						<Card
							key={item.id}
							className="h-full rounded-xl border border-border bg-white shadow-none"
						>
							<CardHeader className="pb-3">
								<div className="flex items-start justify-between gap-3">
									<CardTitle className="text-base font-semibold leading-snug text-foreground">
										{item.title}
									</CardTitle>
									<span
										className={`mt-0.5 flex-shrink-0 rounded-full p-1 ${
											item.type === "like"
												? "bg-emerald-50 text-emerald-600"
												: "bg-rose-50 text-rose-500"
										}`}
									>
										{item.type === "like" ? (
											<ThumbsUp className="h-3 w-3" />
										) : (
											<ThumbsDown className="h-3 w-3" />
										)}
									</span>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-relaxed text-muted-foreground">
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
