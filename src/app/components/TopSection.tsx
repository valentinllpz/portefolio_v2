import React from "react";
import SocialMediasIcons from "./SocialMediasIcons";

const TopSection: React.FC = () => {
  return (
    <div className="flex flex-col h-dvh px-12">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-integral text-2xl uppercase lg:max-w-screen-xl">
          I am Valentin Lugand Lopez, an experienced{" "}
          <span className="bg-gradient-to-r from-[#393BB0] via-[#199DE0] to-[#487ADA] bg-clip-text text-transparent animate-gradient-move">
           Full Stack Developer
          </span>{" "}
          open to new exciting opportunities.
        </h1>
      </div>
      <div className="self-end py-4">
        <SocialMediasIcons />
      </div>
    </div>
  );
};

export default TopSection;
