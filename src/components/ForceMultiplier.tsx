import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Presentation, Rocket, Lightbulb } from 'lucide-react'

const impactItems = [
  {
    id: 'mentorship',
    icon: Users,
    title: 'Mentorship',
    description:
      'Code reviews are for teaching, not just bug catching. I actively mentor juniors to build the next generation of leads.',
  },
  {
    id: 'techtalks',
    icon: Presentation,
    title: 'TechTalks',
    description:
      'Founder of bi-weekly internal TechTalks. I believe in breaking down silos through shared knowledge.',
  },
  {
    id: 'modernization',
    icon: Rocket,
    title: 'Modernization',
    description:
      "Led the cultural shift to Infrastructure-as-Code (Terraform/K8s). We don't click buttons in consoles; we commit code.",
  },
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'Bridging the gap between Product and Tech. I translate business goals into scalable architecture.',
  },
]

export function ForceMultiplier() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Force Multiplier</h2>
          <p className="text-lg text-muted-foreground">
            Writing code is easy. Building an engineering culture that scales is the hard part.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={item.id}
                className="border-2 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

