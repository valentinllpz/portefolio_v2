import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] px-4 lg:px-12">
      <div className="flex flex-col h-dvh items-center justify-center px-12">
        <h1 className="font-extrabold text-2xl uppercase lg:max-w-screen-xl">
          I am Valentin Lugand Lopez, an experienced{" "}
          <span className="bg-gradient-to-r from-[#393BB0] via-[#199DE0] to-[#487ADA] bg-clip-text text-transparent animate-gradient-move">
            Full Stack Developer
          </span>{" "}
          open to new exciting opportunities.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-16">
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
