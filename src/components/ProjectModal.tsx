import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  // Helper function to convert **bold** markdown to <strong> tags
  const parseBold = (text: string): string => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 py-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          <div
            className="prose prose-sm dark:prose-invert max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_li]:ml-4 [&_p]:mb-2 [&_strong]:font-bold [&_strong]:text-foreground [&_code]:text-accent [&_code]:font-mono [&_code]:text-sm [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded"
            dangerouslySetInnerHTML={{
              __html: project.detailedContent
                .split('\n')
                .map((line) => {
                  if (line.startsWith('## ')) {
                    return `<h2>${parseBold(line.slice(3))}</h2>`
                  }
                  if (line.startsWith('### ')) {
                    return `<h3>${parseBold(line.slice(4))}</h3>`
                  }
                  if (line.startsWith('- ')) {
                    return `<li>${parseBold(line.slice(2))}</li>`
                  }
                  if (line.trim() === '') {
                    return '<br />'
                  }
                  return `<p>${parseBold(line)}</p>`
                })
                .join(''),
            }}
          />
        </div>

        {project.githubUrl && (
          <div className="pt-6 flex gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

