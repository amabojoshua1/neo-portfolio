import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-soft-cream">
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Experience />
        <Awards />
      </main>
    </div>
  );
}
