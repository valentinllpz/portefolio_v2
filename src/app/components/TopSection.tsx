import React from "react";
import SocialMediasIcons from "./SocialMediasIcons";
import { SkillCloud } from "./SkillCloud";

const TopSection: React.FC = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="absolute">
          <SkillCloud />
        </div>
        <h1 className="font-integral text-2xl lg:text-5xl leading-normal uppercase z-10 lg:max-w-screen-2xl">
          I am Valentin Lugand Lopez, an experienced
          <span className="bg-gradient-to-r from-[#393BB0] via-[#199DE0] to-[#487ADA] bg-clip-text text-transparent">
            {" "}
            Full Stack Developer{" "}
          </span>
          open to new exciting opportunities.
        </h1>
      </div>
      <div className="absolute bottom-4 right-2">
        <SocialMediasIcons />
      </div>
    </div>
  );
};

export default TopSection;
