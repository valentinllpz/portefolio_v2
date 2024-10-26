import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import SocialMediasIcons from "./SocialMediasIcons";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-between w-full bg-gradient-to-t from-dark to-transparent to-50% text-sm p-4 lg:px-12">
      <div className="flex flex-row space-x-12 justify-between">
        <div className="flex flex-row space-x-2">
          <FaLocationArrow size={16} />
          <span>Paris, FR / Zurich, CH</span>
        </div>
      </div>
      <SocialMediasIcons size={16} />
    </footer>
  );
};

export default Footer;
