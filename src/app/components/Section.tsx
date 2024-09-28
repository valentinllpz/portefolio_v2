import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <div
      id={title.toLowerCase().replace(/\s/g, "")}
      className="flex flex-col space-y-12 py-12 lg:flex-row lg:items-start lg:justify-center lg:space-x-12 lg:py-32 lg:max-w-screen-2xl"
    >
      <div className="flex flex-col justify-center top-16 pl-4 space-y-2 border-l border-light/[0.8] lg:flex-1 lg:sticky lg:top-[45%] lg:text-right lg:border-r lg:border-l-0 lg:pr-12 lg:w-[50%] xl:w-[40%]">
        <h2 className="text-xl uppercase font-bold whitespace-nowrap font-integral">
          <span className="font-geist text-3xl font-black">•</span> {title}
        </h2>
        <h3 className="opacity-70">{subtitle}</h3>
      </div>
      <div className="lg:w-[50%] xl:w-[60%]">
        <div className="flex flex-col space-y-12">{children}</div>
      </div>
    </div>
  );
};

export default Section;
