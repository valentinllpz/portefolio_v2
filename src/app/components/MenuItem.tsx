import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface MenuItemProps extends LinkProps {
  children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  return (
    <Link className="relative group" {...props}>
      {children}
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
    </Link>
  );
};

export default MenuItem;
