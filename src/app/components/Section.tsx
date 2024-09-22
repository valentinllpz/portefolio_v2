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
      className="flex flex-row items-start justify-center space-x-12 py-32 max-w-screen-2xl"
    >
      <div className="flex flex-1 flex-col justify-center sticky top-[45%] space-y-2 text-right border-r border-light/[0.8] pr-12 lg:w-[50%] xl:w-[40%]">
        <h2 className="text-2xl uppercase font-bold whitespace-nowrap font-integral">
          • {title}
        </h2>
        <h3 className="opacity-70">{subtitle}</h3>
      </div>
      <div className="lg:w-[50%] xl:w-[60%]">
        <div className="flex flex-col space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
