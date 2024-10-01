import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 space-y-32 pb-32 lg:px-12 lg:space-y-64 lg:pb-64">
      <TopSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
