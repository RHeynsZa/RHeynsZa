import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
	project: Project | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
	project,
	open,
	onOpenChange,
}: ProjectModalProps) {
	if (!project) return null;

	const parseBold = (text: string): string => {
		return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border-border bg-white shadow-xl">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-foreground leading-snug">
						{project.title}
					</DialogTitle>
					<DialogDescription className="text-sm leading-relaxed text-muted-foreground pt-1">
						{project.description}
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-wrap gap-1.5 py-3">
					{project.tags.map((tag) => (
						<Badge
							key={tag}
							variant="secondary"
							className="rounded-md border-0 bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
						>
							{tag}
						</Badge>
					))}
				</div>

				<div className="space-y-3">
					<div
						className="text-sm leading-relaxed text-foreground/80 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-5 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-4 [&_h3]:mb-1.5 [&_li]:ml-4 [&_li]:text-muted-foreground [&_p]:mb-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_code]:text-primary [&_code]:font-mono [&_code]:text-xs [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded"
						dangerouslySetInnerHTML={{
							__html: project.detailedContent
								.split("\n")
								.map((line) => {
									if (line.startsWith("## ")) {
										return `<h2>${parseBold(line.slice(3))}</h2>`;
									}
									if (line.startsWith("### ")) {
										return `<h3>${parseBold(line.slice(4))}</h3>`;
									}
									if (line.startsWith("- ")) {
										return `<li>${parseBold(line.slice(2))}</li>`;
									}
									if (line.trim() === "") {
										return "<br />";
									}
									return `<p>${parseBold(line)}</p>`;
								})
								.join(""),
						}}
					/>
				</div>

				{project.githubUrl && (
					<div className="pt-4 flex gap-2 border-t border-border">
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="default"
								size="sm"
								className="rounded-lg bg-foreground hover:bg-foreground/85 text-background"
							>
								<Github className="mr-2 h-3.5 w-3.5" />
								View on GitHub
							</Button>
						</a>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline" size="sm" className="rounded-lg">
								<ExternalLink className="mr-2 h-3.5 w-3.5" />
								Live Demo
							</Button>
						</a>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
