import { Link } from '@tanstack/react-router'
import { Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
          <Code2 className="h-6 w-6 text-primary" />
          <span>RH</span>
        </Link>

        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium"
            onClick={() => scrollToSection('featured-projects')}
          >
            Work
          </Button>
        </div>
      </nav>
    </header>
  )
}
