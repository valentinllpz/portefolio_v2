import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <div className="px-4 lg:px-12">
      <TopSection />
      <div className="flex flex-col items-center justify-center space-y-16">
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div> 
    </div>
  );
}
