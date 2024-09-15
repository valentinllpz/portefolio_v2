import cn from "classnames";
import MenuItem from "./MenuItem";

interface MobileMenuProps {
  isVisible: boolean;
  onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isVisible, onClick }) => (
  <div
    className={cn(
      "fixed z-20 flex flex-col bg-black bg-opacity-90 backdrop-blur-xl bottom-full left-0 right-0 w-full h-full transition-all ease-in-out duration-500",
      {
        "visible translate-y-full ease-out": isVisible,
        "invisible ": !isVisible,
      }
    )}
  >
    <div className="flex flex-1 flex-col items-center justify-center space-y-20 p-32 uppercase font-sohneBreit font-medium text-md">
      <div className="flex flex-col items-center justify-center space-y-8">
        <MenuItem onClick={onClick} href="/tv-set" text="TV Set" />
        <MenuItem onClick={onClick} href="/interior" text="Interior" />
        <MenuItem onClick={onClick} href="/furniture" text="Furniture" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <MenuItem onClick={onClick} href="/about" text="About" />
        <MenuItem onClick={onClick} href="/contact" text="Contact" />
      </div>
    </div>
  </div>
);

export default MobileMenu;
