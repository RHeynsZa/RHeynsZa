import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ForceMultiplier } from "@/components/ForceMultiplier";
import { Hero } from "@/components/Hero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TechStack } from "@/components/TechStack";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<FeaturedProjects />
			<TechStack />
			<PhilosophySection />
			<ForceMultiplier />
		</div>
	);
}
