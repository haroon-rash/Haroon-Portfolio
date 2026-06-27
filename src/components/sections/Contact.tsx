"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode } from "@tabler/icons-react";

export function Contact() {
  return (
    <section className="py-24 relative z-10 bg-background" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <GlassCard className="relative overflow-hidden border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent text-center py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Something<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Extraordinary.</span></h2>
            <p className="text-lg text-white/60 max-w-lg mx-auto mb-10">
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <MagneticButton className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105">
                <a href="mailto:haroonurrasheed1212@gmail.com" className="flex items-center gap-2 font-medium">
                  <Mail size={20} /> Say Hello
                </a>
              </MagneticButton>

              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors group cursor-pointer" onClick={() => navigator.clipboard.writeText('haroonurrasheed1212@gmail.com')}>
                <span className="text-white/50 group-hover:text-blue-400 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-white/70 font-mono text-sm tracking-wide select-all group-hover:text-white transition-colors">
                  haroonurrasheed1212@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} M Haroon Ur Rasheed. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/haroon-rash" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><IconBrandGithub size={20} /></a>
          <a href="https://leetcode.com/u/M_HaroonUr_Rasheed" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><IconBrandLeetcode size={20} /></a>
          <a href="https://www.linkedin.com/in/haroon-ur-rasheed-615119211/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><IconBrandLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
