import { ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";
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

const boldRegex = /\*\*(.*?)\*\*/g;

function renderBoldText(text: string) {
	const nodes: ReactNode[] = [];
	let cursor = 0;
	let match = boldRegex.exec(text);

	while (match) {
		const [fullMatch, boldText] = match;
		const startIndex = match.index;

		if (startIndex > cursor) {
			nodes.push(text.slice(cursor, startIndex));
		}

		nodes.push(<strong key={`${boldText}-${startIndex}`}>{boldText}</strong>);
		cursor = startIndex + fullMatch.length;
		match = boldRegex.exec(text);
	}

	if (cursor < text.length) {
		nodes.push(text.slice(cursor));
	}

	boldRegex.lastIndex = 0;

	return nodes.length > 0 ? nodes : text;
}

function renderDetailedContent(content: string) {
	const lines = content.trim().split("\n");
	const blocks: ReactNode[] = [];

	let listItems: ReactNode[] = [];

	const flushList = () => {
		if (listItems.length > 0) {
			blocks.push(
				<ul key={`list-${blocks.length}`} className="ml-5 list-disc space-y-1">
					{listItems}
				</ul>,
			);
			listItems = [];
		}
	};

	for (const rawLine of lines) {
		const line = rawLine.trim();

		if (!line) {
			flushList();
			continue;
		}

		if (line.startsWith("## ")) {
			flushList();
			blocks.push(
				<h2
					key={`h2-${blocks.length}`}
					className="mt-8 text-2xl font-semibold tracking-tight text-foreground"
				>
					{renderBoldText(line.slice(3))}
				</h2>,
			);
			continue;
		}

		if (line.startsWith("### ")) {
			flushList();
			blocks.push(
				<h3
					key={`h3-${blocks.length}`}
					className="mt-5 text-lg font-semibold text-foreground"
				>
					{renderBoldText(line.slice(4))}
				</h3>,
			);
			continue;
		}

		if (line.startsWith("- ")) {
			listItems.push(
				<li key={`li-${blocks.length}-${listItems.length}`}>
					{renderBoldText(line.slice(2))}
				</li>,
			);
			continue;
		}

		flushList();
		blocks.push(
			<p key={`p-${blocks.length}`} className="mb-3">
				{renderBoldText(line)}
			</p>,
		);
	}

	flushList();

	return blocks;
}

export function ProjectModal({
	project,
	open,
	onOpenChange,
}: ProjectModalProps) {
	if (!project) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border/80 bg-card">
				<DialogHeader>
					<DialogTitle className="text-3xl font-semibold tracking-tight">
						{project.title}
					</DialogTitle>
					<DialogDescription className="pt-2 text-base leading-7">
						{project.description}
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-wrap gap-2 py-4">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="secondary" className="px-2.5 py-1">
							{tag}
						</Badge>
					))}
				</div>

				<div className="max-w-none space-y-2 text-sm leading-6 text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
					{renderDetailedContent(project.detailedContent)}
				</div>

				{project.githubUrl && (
					<div className="flex flex-wrap gap-3 pt-6">
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="default">
								<Github className="mr-2 size-4" />
								View on GitHub
							</Button>
						</a>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline">
								<ExternalLink className="mr-2 size-4" />
								Live demo
							</Button>
						</a>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
