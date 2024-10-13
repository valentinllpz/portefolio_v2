import React from "react";
import FadeInDiv from "./FadeInDiv";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <div
      id={title.toLowerCase().replace(/\s/g, "")}
      className="flex flex-col gap-12 lg:flex-row lg:items-start lg:max-w-screen-2xl"
    >
      <FadeInDiv containerStyle="flex flex-col justify-center pl-4 space-y-2 border-l border-light/[0.8] lg:flex-1 lg:sticky lg:top-[45%] lg:text-right lg:border-r lg:border-l-0 lg:pr-12 lg:w-[50%] xl:w-[40%]">
        <h2 className="text-2xl lg:text-4xl uppercase font-bold whitespace-nowrap font-integral">
          <span className="font-geist font-black">•</span> {title}
        </h2>
        <h3 className="opacity-70">{subtitle}</h3>
      </FadeInDiv>
      <div className="lg:w-[50%] xl:w-[60%]">
        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
};

export default Section;
