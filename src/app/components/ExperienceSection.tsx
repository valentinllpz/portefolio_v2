import React from "react";
import Section from "./Section";
import OrganizationBlock from "./OrganizationBlock";

const ExperienceSection: React.FC = () => {
  return (
    <Section
      title="Experience"
      subtitle="Combining my background in sales and full stack development, I leverage technical skills and client-focused insights to deliver well-rounded solutions and collaborate effectively across teams."
    >
      <OrganizationBlock
        iconPath="/images/motto.png"
        role="Full Stack Developer"
        name="Ridemotto"
        link="https://ridemotto.com"
        startDate="November 2022"
        endDate="Today"
      >
        <p>
          My mission at Motto is to maintain and develop new features for the
          website, mobile application, operations management platform and API as
          part of a small agile technical team with shared responsibilities.
          <br />I work with React Native, TypeScript, and Tailwind CSS for the
          mobile app. For the website, I use NextJS, React, TypeScript, Tailwind
          CSS, and Headless CMS Sanity. The API is built using Ruby on Rails.
        </p>
      </OrganizationBlock>
      <OrganizationBlock
        iconPath="/images/simondesign.png"
        role="Full Stack Developer (Freelance)"
        name="Simon Design"
        link="https://simondesign.studio"
        startDate="September 2023"
        endDate="December 2023"
      >
        <p>
          I designed and developed a portfolio for an interior architect and TV
          set designer based on given assets. This was my first freelance
          project and I worked on it during my free time, in addition to my job
          at Motto. I used Figma to first create the website’s design then
          developed it using NextJS, React, Typescript, Tailwind CSS.
        </p>
      </OrganizationBlock>
      <OrganizationBlock
        iconPath="/images/sales.png"
        role="Sales"
        name="EF Education, Noova, Rentalcars UK"
        startDate="2017"
        endDate="2018"
      >
        <p>
          Prior to my career transition, I had 3 professional experiences in
          sales lasting 6 months each. These positions were focused on sales and
          business development.
        </p>
      </OrganizationBlock>
    </Section>
  );
};

export default ExperienceSection;
