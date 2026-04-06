import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
	const scrollToProjects = () => {
		const projectsSection = document.querySelector<HTMLElement>(
			'[data-section="projects"]',
		);
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section
			data-section="home"
			className="relative overflow-hidden border-b border-border/50 bg-white pt-24 md:pt-28"
		>
			<div className="section-shell section-padding relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
				<div className="space-y-8">
					<div className="inline-flex">
						<span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							Senior Full-Stack Engineer · Gothenburg, Sweden
						</span>
					</div>

					<div className="space-y-5">
						<h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
							I build reliable systems and practical products teams can grow
							with.
						</h1>
						<p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
							I'm Ruan Heyns. I design distributed backends, ship type-safe
							frontends, and help teams build habits that keep releases calm.
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						<Button
							size="lg"
							className="group rounded-full bg-foreground px-6 text-background hover:bg-foreground/85 shadow-sm"
							onClick={scrollToProjects}
						>
							View selected work
							<ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
						</Button>

						<a
							href="https://github.com/RHeynsZA"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex"
						>
							<Button
								variant="outline"
								size="lg"
								className="rounded-full border-border px-6 hover:bg-muted/60"
							>
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Button>
						</a>

						<a href="mailto:rheynsza@gmail.com" className="inline-flex">
							<Button
								variant="ghost"
								size="lg"
								className="rounded-full px-5 hover:bg-muted/60"
							>
								<Mail className="mr-2 h-4 w-4" />
								Contact
							</Button>
						</a>
					</div>
				</div>

				<aside className="rounded-2xl border border-border bg-muted/30 p-7">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
						Focus areas
					</h2>
					<ul className="mt-5 space-y-5 text-sm leading-relaxed text-muted-foreground">
						<li className="flex gap-3">
							<div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
							<div>
								<span className="font-medium text-foreground">
									Distributed systems:
								</span>{" "}
								event-driven services, data pipelines, and production
								observability.
							</div>
						</li>
						<li className="flex gap-3">
							<div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
							<div>
								<span className="font-medium text-foreground">
									Frontend delivery:
								</span>{" "}
								type-safe React applications with accessible, maintainable UI
								systems.
							</div>
						</li>
						<li className="flex gap-3">
							<div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
							<div>
								<span className="font-medium text-foreground">
									Team impact:
								</span>{" "}
								mentorship, review culture, and pragmatic engineering standards.
							</div>
						</li>
					</ul>
				</aside>
			</div>
		</section>
	);
}
