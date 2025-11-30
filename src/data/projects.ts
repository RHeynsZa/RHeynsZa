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
    tags: ['Go', 'Kafka', 'Distributed Systems'],
    detailedContent: `
## Challenge
Building a real-time event ingestion pipeline to handle sensor data from over 1,000 buildings, ensuring high throughput, fault tolerance, and horizontal scalability.

## Solution
Designed and implemented a distributed event-driven architecture using Apache Kafka as the backbone, with microservices written in Go to process and route sensor data efficiently.

### Key Technical Decisions
- **Event Streaming**: Kafka topics organized by building clusters for optimal partitioning
- **Go Microservices**: Lightweight consumers with graceful shutdown handling
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
    id: 'vasttrafik-home-assistant',
    title: 'Västtrafik Home Assistant',
    description:
      'Open-source stewardship for the Västtrafik public transport API integration.',
    tags: ['Python', 'Open Source', 'API'],
    detailedContent: `
## Challenge
Maintain and improve the Home Assistant integration for Västtrafik's public transport API, enabling thousands of users in Sweden to track real-time bus and tram arrivals.

## Solution
Took over stewardship of the integration, modernized the codebase, improved error handling, and added new features requested by the community.

### Key Technical Decisions
- **API Client Refactor**: Async/await patterns for better concurrency
- **Error Handling**: Graceful degradation when the API is unavailable
- **Testing**: Comprehensive unit and integration tests to prevent regressions
- **Documentation**: Clear setup guides for both developers and end-users

## Impact
- **2,000+ active installations** in the Home Assistant community
- Resolved critical bugs affecting API rate limiting
- Added support for multiple stops and real-time delay calculations
- Active community engagement with feature requests and bug reports
`,
    githubUrl: 'https://github.com/RHeynsZA',
  },
]

