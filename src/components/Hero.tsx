import { ArrowDown, Github, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
	"Distributed systems at production scale",
	"Type-safe frontend delivery",
	"Mentorship and engineering standards",
];

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
			className="section-shell scroll-mt-28 pt-32 pb-18 md:pt-36"
		>
			<div className="surface grid gap-10 overflow-hidden p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
				<div className="space-y-7">
					<Badge
						variant="outline"
						className="w-fit border-primary/30 bg-primary/8 px-4 py-1.5 text-sm text-primary"
					>
						<Sparkles className="size-3.5" />
						Senior Full-Stack Engineer · Gothenburg, Sweden
					</Badge>

					<div className="space-y-5">
						<h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
							I build reliable systems and practical products teams can grow
							with.
						</h1>
						<p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
							I&apos;m Ruan Heyns. I design distributed backends, ship type-safe
							frontends, and help teams build habits that keep releases calm.
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<Button size="lg" className="group" onClick={scrollToProjects}>
							View selected work
							<ArrowDown className="ml-2 size-4 transition-transform group-hover:translate-y-0.5" />
						</Button>

						<a
							href="https://github.com/RHeynsZA"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex"
						>
							<Button variant="outline" size="lg">
								<Github className="mr-2 size-4" />
								GitHub
							</Button>
						</a>

						<a href="mailto:rheynsza@gmail.com" className="inline-flex">
							<Button variant="ghost" size="lg">
								<Mail className="mr-2 size-4" />
								Contact
							</Button>
						</a>
					</div>
				</div>

				<aside className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/8 to-accent/10 p-6 md:p-7">
					<h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
						Focus areas
					</h2>
					<ul className="mt-4 space-y-3.5 text-sm leading-6 md:text-base">
						{highlights.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-muted-foreground"
							>
								<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</aside>
			</div>
		</section>
	);
}
