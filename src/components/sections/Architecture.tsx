"use client";

import { motion } from "framer-motion";
import { 
  Server, Database, Cloud, Webhook, ShieldCheck, Box, Workflow, Network,
  Code2, GitBranch, Layers, Activity, Code, Wrench, Send, Rocket 
} from "lucide-react";

export function Architecture() {
  const nodes = [
    { id: 'client', icon: Webhook, label: 'Client / React', color: 'text-cyan-400', bg: 'bg-cyan-500/10', hoverBorder: 'group-hover:border-cyan-500/50' },
    { id: 'auth', icon: ShieldCheck, label: 'Auth Service', color: 'text-yellow-400', bg: 'bg-yellow-500/10', hoverBorder: 'group-hover:border-yellow-500/50' },
    { id: 'java', icon: Code2, label: 'Java', color: 'text-orange-500', bg: 'bg-orange-500/10', hoverBorder: 'group-hover:border-orange-500/50' },
    { id: 'springboot', icon: Server, label: 'Spring Boot', color: 'text-green-500', bg: 'bg-green-500/10', hoverBorder: 'group-hover:border-green-500/50' },
    { id: 'microservices', icon: Network, label: 'Microservices', color: 'text-blue-500', bg: 'bg-blue-500/10', hoverBorder: 'group-hover:border-blue-500/50' },
    { id: 'docker', icon: Box, label: 'Docker', color: 'text-blue-400', bg: 'bg-blue-400/10', hoverBorder: 'group-hover:border-blue-400/50' },
    { id: 'aws', icon: Cloud, label: 'AWS', color: 'text-orange-400', bg: 'bg-orange-400/10', hoverBorder: 'group-hover:border-orange-400/50' },
    { id: 'restapis', icon: Webhook, label: 'REST APIs', color: 'text-cyan-400', bg: 'bg-cyan-400/10', hoverBorder: 'group-hover:border-cyan-400/50' },
    { id: 'git', icon: GitBranch, label: 'Git', color: 'text-red-500', bg: 'bg-red-500/10', hoverBorder: 'group-hover:border-red-500/50' },
    { id: 'kafka', icon: Workflow, label: 'Kafka', color: 'text-purple-400', bg: 'bg-purple-500/10', hoverBorder: 'group-hover:border-purple-500/50' },
    { id: 'springmvc', icon: Layers, label: 'Spring MVC', color: 'text-green-400', bg: 'bg-green-400/10', hoverBorder: 'group-hover:border-green-400/50' },
    { id: 'springsecurity', icon: ShieldCheck, label: 'Spring Security', color: 'text-emerald-400', bg: 'bg-emerald-400/10', hoverBorder: 'group-hover:border-emerald-400/50' },
    { id: 'apigateway', icon: Network, label: 'API Gateway', color: 'text-blue-400', bg: 'bg-blue-500/10', hoverBorder: 'group-hover:border-blue-500/50' },
    { id: 'webflux', icon: Activity, label: 'WebFlux', color: 'text-green-300', bg: 'bg-green-300/10', hoverBorder: 'group-hover:border-green-300/50' },
    { id: 'typescript', icon: Code, label: 'TypeScript', color: 'text-blue-600', bg: 'bg-blue-600/10', hoverBorder: 'group-hover:border-blue-600/50' },
    { id: 'jpa', icon: Database, label: 'JPA', color: 'text-indigo-400', bg: 'bg-indigo-400/10', hoverBorder: 'group-hover:border-indigo-400/50' },
    { id: 'maven', icon: Wrench, label: 'Maven', color: 'text-red-400', bg: 'bg-red-400/10', hoverBorder: 'group-hover:border-red-400/50' },
    { id: 'postman', icon: Send, label: 'Postman', color: 'text-orange-500', bg: 'bg-orange-500/10', hoverBorder: 'group-hover:border-orange-500/50' },
    { id: 'jenkins', icon: Rocket, label: 'Jenkins', color: 'text-blue-500', bg: 'bg-blue-500/10', hoverBorder: 'group-hover:border-blue-500/50' },
    { id: 'redis', icon: Box, label: 'Redis', color: 'text-red-500', bg: 'bg-red-500/10', hoverBorder: 'group-hover:border-red-500/50' },
    { id: 'postgresql', icon: Database, label: 'PostgreSQL', color: 'text-indigo-500', bg: 'bg-indigo-500/10', hoverBorder: 'group-hover:border-indigo-500/50' },
    { id: 'mysql', icon: Database, label: 'MySQL', color: 'text-blue-400', bg: 'bg-blue-400/10', hoverBorder: 'group-hover:border-blue-400/50' },
  ];

  return (
    <section className="py-24 relative z-10 bg-background overflow-hidden" id="architecture">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">System Design & Skills</span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Architecture & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60"
          >
            Designing fault-tolerant, scalable, and highly available microservices ecosystems using a comprehensive tech stack.
          </motion.p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[550px] border border-white/5 rounded-3xl bg-white/[0.02] p-6 md:p-10 backdrop-blur-sm flex flex-col overflow-hidden">
          
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_100%)] pointer-events-none" />

          {/* Scrollable Container */}
          <div data-lenis-prevent="true" className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-4 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12 place-items-center">
              {nodes.map((node, i) => (
                <Node key={node.id} node={node} delay={0.05 * (i % 10)} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Node({ node, delay, className = "" }: { node: any; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring" as const }}
      className={`flex flex-col items-center gap-3 relative group w-full ${className}`}
    >
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${node.bg} border border-white/10 flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${node.hoverBorder}`}>
        <node.icon size={32} className={node.color} />
      </div>
      <span className="text-sm font-medium text-white/70 whitespace-nowrap">{node.label}</span>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 -z-10 bg-white/5 rounded-2xl animate-ping opacity-20 [animation-duration:3s] pointer-events-none" />
    </motion.div>
  );
}
