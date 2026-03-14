"use client";

import React, { useEffect, useRef, useState } from "react";

import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
interface Value {
  img: StaticImageData[];
  title: string;
  description: string;
}
interface ValuesProps {
  values: Value[];
}
const Values: React.FC<ValuesProps> = ({ values }) => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className=" py-20 max-screen flex flex-col md:flex-row gap-8 xl:gap-12 items-center overflow-hidden">
        <div className="flex-1 flex flex-col gap-20">
          <div className="flex flex-col items-center gap-2">
            {" "}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary text-center font-bold capitalize sm:max-w-[60%] mx-auto leading-tight">
              {t("coreValuesTitle")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium">
              {t("coreValuesDescription")}
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {values.map((item, index) => {
              return <SingleCard key={index} {...item} order={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

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
      className={`flex flex-col  gap-8 gap-y-24 xl:gap-24 items-center ${
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
