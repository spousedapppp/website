/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import "react-indiana-drag-scroll/dist/style.css";
import img2 from "/assets/images/Splash.jpg";
import img1 from "/assets/images/Onboarding 1.jpg";

import Image from "next/image";
import { useTranslation } from "next-i18next";
const Welcome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className=" py-20 max-screen flex flex-col md:flex-row gap-8 xl:gap-12 items-center">
      <div className="flex-1 flex items-center justify-center ">
        <Image
          src={img2}
          alt="intro"
          width={300}
          height={600}
          className=" w-auto lg:h-[550px] -rotate-6 rounded-3xl shadow-xl hover:scale-[1.02] td-300 "
        />
        <Image
          src={img1}
          alt="intro"
          width={300}
          height={600}
          className=" w-auto lg:h-[550px] rotate-6 -translate-x-1/4 rounded-3xl shadow-xl hover:scale-[1.02] td-300 "
        />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
          {t("welcomeTitle2")}
        </h2>
        <p className="text-neutral-2 text-lg xl:text-xl font-medium">
          {t("welcomeDescription")}
        </p>
      </div>
    </section>
  );
};

export default Welcome;
