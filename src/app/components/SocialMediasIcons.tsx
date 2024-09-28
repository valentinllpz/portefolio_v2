import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

interface SocialMediasIconsProps {
  size?: number;
}

const SocialMediasIcons: React.FC<SocialMediasIconsProps> = ({ size = 20 }) => {
  return (
    <div className="flex flex-row space-x-4">
      <Link href="https://www.linkedin.com/in/vlugandlopez/">
        <FaLinkedinIn size={size} />
      </Link>
      <Link href="https://github.com/valentinllpz">
        <FaGithub size={size} />
      </Link>
    </div>
  );
};

export default SocialMediasIcons;
