"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

import { Server, Database, Code2, Rocket, Lock, GitBranch, TerminalSquare } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const metrics = [
  { id: 1, title: "Microservices Built", value: 12, icon: Server, color: "text-blue-400" },
  { id: 2, title: "REST APIs Developed", value: 20, icon: TerminalSquare, color: "text-purple-400" },
  { id: 3, title: "Production Deployments", value: 4, icon: Rocket, color: "text-green-400" },
  { id: 4, title: "Years Experience", value: 2, icon: Code2, color: "text-cyan-400" },
  { id: 5, title: "Github Repos", value: 23, icon: IconBrandGithub, color: "text-indigo-400" },
  { id: 6, title: "Databases Managed", value: 4, icon: Database, color: "text-orange-400" },
  { id: 7, title: "CI/CD Pipelines", value: 8, icon: GitBranch, color: "text-pink-400" },
  { id: 8, title: "Auth Systems (JWT)", value: 7, icon: Lock, color: "text-yellow-400" },
];

export function Dashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <section className="py-24 relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5" id="dashboard">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Analytics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Achievement Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl"
          >
            A high-level overview of my technical impact and engineering footprint across various enterprise and freelance projects.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric) => (
            <motion.div key={metric.id} variants={item} className="h-full">
              <GlassCard className="h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-xl bg-white/5 ${metric.color} border border-white/10`}>
                    <metric.icon size={24} />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
                    {metric.value}
                    <span className={metric.color}>+</span>
                  </div>
                  <h3 className="text-sm font-medium text-white/60">{metric.title}</h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
