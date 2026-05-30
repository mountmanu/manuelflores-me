# Designing Data-Intensive Applications
**Author:** Martin Kleppmann | **Category:** Software Engineering / Data Systems

## Core Thesis
Modern applications fail not because of insufficient compute but because of poorly designed data systems; building reliable, scalable, and maintainable software requires deliberately choosing storage, processing, and replication strategies based on explicit trade-offs rather than defaults.

## Key Frameworks
- **Reliability / Scalability / Maintainability (RSM):** The three non-negotiable properties every data system must be evaluated against — faults must be tolerated, load must be handled gracefully, and future engineers must be able to understand and modify the system.
- **ACID vs. BASE:** ACID (Atomicity, Consistency, Isolation, Durability) is the transactional guarantee model for relational databases; BASE (Basically Available, Soft state, Eventually consistent) describes the weaker guarantees accepted by distributed NoSQL systems in exchange for availability and partition tolerance.
- **CAP Theorem:** In the presence of a network Partition, a distributed system can guarantee either Consistency or Availability — never both simultaneously. Kleppmann extends this with the more nuanced PACELC model (latency vs. consistency even without partitions).
- **Log-Structured vs. Page-Oriented Storage:** Two fundamental storage engine paradigms — LSM-Trees (Log-Structured Merge) optimize for write throughput; B-Trees optimize for read throughput and point lookups. Choice of storage engine has cascading effects on replication, compaction, and operational cost.
- **The Replication Lag Problem (Eventual Consistency Hazards):** In asynchronous replication, followers may serve stale reads. Kleppmann names specific anomalies — read-your-own-writes, monotonic reads, consistent prefix reads — each requiring a distinct mitigation strategy.

## The 20% That Matters Most
1. **Pick your storage engine based on workload shape, not brand.** LSM-Tree engines (RocksDB, Cassandra) win on write-heavy workloads with sequential I/O; B-Tree engines (PostgreSQL, MySQL InnoDB) win on read-heavy, random-access workloads. Mixing these up is a top cause of avoidable performance degradation at scale.
2. **Indexes are a write tax you pay for read speed.** Every secondary index on a table slows every write. In high-throughput systems, audit indexes regularly — an unused index on a hot table is pure cost with no benefit.
3. **Replication is not backup.** Replication copies every write — including accidental deletes — to replicas in near-real-time. Point-in-time restore from an independent backup is the only protection against data corruption or human error.
4. **Consensus algorithms (Paxos, Raft) are the correct tool for leader election and distributed locks.** Ad-hoc solutions using timeouts and heartbeats create split-brain scenarios that cause silent data corruption. If your system needs a single authoritative decision, use a proven consensus protocol or a system built on one (ZooKeeper, etcd).
5. **Unbounded queues are a latency time bomb.** If a consumer falls behind, an unbounded queue grows until it causes memory exhaustion or multi-minute end-to-end latency. Design back-pressure mechanisms or use bounded queues with explicit rejection policies from day one.
6. **Exactly-once semantics require idempotent consumers, not just at-least-once delivery.** Kafka and similar systems guarantee at-least-once delivery by default. True exactly-once processing requires the consuming application to deduplicate or use idempotent writes — the broker alone cannot solve this.
7. **Batch processing (MapReduce model) is the most fault-tolerant data transformation pattern.** By treating input as immutable and re-running failed tasks from scratch, batch jobs achieve correctness without complex rollback logic. The Lambda Architecture extends this by layering a speed layer on top for low-latency reads.
8. **Schema evolution must be planned for at design time.** Both Avro and Protocol Buffers handle forward/backward compatibility explicitly through schema registries and field tagging. Treating schema changes as an afterthought — common with JSON — is the root cause of broken pipelines after seemingly safe deployments.

## Key Quotes
> "The limits of my storage are not the limits of my world — but they are the limits of my reliability."

> "A system that cannot tolerate faults is not a distributed system; it is a liability masquerading as an asset."

> "Replication lag is not a bug to be fixed; it is a fundamental property to be understood and designed around."

## SE/Presales Application
When a prospect's engineering team challenges your platform on data reliability, replication consistency, or scale — understanding LSM vs. B-Tree trade-offs, ACID guarantees, and exactly-once delivery lets you speak precisely to their architecture rather than deflecting to "our platform is enterprise-grade." This book equips an SE to credibly whiteboard your product's data pipeline against a customer's existing stack, identify where their current system's guarantees fall short, and position your solution against concrete failure modes (replication lag, split-brain, unbounded queues) that resonate with staff engineers and architects.
