import React from "react";
import google from "/assets/icons/Google.svg";
import apple from "/assets/icons/apple.svg";
import Image from "next/image";
const DownloadBoxes = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center ">
      <a
        role="button"
        href="https://apps.apple.com/sg/app/spoused-match-meet-marry/id6504262903"
        className="flex items-center gap-2 py-2 px-4 bg-neutral-1 hover:bg-neutral-2  rounded-xl">
        <div className="flex-shrink-0">
          <Image src={apple} alt="apple" className="w-8 h-8" />
        </div>
        <div>
          <p className="text-stone-400 text-sm leading-tight whitespace-nowrap">
            Download on the
          </p>
          <p className="text-white text-lg leading-tight font-medium">
            App Store
          </p>
        </div>
      </a>
      <a
        role="button"
        href="https://play.google.com/store/apps/details?id=com.marriagespoused.myapp&hl=en-SG&utm_source=apac_med"
        className="flex items-center gap-2 py-2 px-4 bg-neutral-1 hover:bg-neutral-2 w-fit rounded-xl">
        <div className="flex-shrink-0">
          <Image src={google} alt="google" className="w-8 h-8" />
        </div>
        <div>
          <p className="text-stone-400 text-sm leading-tight whitespace-nowrap">
            Download on the
          </p>
          <p className="text-white text-lg leading-tight font-medium">
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
};

export default DownloadBoxes;
