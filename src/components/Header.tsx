import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
	{ label: "Home", section: "home" },
	{ label: "Projects", section: "projects" },
	{ label: "Stack", section: "stack" },
	{ label: "Approach", section: "philosophy" },
	{ label: "Leadership", section: "impact" },
];

export default function Header() {
	const scrollToSection = (sectionName: string) => {
		const section = document.querySelector<HTMLElement>(
			`[data-section="${sectionName}"]`,
		);

		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
			<nav className="section-shell flex h-18 items-center justify-between gap-4">
				<Link
					to="/"
					className="flex items-center gap-2 text-base font-semibold tracking-tight hover:text-primary"
				>
					<span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/12 text-primary">
						<Code2 className="size-4" />
					</span>
					<span>Ruan Heyns</span>
				</Link>

				<div className="hidden items-center gap-1 lg:flex">
					{navigation.map((item) => (
						<Button
							key={item.section}
							variant="ghost"
							size="sm"
							onClick={() => scrollToSection(item.section)}
							className="text-muted-foreground hover:text-foreground"
						>
							{item.label}
						</Button>
					))}
				</div>

				<Button
					variant="outline"
					size="sm"
					onClick={() => scrollToSection("projects")}
					className="hidden sm:inline-flex"
				>
					View work
				</Button>
			</nav>
		</header>
	);
}
