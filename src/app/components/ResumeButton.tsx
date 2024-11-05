import React from "react";

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className }) => {
  return (
    <a
      className={`${className} transition duration-200 ease-in-out self-center group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-primary-blue uppercase`}
      href="/downloads/vlugandlopezCV.pdf"
      download
    >
      <div className="inline-flex h-10 translate-y-0 items-center justify-center px-6 text-primary-blue transition duration-500 group-hover:-translate-y-[150%]">
        Resume
      </div>
      <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
        <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-primary-blue transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10 text-light">Resume</span>
      </div>
    </a>
  );
};

export default ResumeButton;
