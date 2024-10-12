import React from "react";
import { SkillCloud } from "./SkillCloud";
import ResumeButton from "./ResumeButton";

const TopSection: React.FC = () => {
  return (
    <div className="flex flex-col h-screen py-12 -translate-y-8 md:-translate-y-0">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="absolute">
          <SkillCloud />
        </div>
        <h1 className="font-integral uppercase z-10 drop-shadow-xl text-[1.6rem] md:text-4xl xl:text-5xl 2xl:text-[3.3rem] lg:max-w-screen-2xl">
          <span className="leading-normal">
            I am Valentin Lugand Lopez, an experienced
            <span className="bg-gradient-to-r from-[#393BB0] via-[#199DE0] to-[#487ADA] bg-clip-text text-transparent">
              {" "}
              Full Stack Developer{" "}
            </span>
            open to new exciting opportunities.
          </span>
        </h1>
      </div>
      <ResumeButton className="self-center" />
    </div>
  );
};

export default TopSection;
