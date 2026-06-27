"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    id: 1,
    title: "AutoApply AI",
    description: "Production-grade automated job application platform featuring AI-driven HR email discovery, file extraction, and intelligent campaign orchestration. Built with a resilient Spring Boot backend, it offers a real-time Control Center with WebSocket live monitoring, secure JWT authentication, and advanced queue management complete with drag-and-drop reordering, dynamic rate limiting, and intelligent retry protocols. Successfully reduces manual job application effort by ~90% by entirely eliminating repetitive manual workflows.",
    tech: ["Spring Boot 3.2", "Java 17", "PostgreSQL", "WebSockets", "React", "Docker", "JWT Auth", "SortableJS"],
    links: { live: "https://autoapply.online/", github: "#" },
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "MentorHub",
    description: "Comprehensive full-stack cross-platform tutoring ecosystem connecting students and tutors at scale. Leveraging a polyglot microservices architecture, it integrates a Spring Boot Authentication Service with a strict .NET Clean Architecture user management backend and an Ocelot API Gateway. Features intelligent tutor matching, resilient asynchronous event messaging powered by RabbitMQ, automated CI/CD pipelines via GitHub Actions, and a highly responsive React/Vite frontend.",
    tech: [".NET Clean Arch", "Spring Boot", "RabbitMQ", "Ocelot Gateway", "React", "PostgreSQL", "Docker Compose", "Vite"],
    links: { live: "#", github: "https://github.com/haroon-rash/MentorHub" },
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "QMEETX – Smart Queue",
    description: "High-throughput SaaS platform orchestrating real-time appointments, bookings, and multi-tenant queue coordination for enterprise businesses. Engineered on a highly scalable Java Spring Boot microservices architecture, it features dynamic API Gateway routing, OTP-secured authentication, shared utilities modules, and high-performance asynchronous workflows utilizing PostgreSQL Full Text Search (FTS) with pg_trgm, Redis caching, and live WebSockets.",
    tech: ["Spring Boot", "PostgreSQL FTS", "Redis", "Kafka", "WebSockets", "API Gateway", "OTP Auth", "Microservices"],
    links: { live: "#", github: "https://github.com/haroon-rash/QMEETX" },
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "SmartCare HMS",
    description: "Enterprise-grade, offline-first Hospital Management System driven by a robust 12-service architecture utilizing strict Domain-Driven Design (DDD) principles. It effortlessly handles secure patient management, dynamic doctor scheduling, pharmacy inventory, lab tests, and complex billing workflows. Features resilient event-driven communication via Apache Kafka, centralized routing through Spring Cloud Gateway, dynamic service discovery with Netflix Eureka, and full Docker containerization.",
    tech: ["Spring Cloud", "Kafka", "Eureka", "Docker", "Java 17", "DDD", "Microservices", "PostgreSQL"],
    links: { live: "#", github: "https://github.com/haroon-rash/smartcare" },
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

export function Projects() {
  return (
    <section className="py-24 relative z-10 bg-background/50 backdrop-blur-3xl" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-cyan-500" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard 
                className="h-full flex flex-col group overflow-hidden border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  const targetUrl = project.links.live !== "#" ? project.links.live : project.links.github;
                  if (targetUrl !== "#") window.open(targetUrl, "_blank");
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.links.github !== "#" && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors p-1">
                          <IconBrandGithub size={20} />
                        </a>
                      )}
                      {project.links.live !== "#" && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="text-white/50 hover:text-cyan-400 transition-colors p-1">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-white/80 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
