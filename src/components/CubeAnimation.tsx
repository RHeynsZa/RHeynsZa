import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface CubeAnimationProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CubeAnimation({ open, onOpenChange }: CubeAnimationProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full w-screen h-screen p-0 bg-black border-none flex items-center justify-center overflow-hidden">
        <DialogTitle className="sr-only">Animation</DialogTitle>
        <DialogDescription className="sr-only">
          An animated rolling cube visualization
        </DialogDescription>
        <div className="cube-container">
          <div className="cube-box">
            <div className="cube">
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <style>{`
          .cube-container {
            position: relative;
            width: 100%;
            transform: rotate(-35deg);
          }

          .cube-box {
            position: relative;
            left: -100px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% + 400px);
            -webkit-box-reflect: below 1px linear-gradient(transparent, #000);
            animation: animatesurface 1.5s ease-in-out infinite;
          }

          @keyframes animatesurface {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200px);
            }
          }

          .cube {
            position: relative;
            width: 200px;
            height: 200px;
            background: rgb(168, 85, 247);
            border-radius: 20px;
            box-shadow: 
              0 0 5px rgba(168, 85, 247, 1),
              0 0 25px rgba(168, 85, 247, 1),
              0 0 50px rgba(168, 85, 247, 1),
              0 0 150px rgba(168, 85, 247, 1);
            transform-origin: bottom right;
            animation: animate 1.5s ease-in-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .dot {
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
            box-shadow: 
              inset 0 0 8px rgba(0, 0, 0, 0.6),
              0 0 5px rgba(0, 0, 0, 0.4);
          }

          @keyframes animate {
            0% {
              transform: rotate(0deg);
            }
            60%, 100% {
              transform: rotate(90deg);
            }
          }
        `}</style>
      </DialogContent>
    </Dialog>
  )
}

