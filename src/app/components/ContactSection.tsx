import React from "react";
import Section from "./Section";
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <Section
      title="Contact"
      subtitle="I am open to new roles in Paris, Zurich and remote. If my profile sparked your interest, feel free to reach out with any questions or inquiries and I will get back to you quickly."
    >
      <div className="flex flex-1 justify-center items-center lg:px-32">
        <div className="flex flex-col space-y-12 lg:overflow-hidden ">
          <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-8">
            <Image
              src="/images/valentinlugandlopez.png"
              alt="Valentin Lugand Lopez"
              width={130}
              height={130}
              className="object-cover"
            />
            <div className="flex flex-col font-integral font-black text-2xl uppercase">
              Valentin Lugand Lopez
              <span className="opacity-70">Full Stack Developer</span>
            </div>
          </div>
          <span className="text-2xl lg:text-4xl">
            hello@valentinlugandlopez.dev
          </span>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
