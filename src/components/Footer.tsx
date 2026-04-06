import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-white border-t border-border/50">
			<div className="section-shell">
				<div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-sm font-semibold text-foreground">Ruan Heyns</p>
						<p className="mt-1 text-sm text-muted-foreground">
							Full-stack engineer focused on dependable systems.
						</p>
					</div>

					<div className="flex items-center gap-1">
						<a
							href="https://github.com/RHeynsZA"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub Profile"
						>
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60"
							>
								<Github className="h-4 w-4" />
							</Button>
						</a>
						<a
							href="https://linkedin.com/in/ruan-heyns-266249120/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
						>
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60"
							>
								<Linkedin className="h-4 w-4" />
							</Button>
						</a>
						<a href="mailto:rheynsza@gmail.com" aria-label="Email">
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60"
							>
								<Mail className="h-4 w-4" />
							</Button>
						</a>
					</div>

					<p className="text-xs text-muted-foreground">
						© {currentYear} Ruan Heyns
					</p>
				</div>
			</div>
		</footer>
	);
}
