"use client";

import React, { useEffect, useRef, useState } from "react";

import img1 from "/assets/images/first-move.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";
const FirstMove: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className=" py-32 2xl:py-40 flex flex-col md:flex-row gap-8 xl:gap-12 items-center relative">
      <div className="absolute inset-0 -z-10  overflow-hidden">
        <Image
          src={img1}
          alt="intro"
          width={2000}
          height={1333}
          className="w-full object-cover  h-full object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent "></div>
      </div>
      <div className=" flex flex-col gap-6 max-screen">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
          {t("firstMoveTitle")}
        </h2>
        <p className="text-neutral-11 text-lg xl:text-xl font-medium">
          {t("firstMoveDescription")}
        </p>
        <div>
          <button
            className={`btn max-lg:text-sm flex items-center gap-2 btn-gr
              
              td-300 px-8 py-3 text-lg border-0 rounded-lg max-md:hidden`}>
            {t("joinNow")} <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstMove;
