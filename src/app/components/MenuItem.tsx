import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface MenuItemProps extends LinkProps {
  children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  return (
    <Link
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-light 
    after:bg-light-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
      {...props}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
