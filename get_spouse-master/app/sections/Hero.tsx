import React from "react";
import DownloadBoxes from "/components/DownloadBoxes";
import Image from "next/image";
import logo from "/assets/logo2.svg";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className=" h-[calc(100dvh-80px)]  inset-0  w-full flex-c mt-[70px] lg:mt-20 relative ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full min-h-[calc(100dvh-80px)] w-full object-cover object-center">
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="text-white  z-20 relative font-bold flex flex-col gap-4 gap-y-12 items-center max-screen">
        <div className="flex flex-col gap-4 items-center">
          <Image src={logo} alt="" width={48} className="w-32 sm:w-48" />
          <h1>
            <span className="text-3xl sm:text-4xl lg:text-5xl !leading-[1]">
              {t("welcomeTitle")}
            </span>
          </h1>
        </div>
        <DownloadBoxes />
      </div>
    </section>
  );
};

export default Hero;
