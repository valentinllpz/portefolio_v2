import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps extends LinkProps {
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, ...props }) => {
  const pathname = usePathname();

  return (
    <Link className="group w-fit" {...props}>
      {text}
      {pathname === props.href ? (
        <span className="block translate-y-1 max-w-full lg:h-[1.5px] h-[2px] bg-white transition-all ease-out duration-150" />
      ) : (
        <span className="block translate-y-1 max-w-0 group-hover:max-w-full transition duration-300 lg:h-[1.5px] h-[2px] bg-white scale-x-0 group-hover:scale-x-100 group-hover:origin-center" />
      )}
    </Link>
  );
};

export default MenuItem;
