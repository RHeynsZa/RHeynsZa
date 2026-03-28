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
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
			<nav className="section-shell flex h-16 items-center justify-between">
				<Link
					to="/"
					className="flex items-center gap-2 text-base font-semibold hover:text-primary"
				>
					<span className="rounded-md bg-primary/10 p-1.5 text-primary">
						<Code2 className="h-4 w-4" />
					</span>
					<span>Ruan Heyns</span>
				</Link>

				<div className="flex items-center gap-1 rounded-full border border-border/80 bg-card/80 p-1 shadow-sm sm:gap-2">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("home")}
						className="rounded-full"
					>
						Home
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("projects")}
						className="rounded-full"
					>
						Projects
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("stack")}
						className="rounded-full"
					>
						Stack
					</Button>
				</div>
			</nav>
		</header>
	);
}
