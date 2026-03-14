/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import img1 from "/assets/images/Swip right.jpg";
import img2 from "/assets/images/Swipe Left.jpg";
import { useTranslation } from "next-i18next";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const WhySpoused: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className=" py-20 lg:py-32 max-screen flex flex-col md:flex-row gap-8 xl:gap-12 gap-y-16 items-center">
      <div className="flex-1 flex flex-col gap-4 items-center md:items-start max-md:items-center md:pr-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
          {t("whyChooseTitle")}
        </h2>
        <p className="text-neutral-2 text-lg xl:text-xl font-medium">
          {t("whyChooseDescription")}
        </p>
        <div className="mt-4">
          <button
            className={`btn max-lg:text-sm flex  gap-2 btn-gr
              
              td-300 px-8 py-3 text-lg border-0 rounded-lg `}>
            Get started <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={img1}
          alt="intro"
          width={300}
          height={600}
          className="w-auto lg:h-[550px] -rotate-6 relative z-10 rounded-3xl shadow-xl hover:scale-[1.02] td-300 "
        />
        <Image
          src={img2}
          alt="intro"
          width={300}
          height={600}
          className="w-auto lg:h-[550px] rotate-6 -translate-x-1/4 rounded-3xl shadow-xl hover:scale-[1.02] td-300 "
        />
      </div>
    </section>
  );
};

export default WhySpoused;
