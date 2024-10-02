import React from "react";
import Section from "./Section";
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <Section
      title="Contact"
      subtitle="I’m open to new opportunities in Paris, Zurich, or remote. If my profile caught your interest, feel free to reach out with any questions or enquiries, and I’ll respond promptly."
    >
      <div className="flex flex-1 justify-center items-center xl:px-32">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col gap-4 items-center justify-center lg:flex-row lg:gap-8">
            <Image
              src="/images/valentinlugandlopez.png"
              alt="Valentin Lugand Lopez"
              width={130}
              height={130}
              className="object-cover"
            />
            <div className="flex flex-col font-integral font-black text-xl xl:text-2xl uppercase">
              Valentin Lugand Lopez
              <span className="opacity-70">Full Stack Developer</span>
            </div>
          </div>
          <a
            href="mailto:hello@valentinlugandlopez.dev"
            className="text-2xl lg:text-3xl xl:text-4xl"
          >
            hello@valentinlugandlopez.dev
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
