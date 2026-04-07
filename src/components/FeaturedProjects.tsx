import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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

					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<Card
								key={project.id}
								className="group flex h-full cursor-pointer flex-col rounded-xl border border-border bg-white shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]"
								onClick={() => handleProjectClick(project)}
							>
								<CardHeader className="pb-3">
									<CardTitle className="text-base font-semibold leading-snug text-foreground">
										{project.title}
									</CardTitle>
									<CardDescription className="pt-1.5 text-sm leading-relaxed text-muted-foreground">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="mt-auto pt-0">
									<div className="mb-4 flex flex-wrap gap-1.5">
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
									<button
										type="button"
										className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
									>
										Read case study
										<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
									</button>
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
