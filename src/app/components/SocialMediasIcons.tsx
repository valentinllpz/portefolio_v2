import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const SocialMediasIcons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Link href="https://www.linkedin.com/in/vlugandlopez/">
        <FaLinkedinIn size={20} />
      </Link>
      <Link href="https://github.com/valentinllpz">
        <FaGithub size={20} />
      </Link>
    </div>
  );
};

export default SocialMediasIcons;
