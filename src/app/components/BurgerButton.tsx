import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, ...props }) => {
  const lineStyle =
    "block w-[26px] h-[2px] m-[5px] bg-light transition ease transform duration-300";

  return (
    <button {...props} aria-label="menu">
      <span
        className={cn(lineStyle, {
          "transform translate-y-[7px] rotate-45": isOpen === true,
        })}
      />
      <span
        className={cn(lineStyle, {
          "opacity-0": isOpen === true,
        })}
      />
      <span
        className={cn(lineStyle, {
          "transform -translate-y-[7px] -rotate-45": isOpen === true,
        })}
      />{" "}
    </button>
  );
};

export default BurgerButton;
