"use client";
import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import Chat from "/components/Chat";
import Welcome from "./sections/Welcome";
import FirstMove from "./sections/FirstMove";
import WhySpoused from "./sections/WhySpoused";
import Features from "./sections/Features";
import Values from "./sections/Values";
import Download from "./sections/Download";
import img1 from "/assets/images/Match Confirmed.jpg";
import img2 from "/assets/images/Rematch.jpg";

import img3 from "/assets/images/View Profile.jpg";
import img4 from "/assets/images/Filter.jpg";

import img5 from "/assets/images/My Profile.jpg";
import img6 from "/assets/images/Boost.jpg";

import img7 from "/assets/images/Pricing.jpg";
import img8 from "/assets/images/Chats 3.jpg";
import { StaticImageData } from "next/image";
import "./i18n";
import { useTranslation } from "react-i18next";
interface FeatureTranslation {
  title: string;
  description: string;
}
export default function Home() {
  const [showChat, setShowChat] = useState<boolean>(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (showChat) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showChat]);
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
    <main className="min-h-screen">
      <Chat showChat={showChat} setShowChat={setShowChat} />
      <Hero />
      <Welcome />
      <FirstMove />
      <WhySpoused />
      <Features />
      <Values values={values} />
      <Download />
    </main>
  );
}
interface ValuesProps {
  img: StaticImageData[];
  // title: string;
  // description: string;
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
