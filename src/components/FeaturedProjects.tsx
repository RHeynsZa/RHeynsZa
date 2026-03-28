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
			<section data-section="projects" className="px-4 py-20 scroll-mt-20">
				<div className="mx-auto w-full max-w-6xl">
					<div className="mb-10 max-w-3xl">
						<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
							Selected projects
						</h2>
						<p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg">
							Recent work across event processing, infrastructure, and product
							engineering.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<Card
								key={project.id}
								className="flex h-full cursor-pointer flex-col border border-border/80 bg-card/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50"
								onClick={() => handleProjectClick(project)}
							>
								<CardHeader>
									<CardTitle className="text-xl">{project.title}</CardTitle>
									<CardDescription className="pt-2 text-sm leading-6">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="mt-auto">
									<div className="mb-4 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge key={tag} variant="outline" className="text-xs">
												{tag}
											</Badge>
										))}
									</div>
									<Button variant="ghost" size="sm" className="group px-0">
										Read case study
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
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
