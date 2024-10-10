"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import MenuItem from "./MenuItem";
import ResumeButton from "./ResumeButton";

const Navbar: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const topSectionHeight = window.innerHeight;
      if (scrollY > topSectionHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed flex justify-between items-center w-full z-20 h-16 px-4 lg:px-12 bg-gradient-to-b from-dark to-transparent">
      <Link
        href="/"
        onClick={() => setOpenMobileMenu(false)}
        className="flex items-center space-x-2 lg:space-x-4 z-30"
      >
        <Image
          src="/images/logo.png"
          alt="Valentin Lugand Lopez logo"
          height={20}
          width={20}
        />
        <span className="uppercase font-integral text-sm lg:text-base">
          Valentin Lugand Lopez
        </span>
      </Link>
      <div className="hidden lg:flex flex-row space-x-12 uppercase items-center text-sm">
        <MenuItem href="/#aboutme">About me</MenuItem>
        <MenuItem href="/#experience">Experience</MenuItem>
        <MenuItem href="/#education">Education</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
        {showButton ? (
          <ResumeButton className="lg:flex" />
        ) : (
          <ResumeButton className="lg:flex opacity-0 cursor-default" />
        )}
      </div>
      <BurgerButton
        isOpen={openMobileMenu}
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
        className="lg:hidden z-30"
      />
      <MobileMenu isVisible={openMobileMenu} />
    </nav>
  );
};

export default Navbar;
