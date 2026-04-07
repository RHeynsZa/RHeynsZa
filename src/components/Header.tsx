import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
			<nav className="section-shell flex h-16 items-center justify-between">
				<Link
					to="/"
					className="flex items-center gap-2.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
				>
					<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
						<Code2 className="h-4 w-4" />
					</span>
					<span>Ruan Heyns</span>
				</Link>

				<div className="flex items-center gap-0.5">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("home")}
						className="rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 text-sm font-medium"
					>
						Home
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("projects")}
						className="rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 text-sm font-medium"
					>
						Projects
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("stack")}
						className="rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 text-sm font-medium"
					>
						Stack
					</Button>
				</div>
			</nav>
		</header>
	);
}
