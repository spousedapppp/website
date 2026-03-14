"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "/assets/logo.svg";
import Link from "next/link";
import { BsArrowRight, BsArrowUp, BsFacebook } from "react-icons/bs";
import ca from "/assets/ca.png";
import tg from "/assets/tg.png";
import wu from "/assets/wu.png";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import Chat from "./Chat";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    if (showMenu || showChat) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMenu, showChat]);
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral-1 text-neutral-11 ">
      <div className="max-screen pt-12 lg:pt-20 pb-4 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-y-12">
          <div className="flex-[60%] flex flex-col gap-8">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={logo} alt="" width={48} className="w-40" />
            </Link>
            <ul className="flex flex-col gap-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/about-us"}>{t("AboutUs2")} </Link>
              </li>
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/our-app"}>{t("OurApp")}</Link>
              </li>
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/faqs"}>{t("FAQs")} </Link>
              </li>
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/cookies"}>{t("CookiePolicy")}</Link>
              </li>
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/terms"}>{t("TermsAndConditions")}</Link>
              </li>
              <li className="list-line relative pl-10 hover:pl-16 td-300 w-fit">
                <Link href={"/privacy"}>{t("Privacy")}</Link>
              </li>
              <li> </li>
            </ul>
          </div>
          <div className="flex-[40%] flex flex-col gap-8 md:border-l md:pl-12">
            <div className="flex flex-col gap-3">
              <h2 className=" text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                {t("ConnectWithUs")}
              </h2>
              <div className="flex gap-4 flex-wrap items-center ">
                {socialLinks.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className="text-neutral-12 hover:text-primary text-xl td-300"
                      href={item.link}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>

            <hr className="sm:w-1/2" />
            <div className="flex flex-col gap-1">
              <h2 className=" text-xl lg:text-2xl 2xl:text-3xl">
                {t("OrDropUsAline")}
              </h2>
              <a
                href="mailto:contact@spousedapp.com"
                className="text-base sm:text-lg lg:text-xl 2xl:text-2xl underline hover:text-primary td-300"
              >
                contact@spousedapp.com
              </a>
            </div>
            <div>
              <button
                onClick={() => setShowChat(true)}
                className={`btn max-lg:text-sm flex items-center gap-2 btn-gr
              
              td-300 px-4 py-3  rounded-lg `}
              >
                {t("ContactUs")}
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 border-t pt-6">
          <span className="text-sm text-neutral-10 ">Spoused ©2023</span>

          <button
            onClick={() => scrollToTop()}
            className="text-white text-xl  hover:text-neutral-1 hover:bg-neutral-11 rounded-full p-2  td-300"
          >
            <BsArrowUp />
          </button>
        </div>
      </div>{" "}
      <Chat showChat={showChat} setShowChat={setShowChat} />
    </footer>
  );
};

export default Footer;
interface SocialLink {
  link: string;
  icon: React.ReactElement; // Specify the type for the icon prop
  name: string;
}
const socialLinks: SocialLink[] = [
  { link: "#", icon: <BsFacebook />, name: "Facebook" },
  { link: "#", icon: <AiFillInstagram />, name: "Instagram" },
  { link: "#", icon: <AiOutlineTwitter />, name: "Twitter" },
  { link: "#", icon: <AiFillYoutube />, name: "Youtube" },
  { link: "#", icon: <FaTiktok />, name: "TikTok" },
  { link: "#", icon: <FaSnapchatGhost />, name: "Snapchat" },
];
