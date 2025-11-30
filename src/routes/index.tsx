import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/Hero'
import { PhilosophySection } from '@/components/PhilosophySection'
import { TechStack } from '@/components/TechStack'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { BlobAnimation } from '@/components/BlobAnimation'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PhilosophySection />
      <TechStack />
      <FeaturedProjects />
      <BlobAnimation />
    </div>
  )
}
