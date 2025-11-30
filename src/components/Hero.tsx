import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Github, ArrowDown, ExternalLink } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Summary */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Ruan</span>. I engineer distributed
                systems that scale and lead frontend teams that ship.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Currently obsessed with{' '}
                <span className="font-mono text-accent">Type-Safety</span>,{' '}
                <span className="font-mono text-accent">Event Streams</span>, and making the CI/CD
                pipeline boring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 group" onClick={scrollToProjects}>
                View Architecture
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>

              <a
                href="https://github.com/RHeynsZA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" size="lg" className="text-lg px-8 group">
                  <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Read the Code
                </Button>
              </a>
            </div>

            <div className="text-sm text-muted-foreground pt-4">
              <p>Based in Gothenburg, Sweden 🇸🇪</p>
              <p className="mt-1 flex items-center gap-1">
                Senior Full-Stack Engineer and Data Protection Officer @{' '}
                <a
                  href="https://www.utilifeed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Utilifeed
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Title */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              Distributed
              <br />
              Systems.
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              Reactive
              <br />
              Frontends.
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Zero Fluff.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

