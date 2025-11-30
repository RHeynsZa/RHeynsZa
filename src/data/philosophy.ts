export interface PhilosophyItem {
  id: string
  type: 'like' | 'hate'
  title: string
  description: string
}

export const philosophy: PhilosophyItem[] = [
  {
    id: 'weird-problems',
    type: 'like',
    title: 'Solving Weird Problems',
    description:
      "If it involves obscure edge cases, distributed race conditions, or protocols nobody remembers, I'm interested.",
  },
  {
    id: 'building-cool-things',
    type: 'like',
    title: 'Building Cool Things',
    description:
      "Whether it's a massive event ingestion pipeline or a small automation script, I like shipping software that actually works.",
  },
  {
    id: 'game-dev',
    type: 'like',
    title: 'Game Dev',
    description:
      'My occasional side quest. Dabbling in engines and logic keeps the creativity flowing.',
  },
  {
    id: 'pizza-deploy',
    type: 'hate',
    title: '"Pizza & Deploy" Evenings',
    description:
      "If you can't trust your CI/CD pipeline to deploy at 2 PM on a Tuesday, something is fundamentally wrong.",
  },
  {
    id: 'non-relational',
    type: 'hate',
    title: 'Non-Relational Databases',
    description: 'My brain demands structure. Give me a schema or give me death.',
  },
  {
    id: 'timezones',
    type: 'hate',
    title: 'Timezones',
    description:
      'A special circle of hell reserved for handling Daylight Savings Time in distributed logs.',
  },
]

