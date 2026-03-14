"use client";

import React, { useEffect, useRef, useState } from "react";

import img1 from "/assets/images/download-now.webp";
import Image from "next/image";

import DownloadBoxes from "/components/DownloadBoxes";
import { useTranslation } from "react-i18next";
const Download: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="mb-20 py-28 flex flex-col md:flex-row gap-8 xl:gap-12 items-center relative">
      <div className="absolute inset-0 -z-10  overflow-hidden">
        <Image
          src={img1}
          alt="intro"
          width={2000}
          height={1333}
          className="w-full object-cover  h-full"
        />
        <div className="absolute inset-0 bg-black/40 "></div>
      </div>
      <div className=" flex flex-col items-center text-center gap-6 max-screen">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold capitalize">
          {t("downloadTitle")}
        </h2>
        <p className="text-neutral-9 text-lg xl:text-xl font-medium lg:max-w-[75%]">
          {t("downloadDescription")}
        </p>
        <div>
          <DownloadBoxes />
        </div>
      </div>
    </section>
  );
};

export default Download;
