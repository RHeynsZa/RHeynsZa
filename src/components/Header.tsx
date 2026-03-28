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
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
			<nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
				<Link
					to="/"
					className="flex items-center gap-2 text-base font-semibold hover:text-primary"
				>
					<Code2 className="h-5 w-5 text-primary" />
					<span>Ruan Heyns</span>
				</Link>

				<div className="flex items-center gap-1 sm:gap-2">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("home")}
					>
						Home
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("projects")}
					>
						Projects
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => scrollToSection("stack")}
					>
						Stack
					</Button>
				</div>
			</nav>
		</header>
	);
}
