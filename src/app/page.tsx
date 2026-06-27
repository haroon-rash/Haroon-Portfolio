import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Dashboard } from "@/components/sections/Dashboard";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      <Hero />
      <About />
      <Dashboard />
      <Experience />
      <Projects />
      <Architecture />
      <Contact />
      <Footer />
    </main>
  );
}
