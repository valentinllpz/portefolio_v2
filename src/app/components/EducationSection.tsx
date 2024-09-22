import React from "react";
import Section from "./Section";
import OrganizationBlock from "./OrganizationBlock";

const EducationSection: React.FC = () => {
  return (
    <Section
      title={"Education"}
      subtitle="With hands-on coding expertise from the 42 Paris, complemented by an entrepreneurship course at HEC and a Master’s in International Business, my education blends strategic thinking with technical expertise."
    >
      <OrganizationBlock
        iconPath="/images/42.png"
        role="Software Engineering"
        name="École 42 Paris"
        link="https://42.fr"
        startDate="November 2019"
        endDate="October 2022"
      >
        <p>
          42 is a prestigious school renowned for its selectivity and atypical
          educational model. Pedagogy is based on peer-to-peer learning,
          learning by doing and autonomous working, as well as the ability to
          find information to complete projects within the allotted time.
          <br />
          <br />
          <span className="font-bold">C Projects</span>
          <br />
          ↳ Minimalistic shell implementation (Bash reverse engineering)
          <br />
          ↳ 3D game based on Wolfenstein (parsing, error handling and
          raycasting)
          <br />
          <br />
          <span className="font-bold">C++ Projects</span>
          <br />
          ↳ HTTP server implementation (I/O multiplexing, request parsing,
          response generation in accordance with RFC, and CGI)
          <br />
          ↳ Recode our own C++ container templates (vector, map and stack)
          <br />
          <br />
          <span className="font-bold">Web Projects</span>
          <br />
          ↳ 2 DevOps / System Administration projects using Docker and
          Kubernetes
          <br />↳ Creation of a platform for playing Pong online with an
          integrated social network and chat interface (Typescript, NextJS,
          NestJS)
        </p>
      </OrganizationBlock>
      <OrganizationBlock
        iconPath="/images/hec.png"
        role="Digital Entrepreneurs Certificate"
        name="HEC Paris"
        link="https://www.hec.edu/"
        startDate="February 2021"
        endDate="May 2021"
      >
        <p>
          Awarded in collaboration with 42, this intensive 3-month certification
          program brought together students from the prestigious business school
          HEC, e-artsup, and 42 to collaborate on a startup project competition.
          The program focused on applying design thinking methodologies to drive
          innovation. Our team earned first place in the competition.
        </p>
      </OrganizationBlock>
      <OrganizationBlock
        iconPath="/images/univrouen.png"
        role="International Business"
        name="Université de Rouen"
        link="https://www.univ-rouen.fr/"
        startDate="September 2013"
        endDate="June 2018"
      >
        <p>
          Bachelor&apos;s and Master&apos;s degrees in Foreign Languages Applied
          to International Business, both completed with honors. I spent my
          third Bachelor&apos;s year on an Erasmus exchange in Granada, and my
          first Master’s year in Manchester which enriched my cultural and
          academic experience.
        </p>
      </OrganizationBlock>
    </Section>
  );
};

export default EducationSection;
