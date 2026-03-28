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
				className="section-padding section-shell scroll-mt-20"
			>
				<div>
					<div className="mb-12 max-w-3xl">
						<h2 className="section-heading">Selected projects</h2>
						<p className="section-subheading">
							Recent work across event processing, infrastructure, and product
							engineering.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<Card
								key={project.id}
								className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border/80 bg-card shadow-[0_10px_35px_-28px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-primary/40"
								onClick={() => handleProjectClick(project)}
							>
								<CardHeader className="pb-4">
									<CardTitle className="text-xl leading-7">
										{project.title}
									</CardTitle>
									<CardDescription className="pt-2 text-sm leading-6 text-muted-foreground">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="mt-auto pt-0">
									<div className="mb-5 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge key={tag} variant="outline" className="text-xs">
												{tag}
											</Badge>
										))}
									</div>
									<Button
										variant="ghost"
										size="sm"
										className="px-0 text-primary hover:text-primary/80"
									>
										Read case study
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
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
