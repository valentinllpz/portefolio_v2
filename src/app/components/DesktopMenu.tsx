import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className="flex flex-col space-y-12">{children}</div>;
};

export default Section;
