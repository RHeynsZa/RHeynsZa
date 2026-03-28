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
			className="relative border-b border-border/60 px-4 py-24 md:py-32"
		>
			<div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
				<div className="space-y-7">
					<p className="inline-flex rounded-full border border-border/80 bg-card px-4 py-1.5 text-sm text-muted-foreground">
						Senior Full-Stack Engineer · Gothenburg, Sweden
					</p>

					<div className="space-y-5">
						<h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
							I build reliable systems and practical products teams can grow
							with.
						</h1>
						<p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
							I’m Ruan Heyns. I design distributed backends, ship type-safe
							frontends, and help teams build habits that keep releases calm.
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<Button size="lg" className="group" onClick={scrollToProjects}>
							View selected work
							<ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
						</Button>

						<a
							href="https://github.com/RHeynsZA"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex"
						>
							<Button variant="outline" size="lg">
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Button>
						</a>

						<a href="mailto:rheynsza@gmail.com" className="inline-flex">
							<Button variant="ghost" size="lg">
								<Mail className="mr-2 h-4 w-4" />
								Contact
							</Button>
						</a>
					</div>
				</div>

				<aside className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur-sm">
					<h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
						Focus areas
					</h2>
					<ul className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
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
