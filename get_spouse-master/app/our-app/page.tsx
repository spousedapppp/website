/* eslint-disable react/no-unescaped-entities */
"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Hero from "../sections/Hero";
import Chat from "/components/Chat";
import Download from "../sections/Download";

import img1 from "/assets/images/Match Confirmed.jpg";
import img2 from "/assets/images/Rematch.jpg";

import img3 from "/assets/images/View Profile.jpg";
import img4 from "/assets/images/Filter.jpg";

import img5 from "/assets/images/My Profile.jpg";
import img6 from "/assets/images/Boost.jpg";

import img7 from "/assets/images/Pricing.jpg";
import img8 from "/assets/images/Chats 3.jpg";
import Features from "../sections/Features";
import { useTranslation } from "react-i18next";
import "/app/i18n";
export default function Page() {
  const [showChat, setShowChat] = useState<boolean>(false);
  useEffect(() => {
    if (showChat) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showChat]);
  return (
    <main className="min-h-screen">
      <Chat showChat={showChat} setShowChat={setShowChat} />
      <Hero />
      <OurApp />
      <div className="mb-20">
        <Features />
      </div>
      <Download />
    </main>
  );
}

const OurApp = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 2xl:gap-12 max-screen py-20 overflow-hidden">
      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
          {t("aboutOurApp")}
        </h2>
        <p className="text-xl xl:text-2xl text-neutral-3  font-medium">
          {t("aboutOurAppDescription")}
        </p>
      </div>
      <div className="relative h-[1px]  div-transparent div-dot"></div>
      <Values />
    </div>
  );
};
interface FeatureTranslation {
  title: string;
  description: string;
}
const Values: React.FC = () => {
  const { t } = useTranslation();
  const values = React.useMemo(() => {
    const featureTranslations = t("coreValues", {
      returnObjects: true,
    }) as FeatureTranslation[];
    return featureTranslations.map((value, index) => ({
      img: images[index].img,
      title: value.title,
      description: value.description,
    }));
  }, [t]);
  return (
    <section className="">
      <div className=" pb-20 max-screen flex flex-col md:flex-row gap-8 xl:gap-12 gap-y-20 items-center">
        <div className="flex-1 flex flex-col gap-20">
          <div className="flex flex-col items-center gap-2">
            {" "}
            <h2 className="text-3xl sm:text-5xl  text-primary text-center font-bold capitalize sm:max-w-[60%] mx-auto leading-tight">
              {t("whatMakesSpousedDifferent")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium">
              {t("UnlikeOtherApp")}
            </p>
          </div>
          <div className="flex flex-col gap-12 ">
            {values.map((item, index) => {
              return <SingleCard key={index} {...item} order={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SingleCardProps {
  img: StaticImageData[];
  title: string;
  description: string;
  order: number;
}
const SingleCard: React.FC<SingleCardProps> = ({
  img,
  title,
  description,
  order,
}) => {
  return (
    <article
      className={`flex flex-col  gap-8 gap-y-24 xl:gap-24 items-center  ${
        order % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
      <div className="flex-1 relative flex justify-center items-center">
        <Image
          src={img[0]}
          alt="intro"
          width={300}
          height={600}
          className={`w-auto h-[500px]  rounded-3xl shadow-xl hover:scale-[1.02] td-300  ${
            order % 2 === 0 ? "-rotate-6 " : "rotate-6 "
          }`}
        />
        <Image
          src={img[1]}
          alt="intro"
          width={300}
          height={600}
          className={`w-auto h-[500px]  rounded-3xl shadow-xl hover:scale-[1.02] td-300  ${
            order % 2 === 0
              ? "rotate-6 -translate-x-1/4"
              : "-rotate-6 -translate-x-1/4"
          }`}
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 ">
        <div
          className={`xl:max-w-[85%] ${
            order % 2 === 0 ? "xl:mr-auto " : "xl:ml-auto "
          } flex flex-col gap-4`}>
          <h2 className="text-4xl xl:text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
            {title}
          </h2>
          <p className="text-neutral-2 text-lg xl:text-xl  font-medium">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

interface ValuesProps {
  img: StaticImageData[];
}
const images: ValuesProps[] = [
  {
    img: [img1, img2],
  },
  {
    img: [img3, img4],
  },
  {
    img: [img5, img6],
  },
  {
    img: [img7, img8],
  },
];
