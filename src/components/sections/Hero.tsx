"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { MagneticButton } from "../ui/MagneticButton";
import { Download, Terminal, Activity } from "lucide-react";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandLeetcode, IconMailFilled } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#030303]">
      {/* Ultra-Dark Premium Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08)_0%,transparent_40%)]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 max-w-7xl mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md w-fit shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90">
              <AnimatedText text="M Haroon" />
              <AnimatedText text="Ur Rasheed" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white/80" delay={0.2} />
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed font-light">
              Software Engineer specializing in robust enterprise architectures, resilient Spring Boot microservices, and sophisticated full-stack ecosystems.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#projects">
                <MagneticButton className="bg-blue-600/90 text-white hover:bg-blue-600 border border-blue-500/50 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <span className="flex items-center gap-2 font-medium">
                    <Terminal size={18} /> View Projects
                  </span>
                </MagneticButton>
              </a>
              <a href="https://drive.google.com/file/d/1KgdaxGFJeq1l8cSBuV73vNEqzaOED60Z/view?usp=sharing" target="_blank" rel="noreferrer">
                <MagneticButton className="bg-transparent border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Download size={18} /> Resume
                  </span>
                </MagneticButton>
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a href="https://github.com/haroon-rash" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#333333]/20 hover:bg-[#333333] transition-all duration-300 border border-white/5 text-white/90 hover:text-white shadow-lg">
                <IconBrandGithubFilled size={22} />
              </a>
              <a href="https://leetcode.com/u/M_HaroonUr_Rasheed" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#FFA116]/10 hover:bg-[#FFA116]/20 transition-all duration-300 border border-[#FFA116]/20 text-[#FFA116] shadow-lg">
                <IconBrandLeetcode size={22} stroke={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/haroon-ur-rasheed-615119211/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-all duration-300 border border-[#0077B5]/20 text-[#0077B5] shadow-lg">
                <IconBrandLinkedinFilled size={22} />
              </a>
              <a href="mailto:haroonurrasheed1212@gmail.com" className="p-2.5 rounded-full bg-[#EA4335]/10 hover:bg-[#EA4335]/20 transition-all duration-300 border border-[#EA4335]/20 text-[#EA4335] shadow-lg">
                <IconMailFilled size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-full max-w-md mx-auto"
          >
            {/* Minimalist Developer ID Card */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center">
                      <Terminal size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white/90 font-medium tracking-wide">Software Engineer</h3>
                      <p className="text-white/40 text-xs mt-0.5">Lahore, PK</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Online</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#080808]/50 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Activity size={14} className="text-white/40" />
                      <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Primary Focus</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Building fault-tolerant microservices, reliable data pipelines, and robust backend ecosystems.
                    </p>
                  </div>

                  <div data-lenis-prevent="true" className="flex flex-col gap-3 max-h-[240px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                    {[
                      { name: "Java", level: "Expert", width: "95%", textColor: "text-blue-400", bgColor: "bg-blue-500", shadow: "rgba(59,130,246,0.8)", delay: 0.8 },
                      { name: "Spring Boot", level: "Advanced", width: "90%", textColor: "text-purple-400", bgColor: "bg-purple-500", shadow: "rgba(168,85,247,0.8)", delay: 1.0 },
                      { name: "Microservices", level: "Expert", width: "95%", textColor: "text-emerald-400", bgColor: "bg-emerald-500", shadow: "rgba(16,185,129,0.8)", delay: 1.2 },
                      { name: "System Architecture", level: "Expert", width: "90%", textColor: "text-cyan-400", bgColor: "bg-cyan-500", shadow: "rgba(6,182,212,0.8)", delay: 1.4 },
                      { name: "Apache Kafka", level: "Advanced", width: "85%", textColor: "text-pink-400", bgColor: "bg-pink-500", shadow: "rgba(236,72,153,0.8)", delay: 1.6 },
                      { name: "Redis", level: "Advanced", width: "80%", textColor: "text-red-400", bgColor: "bg-red-500", shadow: "rgba(239,68,68,0.8)", delay: 1.8 },
                      { name: "PostgreSQL", level: "Advanced", width: "85%", textColor: "text-indigo-400", bgColor: "bg-indigo-500", shadow: "rgba(99,102,241,0.8)", delay: 2.0 },
                      { name: "AWS Deploy", level: "Advanced", width: "80%", textColor: "text-orange-400", bgColor: "bg-orange-500", shadow: "rgba(249,115,22,0.8)", delay: 2.2 },
                    ].map((skill, index) => (
                      <div key={index} className="p-4 rounded-xl bg-[#080808]/50 border border-white/5 shrink-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/80">{skill.name}</span>
                          <span className={`text-xs font-medium ${skill.textColor}`}>{skill.level}</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: skill.width }} 
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: skill.delay }} 
                            className={`h-full ${skill.bgColor}`}
                            style={{ boxShadow: `0 0 10px ${skill.shadow}` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {/* Simulated small tech dots/icons */}
                    <div className="w-6 h-6 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-[8px] text-white/50">JS</div>
                    <div className="w-6 h-6 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-[8px] text-white/50">TS</div>
                    <div className="w-6 h-6 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-[8px] text-white/50">DB</div>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">ID: HR-2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
