/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Hero from "../sections/Hero";
import Chat from "/components/Chat";
import Download from "../sections/Download";
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
      <AboutUs />
      <Download />
    </main>
  );
}

const AboutUs = () => {
  const { t } = useTranslation();
  const content = [
    {
      title: t("visionTitle"),
      content: t("visionDescription"),
    },
    {
      title: t("whyChooseUsTitle"),
      content: t("whyChooseUsDescription"),
    },
    {
      title: t("inclusiveByDesignTitle"),
      content: t("inclusiveByDesignDescription"),
    },
    {
      title: t("featuresThatMatterTitle"),
      content: t("featuresThatMatterDescription"),
    },
    {
      title: t("ourCommitmentTitle"),
      content: t("ourCommitmentDescription"),
    },
    {
      title: t("joinCommunityTitle"),
      content: t("joinCommunityDescription"),
    },
    {
      title: t("joinCommunityTitle"),
      content: t("joinCommunityDescription"),
    },
    {
      title: t("downloadTitle2"),
      content: t("downloadDescription2"),
    },
  ];
  return (
    <div className="flex flex-col gap-12 2xl:gap-20 max-screen py-20">
      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold capitalize">
          {t("aboutUsTitle")}
        </h2>
        <p className="text-xl xl:text-2xl text-neutral-3 text-center font-medium">
          {t("aboutUsDescription")}
        </p>
      </div>
      <div className="relative h-[1px]  div-transparent div-dot"></div>
      <div className="flex flex-col gap-12 2xl:gap-16">
        {content.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-3xl text-primary font-bold capitalize">
                {item.title}
              </h2>
              <p className="text-neutral-2 text-lg  font-medium">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
