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
			className="relative overflow-hidden border-b border-border/70 pt-24 md:pt-28"
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--primary)_20%,transparent),transparent_45%)]" />
			<div className="section-shell section-padding relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
				<div className="space-y-8">
					<p className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
						Senior Full-Stack Engineer · Gothenburg, Sweden
					</p>

					<div className="space-y-6">
						<h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
							I build reliable systems and practical products teams can grow
							with.
						</h1>
						<p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
							I’m Ruan Heyns. I design distributed backends, ship type-safe
							frontends, and help teams build habits that keep releases calm.
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
						<Button
							size="lg"
							className="group rounded-full px-6 shadow-sm"
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
							<Button variant="outline" size="lg" className="rounded-full px-6">
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Button>
						</a>

						<a href="mailto:rheynsza@gmail.com" className="inline-flex">
							<Button variant="ghost" size="lg" className="rounded-full px-5">
								<Mail className="mr-2 h-4 w-4" />
								Contact
							</Button>
						</a>
					</div>
				</div>

				<aside className="rounded-3xl border border-border/80 bg-card/90 p-7 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
					<h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
						Focus areas
					</h2>
					<ul className="mt-5 space-y-5 text-sm leading-7 text-muted-foreground">
						<li>
							<span className="font-medium text-foreground">
								Distributed systems:
							</span>{" "}
							event-driven services, data pipelines, and production
							observability.
						</li>
						<li>
							<span className="font-medium text-foreground">
								Frontend delivery:
							</span>{" "}
							type-safe React applications with accessible, maintainable UI
							systems.
						</li>
						<li>
							<span className="font-medium text-foreground">Team impact:</span>{" "}
							mentorship, review culture, and pragmatic engineering standards.
						</li>
					</ul>
				</aside>
			</div>
		</section>
	);
}
