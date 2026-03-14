"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BsAirplaneFill,
  BsFillCameraVideoFill,
  BsFillRocketFill,
} from "react-icons/bs";

import { FaCommentDots, FaFilter, FaHeart } from "react-icons/fa6";
import { FaGlobeEurope, FaRedo, FaUndo } from "react-icons/fa";
import { useTranslation } from "react-i18next";
interface FeatureTranslation {
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const { t } = useTranslation();
  const features = React.useMemo(() => {
    const featureTranslations = t("features", {
      returnObjects: true,
    }) as FeatureTranslation[];
    return featureTranslations.map((feature, index) => ({
      icon: icons[index].icon,
      title: feature.title,
      description: feature.description,
    }));
  }, [t]);
  return (
    <section className="bg-gradient-to-br from-primary to-secondary">
      <div className=" py-20 max-screen flex flex-col md:flex-row gap-8 xl:gap-12 items-center">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center font-bold capitalize sm:max-w-[60%] mx-auto leading-tight">
            {t("takeAdvantageTitle")}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
            {features.map((item, index) => {
              return <SingleCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

interface SingleCardProps {
  icon: any;
  title: string;
  description: string;
}
const SingleCard: React.FC<SingleCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    if (window.innerWidth <= 1024) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`border-white/80 p-4 border-2 aspect-square flex-c feature-card ${
        isFlipped ? "rotate-y-180" : "rotate-y-0"
      }`}
      onClick={handleCardFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      <div
        className={`${
          isFlipped ? "hidden rotate-y-180" : "flex-c flex-col gap-4 rotate-y-0"
        }`}>
        <span className="text-3xl sm:text-4xl lg:text-5xl text-white">
          {icon}
        </span>
        <p className="text-white text-2xl lg:text-3xl font-bold">{title}</p>
      </div>
      <div className={`${isFlipped ? "block rotate-y-180" : "hidden"}`}>
        <p className="text-white lg:text-xl">{description}</p>
      </div>
    </div>
  );
};

const featuress = [
  {
    icon: <FaHeart />,
    title: "Unlimited Swiping",
    description:
      "We don’t put a limit on how many potential partners you can find. Swipe to your heart’s content and discover your soulmate!",
  },
  {
    icon: <BsAirplaneFill />,
    title: "Travel Mode",
    description:
      "Stay open to love even on the go. Discover available partners while you explore uncharted territory.",
  },
  {
    icon: <FaFilter />,
    title: "Filter Preferences",
    description:
      "Specialize your search with custom profile selections to find your perfect match.",
  },
  {
    icon: <FaUndo />,
    title: "Rewind",
    description:
      "Change your mind? No worries! Use our Rewind feature to undo a pairing quickly and quietly.",
  },
  {
    icon: <FaRedo />,
    title: "Rematch",
    description:
      "At Spoused, we believe that timing is everything. Reconnect with past connections with ease on our application.",
  },
  {
    icon: <FaGlobeEurope />,
    title: "Passport Location",
    description:
      "Interested in potential partners outside of your location? Use our Passport Location to discover matches across the world.",
  },
  {
    icon: <FaCommentDots />,
    title: "Compliment Before Matching",
    description:
      "Test the connection by sending a message to spark a conversation before you officially connect.",
  },
  {
    icon: <BsFillCameraVideoFill />,
    title: "Video Call With Your Matches",
    description:
      "Enjoy embedded video calls on our app to chat with your muse.",
  },
];
const icons = [
  {
    icon: <FaHeart />,
  },
  {
    icon: <BsAirplaneFill />,
  },
  {
    icon: <FaFilter />,
  },
  {
    icon: <FaUndo />,
  },
  {
    icon: <FaRedo />,
  },
  {
    icon: <BsFillRocketFill />,
  },
  {
    icon: <FaCommentDots />,
  },
  {
    icon: <BsFillCameraVideoFill />,
  },
];

//messages before matching
//new card: Boost: Your profile will be highlighted and shown to more people
