import cn from "classnames";
import MenuItem from "./MenuItem";
import ResumeButton from "./ResumeButton";

interface MobileMenuProps {
  setIsVisible: (isVisible: boolean) => void;
  isVisible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isVisible, setIsVisible }) => (
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
      <MenuItem href="/#aboutme" onClick={() => setIsVisible(false)}>
        About me
      </MenuItem>
      <MenuItem href="/#experience" onClick={() => setIsVisible(false)}>
        Experience
      </MenuItem>
      <MenuItem href="/#education" onClick={() => setIsVisible(false)}>
        Education
      </MenuItem>
      <MenuItem href="/#contact" onClick={() => setIsVisible(false)}>
        Contact
      </MenuItem>
      <ResumeButton />
    </div>
  </div>
);

export default MobileMenu;
