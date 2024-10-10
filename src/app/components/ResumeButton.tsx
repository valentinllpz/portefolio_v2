import React from "react";

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className }) => {
  const baseClasses =
    "px-4 py-2 rounded-full bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-light transition duration-200 ease-in-out uppercase text-sm";

  return (
    <a
      className={`${baseClasses} ${className}`}
      href="/downloads/vlugandlopezCV.pdf"
      download
    >
      Resume
    </a>
  );
};

export default ResumeButton;
