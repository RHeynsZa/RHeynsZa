import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { type Project, projects } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function FeaturedProjects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [modalOpen, setModalOpen] = useState(false);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};

	return (
		<>
			<section
				data-section="projects"
				className="section-shell scroll-mt-28 py-8 md:py-12"
			>
				<div className="mb-10 max-w-3xl">
					<h2 className="section-title">Selected projects</h2>
					<p className="section-intro">
						Recent work across event processing, infrastructure, and product
						engineering.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							key={project.id}
							className="group surface h-full cursor-pointer gap-0 border-border/75 bg-card/95 p-0 transition hover:-translate-y-0.5 hover:border-primary/45"
							onClick={() => handleProjectClick(project)}
						>
							<CardHeader className="gap-3 pb-5">
								<CardTitle className="text-xl leading-7">
									{project.title}
								</CardTitle>
								<CardDescription className="text-sm leading-6">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="mt-auto space-y-4 pb-6">
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<Badge
											key={tag}
											variant="outline"
											className="border-primary/20 bg-primary/7 px-2.5 py-1 text-[11px] text-foreground/85"
										>
											{tag}
										</Badge>
									))}
								</div>
								<Button
									variant="ghost"
									size="sm"
									className="group/button -ml-2 px-2 text-primary hover:text-primary"
								>
									Read case study
									<ArrowRight className="ml-1.5 size-4 transition-transform group-hover/button:translate-x-1" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<ProjectModal
				project={selectedProject}
				open={modalOpen}
				onOpenChange={setModalOpen}
			/>
		</>
	);
}
