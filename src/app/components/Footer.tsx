import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import SocialMediasIcons from "./SocialMediasIcons";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between w-full p-4 lg:px-12 bg-gradient-to-t from-dark to-transparent to-50% text-sm">
      <div className="flex flex-row space-x-12">
        <div className="flex flex-row space-x-2">
          <FaLocationArrow size={16} />
          <span>Paris, FR / Zurich, CH</span>
        </div>
        <SocialMediasIcons size={16} />
      </div>
      <span>© 2024 valentinlugandlopez.dev</span>
    </footer>
  );
};

export default Footer;
