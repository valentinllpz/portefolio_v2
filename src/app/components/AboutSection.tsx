import React from "react";
import Section from "./Section";

const AboutSection: React.FC = () => {
  return (
    <Section
      title="About me"
      subtitle="Read about my expertise as a developer at work and get to know the personal interests that keep me inspired outside of the office."
    >
      <div className="flex flex-col space-y-4">
        <span className="font-bold uppercase">→ On the professional side</span>
        <p>
          I am an experienced web and mobile developer with a natural affinity
          for Frontend technologies, while maintaining strong capabilities in
          both Frontend and Backend development. I have experience in building
          web applications from scratch, from the design to the deployment. I am
          passionate about creating beautiful and efficient applications that
          provide a great user experience. I stand out for my ability to solve
          complex technical problems and adapt quickly to a new environment. My
          versatile background, which includes a career change after a Masters
          in International Business, strengthens my ability to identify product
          needs and collaborate effectively. I am looking for new challenges to
          continue to develop my skills, and I am highly motivated by the idea
          of training in new technologies.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <span className="font-bold uppercase">→ On the personal side</span>
        <ul>
          <li>
            Creativity - I spend a lot of my free time listening to music, or
            playing guitar and piano.
          </li>
          <li>
            Health & fitness - I train at the gym 4 ~ 5 times per week all year
            long.
          </li>
          <li>
            Leisures - I enjoy spending time with my friends as well as some
            time alone playing video games or watching series.
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default AboutSection;
