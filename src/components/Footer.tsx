import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/RHeynsZA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/ruan-heyns-266249120/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:rheynsza@gmail.com" aria-label="Email">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {currentYear} Ruan Heyns. Built with TanStack & Caffeine in Gothenburg.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

