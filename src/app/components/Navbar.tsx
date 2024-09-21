"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  return (
    <nav className="fixed flex justify-between items-center w-full z-20 h-16 px-4 lg:px-12 bg-gradient-to-b from-dark to-transparent">
      <Link
        href="/"
        onClick={() => setOpenMobileMenu(false)}
        className="flex items-center space-x-4 z-30"
      >
        <Image
          src="/images/logo.png"
          alt="Valentin Lugand Lopez logo"
          height={32}
          width={32}
        />
        <span className="uppercase font-bold">Valentin Lugand Lopez</span>
      </Link>
      <div className="hidden lg:flex flex-row space-x-16 uppercase">
        <Link href="/#aboutme">About me</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#education">Education</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <Button className="hidden lg:flex">Resume</Button>
      <BurgerButton
        isOpen={openMobileMenu}
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
        className="lg:hidden z-30"
      />
      <MobileMenu
        isVisible={openMobileMenu}
        onClick={() => {
          setOpenMobileMenu(false);
        }}
      />
    </nav>
  );
};

export default Navbar;