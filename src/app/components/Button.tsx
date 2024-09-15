import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const baseClasses =
    "px-4 py-2 rounded-full bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-light";

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
