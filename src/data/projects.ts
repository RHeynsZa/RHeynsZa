export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	detailedContent: string;
	githubUrl?: string;
}

export const projects: Project[] = [
	{
		id: "utilifeed-event-system",
		title: "Utilifeed Event System",
		description:
			"Designed a Kafka-based event platform for live sensor ingestion across more than 1,000 buildings.",
		tags: ["Python", "Golang", "gRPC", "Kafka", "Distributed Systems"],
		detailedContent: `
## Challenge
Build a real-time ingestion pipeline for sensor data from over 1,000 buildings while keeping throughput high, latency low, and operations manageable.

## Solution
I designed and implemented a distributed, event-driven architecture with Apache Kafka at the center. Python services handled ingest and processing workflows, while a high-performance Golang layer exposed gRPC interfaces for data routing and enrichment.

### Key Technical Decisions
- **Event Streaming**: Kafka topics grouped by building clusters for clean partitioning and consumer scaling
- **Python Services**: Producers and consumers with graceful shutdown and retry-aware processing
- **Golang Data Layer**: gRPC services for high-throughput routing and transformation
- **Schema Management**: Avro schemas for safer event evolution across teams
- **Observability**: OpenTelemetry traces and Grafana dashboards for day-to-day operations

## Impact
- Processing **millions of events per day** with sub-second latency targets
- Reliable deployments with offset-aware rollout procedures
- Lower support load through better monitoring and alerting
`,
		githubUrl: undefined,
	},
	{
		id: "4tb-database-migration",
		title: "4TB Database Migration",
		description:
			"Led a zero-downtime migration from AWS RDS to self-managed PostgreSQL to reduce cost and improve latency.",
		tags: ["PostgreSQL", "AWS", "Terraform"],
		detailedContent: `
## Challenge
Migrate a 4TB production PostgreSQL database from AWS RDS to self-managed infrastructure without downtime or data loss.

## Solution
I planned and executed a phased migration using logical replication, infrastructure-as-code, and repeated dress rehearsals before cutover.

### Key Technical Decisions
- **Logical Replication**: PostgreSQL native replication kept source and target synchronized in near real time
- **Infrastructure as Code**: Terraform modules provisioned compute, storage, and networking consistently
- **Cutover Strategy**: Blue-green rollout with automated DNS failover and rollback checks
- **Performance Tuning**: PostgreSQL configuration tuned for target hardware and TimescaleDB workloads

## Impact
- **Zero downtime** during cutover
- Repeatable runbooks for disaster recovery and future migrations
- Better query performance and lower monthly operating costs
`,
		githubUrl: undefined,
	},
	{
		id: "smart-home-mirror",
		title: "Smart Home Smart Mirror",
		description:
			"Built a smart mirror experience that combines transit, calendar, weather, and home automation data.",
		tags: ["Python", "Home Assistant", "Google Calendar API", "IoT"],
		detailedContent: `
## Challenge
Create a glanceable daily dashboard that combines personal scheduling, live transit, and home automation into one interface.

## Solution
I built a custom Home Assistant-driven mirror and rewrote the Västtrafik integration to modern async patterns and newer Home Assistant UI conventions.

### Key Technical Decisions
- **Transit Integration Rewrite**: Updated async architecture and added future departure tracking
- **Calendar Sync**: Daily agenda from Google Calendar API
- **Weather Module**: Live forecasts with readable status indicators
- **Household Data**: Shared shopping list and home notifications in one view
- **Extensibility**: Modular cards for quick iteration and new integrations

## Impact
- A smoother morning routine with key information in one place
- **2,000+ active installations** of the improved Västtrafik integration
- Open-source contributions used by the Swedish Home Assistant community
`,
		githubUrl: "https://github.com/RHeynsZA",
	},
];
