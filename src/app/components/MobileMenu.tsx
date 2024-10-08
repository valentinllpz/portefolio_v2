import cn from "classnames";
import MenuItem from "./MenuItem";
import ResumeButton from "./ResumeButton";

interface MobileMenuProps {
  isVisible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isVisible }) => (
  <div
    className={cn(
      "fixed z-20 flex flex-col bg-black bg-opacity-90 backdrop-blur-xl bottom-full left-0 right-0 w-full h-full transition-all ease-in-out duration-500",
      {
        "visible translate-y-full ease-out": isVisible,
        "invisible ": !isVisible,
      }
    )}
  >
    <div className="flex flex-1 flex-col items-center justify-center space-y-8 uppercase text-lg">
      <MenuItem href="/#aboutme">About me</MenuItem>
      <MenuItem href="/#experience">Experience</MenuItem>
      <MenuItem href="/#education">Education</MenuItem>
      <MenuItem href="/#contact">Contact</MenuItem>
      <ResumeButton className="uppercase text-sm absolute bottom-12" />
    </div>
  </div>
);

export default MobileMenu;
