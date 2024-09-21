import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-between w-full px-4 lg:px-12 py-4 bg-gradient-to-t from-dark to-transparent to-50%">
      <div className="flex flex-row space-x-12">
        <div className="flex flex-row space-x-4">
          <FaLocationArrow size={20} />
          <span>Paris, FR / Zurich, CH</span>
        </div>
        <div className="flex flex-row space-x-4">
          <FaLinkedinIn size={20} />
          <FaGithub size={20} />
        </div>
      </div>
      <span>© 2024 valentinlugandlopez.dev</span>
    </footer>
  );
};

export default Footer;
