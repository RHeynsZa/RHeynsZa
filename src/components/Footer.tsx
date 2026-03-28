import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border/70 bg-background">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="text-sm font-medium">Ruan Heyns</p>
					<p className="mt-1 text-sm text-muted-foreground">
						Full-stack engineer focused on dependable systems.
					</p>
				</div>

				<div className="flex items-center gap-2">
					<a
						href="https://github.com/RHeynsZA"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub Profile"
					>
						<Button variant="ghost" size="icon">
							<Github className="h-5 w-5" />
						</Button>
					</a>
					<a
						href="https://linkedin.com/in/ruan-heyns-266249120/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn Profile"
					>
						<Button variant="ghost" size="icon">
							<Linkedin className="h-5 w-5" />
						</Button>
					</a>
					<a href="mailto:rheynsza@gmail.com" aria-label="Email">
						<Button variant="ghost" size="icon">
							<Mail className="h-5 w-5" />
						</Button>
					</a>
				</div>

				<p className="text-sm text-muted-foreground">
					© {currentYear} Ruan Heyns
				</p>
			</div>
		</footer>
	);
}
