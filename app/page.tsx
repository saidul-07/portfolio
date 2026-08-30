import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Learning } from "@/components/sections/Learning";
import { Education } from "@/components/sections/Education";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Learning & Exploration Section */}
      <Learning />

      {/* Education Section */}
      <Education />

      {/* Leadership & Activities Section */}
      <Leadership />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
