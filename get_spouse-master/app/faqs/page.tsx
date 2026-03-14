/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import Hero from "../sections/Hero";
import Chat from "/components/Chat";

import Download from "../sections/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

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
      <FAQ />
      <Download />
    </main>
  );
}
interface FaqTranslation {
  question: string;
  answer: string;
}
const FAQ = () => {
  const { t } = useTranslation();
  const faqs = React.useMemo(() => {
    const faqTranslations = t("faq", {
      returnObjects: true,
    }) as FaqTranslation[];
    return faqTranslations?.map((value) => ({
      question: value.question,
      answer: value.answer,
    }));
  }, [t]);
  return (
    <div className="max-screen py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          {t("FrequentlyAskedQuestions")}
        </h2>
        <span className="text-neutral-2 text-lg font-medium text-center">
          {t("ReadalltheFAQs")}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {faqs?.map((item, index) => {
          return (
            <div key={index} data-aos="fade-up" data-aos-duration="1500">
              <SingleFAQ {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const faqss = [
  {
    question:
      "What is Spoused, and why is it different from other dating apps?",
    answer:
      "Spoused is a marriage-focused dating app to help you find your lifelong partner. Unlike dating apps, we prioritize meaningful connections, inclusivity, and commitment, making us your go-to platform for serious, long-lasting relationships.",
  },
  {
    question: "Is Spoused free to use? Is there a subscription fee?",
    answer:
      "Spoused is entirely free to download and use. There are no subscription fees or recurring costs. We believe that finding love should be accessible to everyone, so Spoused remains affordable and accessible to all.",
  },
  {
    question: "How does Travel Mode work?",
    answer:
      "Travel Mode allows you to indicate your openness to connections no matter where you are in the world. It's perfect for those who want to explore global romantic connections or connect while on the move or exploring other parts of the world.",
  },
  {
    question: "Who does Spoused serve? How is the application inclusive?",
    answer:
      "Spoused seeks to serve all individuals, regardless of race, ethnicity, religion, background, or orientation. Inclusivity is one of our core values. We ensure that everyone has the opportunity to find love on our platform.",
  },
  {
    question:
      "I matched with someone, but I have changed my mind. Can I undo a match on Spoused?",
    answer:
      "Yes! We have a feature called Rewind that you can use to undo a match. It's easy to use and can help you undo a match if you change your mind or make a mistake while swiping.",
  },
  {
    question: "What is Rematch, and how does this work?",
    answer:
      "Rematch is one of our most important features. This feature allows you to reconnect with a previous pairing that you may have missed or want to rekindle after some time. Timing is everything, and if you feel that your last match should be revisited, Rematch can ensure this happens for you!",
  },
  {
    question: "Can I send a message before I match with someone on Spoused?",
    answer:
      "Of course! With our Compliment Before Matching feature, you can make the first move and initiate a conversation with someone before even matching with them. This makes it easier to break the ice to see if there is a connection between you and your potential partner.",
  },
  {
    question: "Is Spoused available worldwide?",
    answer:
      "Spoused is available worldwide, not just limited to your location. With our Passport Location feature, you can find matches from all over the world! This broadens your horizons and increases your chances of finding love.",
  },
  {
    question: "Are there any restrictions on who can join Spoused?",
    answer:
      "Our only restriction is that you must be 18 years or older to join. Besides that, we welcome everyone, regardless of orientation, identity, religion, or ethnicity. Our diverse community makes us unique, and we want you to be part of it!",
  },
  {
    question:
      "I don’t see my question here and/or I have an issue. How can I contact Spoused customer support?",
    answer:
      "You can contact our dedicated customer support team anytime on our app or through our website. We're here to assist you with any questions or concerns.",
  },
];
interface SingleFAQProps {
  question: string;
  answer: string;
}

const SingleFAQ: React.FC<SingleFAQProps> = ({ question, answer }) => {
  return (
    <Accordion className="  gap-4 !rounded-xl py-4  px-0 md:px-6 !divide-y-0">
      <AccordionSummary
        sx={{
          ".MuiAccordionSummary-root": {
            borderRadius: "30px",
          },
        }}
        className="bg-[#FEFFFF] !rounded-xl lg:!rounded-[30px] "
        expandIcon={<ExpandMoreIcon />}
        aria-controls={question}
        id={question}>
        <p className="font-semibold text-lg"> {question}</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-sm md:text-base text-neutral-2">{answer}</p>
      </AccordionDetails>
    </Accordion>
  );
};
