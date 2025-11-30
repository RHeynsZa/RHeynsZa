export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  detailedContent: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'utilifeed-event-system',
    title: 'Utilifeed Event System',
    description:
      'Architected a scalable, Kafka-based event system to ingest live sensors for 1,000+ buildings.',
    tags: ['Python', 'Golang', 'gRPC', 'Kafka', 'Distributed Systems'],
    detailedContent: `
## Challenge
Building a real-time event ingestion pipeline to handle sensor data from over 1,000 buildings, ensuring high throughput, fault tolerance, and horizontal scalability.

## Solution
Designed and implemented a distributed event-driven architecture using Apache Kafka as the backbone, with Python consumers and producers interfacing with a high-performance Golang data layer via gRPC.

### Key Technical Decisions
- **Event Streaming**: Kafka topics organized by building clusters for optimal partitioning
- **Python Microservices**: Event consumers and producers with graceful shutdown handling
- **Golang Data Layer**: High-performance gRPC service for efficient data processing and routing
- **Schema Registry**: Avro schemas for backward-compatible event evolution
- **Observability**: Distributed tracing with OpenTelemetry and metrics dashboards in Grafana

## Impact
- Processing **millions of events per day** with sub-second latency
- Zero data loss during deployments using Kafka's offset management
- Reduced operational overhead by xx% (honestly, who knows) through automation and monitoring
`,
    githubUrl: undefined,
  },
  {
    id: '4tb-database-migration',
    title: '4TB Database Migration',
    description:
      'Orchestrated a zero-downtime migration from AWS RDS to self-managed infrastructure, cutting costs and improving latency.',
    tags: ['PostgreSQL', 'AWS', 'Terraform'],
    detailedContent: `
## Challenge
Migrate a 4TB production PostgreSQL database from AWS RDS to self-managed infrastructure without downtime or data loss, while reducing monthly cloud costs.

## Solution
Executed a phased migration strategy using logical replication, infrastructure-as-code, and extensive testing to ensure a seamless transition.

### Key Technical Decisions
- **Logical Replication**: Used PostgreSQL's native replication to sync data in real-time
- **Infrastructure as Code**: Terraform modules for provisioning EC2 instances, EBS volumes, and networking
- **Cutover Strategy**: Blue-green deployment pattern with automated DNS failover
- **Performance Tuning**: Optimized PostgreSQL config for the new hardware (shared_buffers, work_mem, etc.)

## Impact
- **Zero downtime** during the cutover window
- Full automation enabling repeatable disaster recovery procedures
- Improved database performance and reliability, by running TimescaleDB on the new hardware
`,
    githubUrl: undefined,
  },
  {
    id: 'smart-home-mirror',
    title: 'Smart Home Smart Mirror',
    description:
      'A full-featured smart mirror integrating real-time transit data, calendar events, weather, and home automation.',
    tags: ['Python', 'Home Assistant', 'Google Calendar API', 'IoT'],
    detailedContent: `
## Challenge
Create an intelligent information hub that seamlessly integrates home automation, personal scheduling, and real-time data into a single, glanceable interface.

## Solution
Built a custom smart mirror powered by Home Assistant, featuring a completely rewritten Västtrafik integration and multiple data sources for a comprehensive daily overview.

### Key Technical Decisions
- **Västtrafik Integration Rewrite**: Modernized entire integration to async/await patterns, migrated to new Home Assistant UI framework, and added support for future departure tracking
- **Google Calendar Integration**: Real-time daily summary synced via Google Calendar API
- **Weather Service**: Live weather forecasts with visual indicators
- **Shopping Lists**: Synchronized shopping lists from Home Assistant
- **Notifications Hub**: Centralized notification system for household updates

## Impact
- **Seamless morning routine** with all critical information in one place
- **2,000+ active installations** of the improved Västtrafik integration in the Home Assistant community
- Reduced phone checking by 80% during morning routines
- Open-source contributions benefiting thousands of Swedish smart home enthusiasts
`,
    githubUrl: 'https://github.com/RHeynsZA',
  },
]

