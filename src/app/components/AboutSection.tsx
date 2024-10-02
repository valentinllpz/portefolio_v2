import React from "react";
import Section from "./Section";

const AboutSection: React.FC = () => {
  return (
    <Section
      title="About me"
      subtitle="Learn about my work as a developer and the personal interests that keep me inspired outside the office."
    >
      <div className="flex flex-col space-y-4">
        <p>
          I’m an experienced web and mobile developer with a natural affinity
          for UI and Frontend technologies, while maintaining strong
          capabilities in both Frontend and Backend development. I have a solid
          track record of building web applications from the ground up, taking
          projects through design, development, and deployment. I am passionate
          about creating efficient and visually appealing applications that
          prioritize a great user experience. I stand out for my problem-solving
          skills and ability to adapt quickly, and I also excel in tackling
          complex technical challenges. My diverse background, including a
          career shift after earning a Master’s in International Business,
          enhances my ability to understand product needs and collaborate
          effectively across teams. I’m always looking for new challenges to
          further develop my skills and am eager to learn new technologies.
          <br />
          <br />
          Outside of work, I’m a creative person who enjoys music, often
          spending time playing guitar and piano. Fitness is also a big part of
          my life, and I train consistently at the gym four to five times a week
          year-round. In my downtime, I like to unwind by hanging out with
          friends, playing video games, or catching up on series.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
