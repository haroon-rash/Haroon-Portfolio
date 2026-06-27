"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

export function About() {
  return (
    <section className="py-24 relative z-10 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-purple-500" />
              <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Robust Solutions</span> for Complex Problems.
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                As a Software Engineer and Java Backend Developer, I build robust enterprise and SaaS applications. My foundation is anchored in Java, Spring Boot, and microservices, supported by Kafka, Redis, Docker, PostgreSQL, MySQL, and Oracle. I am passionate about delivering production-grade, high-performance software.
              </p>
              <p>
                I focus on secure RESTful APIs and event-driven backend systems using Spring Security, JWT, and Domain-Driven Design (DDD). I actively contribute to performance optimization, system reliability, and backend stability in live production environments, delivering maintainable, high-impact solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Premium Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl opacity-70" />
            
            <GlassCard className="relative p-10 md:p-14 overflow-hidden border border-white/10 bg-[#06030B]/60 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Inner ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10 space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">Vision</h3>
                  <p className="text-white/60 leading-relaxed font-light text-lg">To build reliable, high-performance backend systems that power seamless and scalable software solutions.</p>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  <div className="absolute w-2 h-2 rounded-full bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">Current Focus</h3>
                  <p className="text-white/60 leading-relaxed font-light text-lg">Master Data Management (MDM) pipelines, asynchronous communication layers (Kafka), and Cloud-native microservices on AWS.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
