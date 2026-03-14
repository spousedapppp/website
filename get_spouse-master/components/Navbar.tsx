"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "/assets/logo.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Chat from "./Chat";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "next-i18next";
const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const navLink = [
    { name: t("Home"), href: "/" },
    { name: t("AboutUs2"), href: "about-us" },
    { name: t("OurApp"), href: "our-app" },
    { name: t("FAQs"), href: "faqs" },
  ];
  useEffect(() => {
    if (showMenu || showChat) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMenu, showChat]);
  const pathname = usePathname();
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  return (
    <nav className={`  absolute top-0 w-full left-0  bg-primary text-white  `}>
      <div className="py-4 flex items-center justify-between relative z-50  max-screen ">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} alt="" width={48} className="w-40" />
        </Link>
        <ul className="flex items-center gap-4 xl:gap-10 2xl:gap-12 lg:text-xl max-lg:hidden">
          {navLink.map((item, index) => {
            return (
              <li key={index}>
                <NavItem
                  key={index}
                  {...item}
                  name={t(item.name)}
                  setShowMenu={setShowMenu}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2 lg:gap-6">
          {" "}
          <LanguageDropdown />
          <button
            onClick={() => setShowChat(true)}
            className={`btn max-lg:text-sm flex items-center gap-2 btn-second
              
              td-300 px-4 py-3  rounded-lg max-lg:hidden`}>
            {t("ContactUs")} <BsArrowRight />
          </button>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="lg:hidden text-4xl hover:text-text-gray td-300">
            {showMenu ? (
              <span className="text-2xl">
                <AiOutlineClose />
              </span>
            ) : (
              <BiMenuAltRight />
            )}
          </button>
        </div>
      </div>
      <MenuDropdown
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setShowChat={setShowChat}
        navLink={navLink}
        t={t}
      />
      <Chat showChat={showChat} setShowChat={setShowChat} />
    </nav>
  );
};

export default Navbar;

interface MenuDropdownProps {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;

  navLink: { name: string; href: string }[];
  t: any;
}
const MenuDropdown: React.FC<MenuDropdownProps> = ({
  showMenu,
  setShowChat,
  setShowMenu,
  t,
  navLink,
}) => {
  return (
    <aside
      className={`fixed w-full h-screen  top-0 left-0 bg-primary
       z-40 menu-animation  ${
         !showMenu
           ? "-translate-y-full mt-0 "
           : "translate-y-0 mt-[70px] lg:mt-20"
       }`}>
      <div className="flex flex-col gap-12 mt-12">
        <ul className="flex flex-col items-center gap-4 text-xl font-medium">
          {navLink.map((item, index) => {
            return (
              <li key={index}>
                <NavItem key={index} {...item} setShowMenu={setShowMenu} />
              </li>
            );
          })}
        </ul>
        <div className="flex-c">
          <button
            onClick={() => setShowChat(true)}
            className={`btn max-lg:text-sm flex items-center gap-2 btn-second
              
              td-300 px-4 py-3  rounded-lg `}>
            {t("ContactUs")} <BsArrowRight />
          </button>
        </div>
      </div>
    </aside>
  );
};
interface NavItemProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
  name: string;
}
const NavItem: React.FC<NavItemProps> = ({ name, href, setShowMenu }) => {
  return (
    <Link
      href={href}
      className="font-semibold text-white hover:text-text-gray td-300 ">
      {name}
    </Link>
  );
};
