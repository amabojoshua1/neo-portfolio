import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amabo Joshua",
    url: "https://amabojoshua.com",
    image: "https://amabojoshua.com/me.jpg",
    email: "amabojoshua@gmail.com",
    jobTitle: "Computer Engineer, Backend Developer, and Product Manager",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    sameAs: [
      "https://github.com/amabojoshua1",
      "https://linkedin.com/in/amabo-joshua",
    ],
    knowsAbout: [
      "Software architecture",
      "Backend development",
      "Cloud infrastructure",
      "Product management",
      "Mobile application development",
    ],
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-soft-cream">
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
