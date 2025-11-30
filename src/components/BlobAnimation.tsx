import { useEffect, useRef, useState } from 'react'
import { CubeAnimation } from './CubeAnimation'

export function BlobAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showCubeAnimation, setShowCubeAnimation] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let blobs: Blob[] = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Blob {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 100 + 50
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        
        // Purple/violet color palette
        const colors = [
          'rgba(168, 85, 247, 0.3)',  // purple
          'rgba(147, 51, 234, 0.3)',  // violet
          'rgba(126, 34, 206, 0.3)',  // deep purple
          'rgba(192, 132, 252, 0.3)', // light purple
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -this.radius) this.x = canvas.width + this.radius
        if (this.x > canvas.width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = canvas.height + this.radius
        if (this.y > canvas.height + this.radius) this.y = -this.radius
      }

      draw() {
        if (!ctx) return
        
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      blobs = []
      const numBlobs = Math.floor((canvas.width * canvas.height) / 50000)
      for (let i = 0; i < Math.max(5, Math.min(numBlobs, 15)); i++) {
        blobs.push(new Blob())
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.1)' // Very subtle trail effect with dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob) => {
        blob.update()
        blob.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(40px)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-4 px-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something{' '}
            <button
              onClick={() => setShowCubeAnimation(true)}
              className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent hover:from-purple-400 hover:via-primary hover:to-purple-400 transition-all duration-300 cursor-pointer inline-block hover:scale-105"
            >
              Remarkable
            </button>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>
      </div>

      <CubeAnimation open={showCubeAnimation} onOpenChange={setShowCubeAnimation} />
    </section>
  )
}

