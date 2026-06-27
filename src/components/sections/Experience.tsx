"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Java Spring Boot Engineer",
    company: "BrickxAI",
    location: "Lahore, Pakistan",
    period: "Mar 2026 -- Present",
    description: [
      "Engineered Spring Boot-based Master Data Management (MDM) pipelines, enforcing strict data governance and achieving 100% synchronized data integrity across financial microservices.",
      "Designed and optimized fintech-grade backend systems in Java for high-throughput financial transactions, implementing ACID-compliant processing and audit-ready event sourcing."
    ],
  },
  {
    id: 2,
    role: "Freelance Java Backend Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Feb 2025 -- Present",
    description: [
      "Designed and deployed scalable Spring Boot-based SaaS architectures for global clients, implementing JWT-based authentication and Role-Based Access Control (RBAC).",
      "Accelerated application responsiveness and fault tolerance by architecting asynchronous, event-driven communication layers using Apache Kafka."
    ],
  }
];

export function Experience() {
  return (
    <section className="py-24 relative z-10 bg-background" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Career Journey
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-blue-500/20 border border-blue-500/50 backdrop-blur-md text-blue-400">
                <Briefcase size={16} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-lg text-blue-400 font-medium">{exp.company} <span className="text-white/40 text-sm ml-2 font-normal">{exp.location}</span></p>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm whitespace-nowrap h-fit">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-white/70 leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2.5 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
