/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
interface ChatProps {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  showChat: boolean;
}
const initialState = {
  name: "",
  company: "",
  email: "",
  message: "",
};
const Chat: React.FC<ChatProps> = ({ showChat, setShowChat }) => {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    setMessageSent(true);
    setLoading(true);
    setValues(initialState);
    setTimeout(() => {
      setMessageSent(false);
      setLoading(false);
    }, 2500);
  };
  const { t } = useTranslation();
  return (
    <div
      className={`fixed top-0 flex flex-col gap-8 shadow-lg right-0 bg-gradient-to-br from-primary to-secondary p-4 xs:p-6 sm:py-10 sm:px-8
       text-white min-h-[100dvh]   max-h-[100dvh] overflow-y-auto custom-scrollbar2 w-full md:w-[max(700px,50vw)] z-50 td-300 ${
         showChat ? "translate-x-0 " : "translate-x-full "
       } `}
    >
      <div className=" flex flex-col gap-6 md:gap-8 ">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className=" text-2xl lg:text-2xl 2xl:text-3xl font-bold">
              {t("contactUsTitle")}
            </h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-2xl lg:text-3xl hover:text-secondary"
            >
              <IoMdClose />
            </button>
          </div>
          <p className="text-base font-medium">{t("contactUsDescription")}</p>
        </div>

        <hr className="sm:w-1/2" />
        <div className="flex flex-col gap-1">
          <div className="flex justify-between sm:items-center gap-2 flex-col sm:flex-row">
            <h2 className=" text-xl lg:text-2xl 2xl:text-3xl">
              {t("OrDropUsAline")}
            </h2>
            <a
              href="mailto:Hey@mugen.tv"
              className="text-base sm:text-lg lg:text-xl 2xl:text-2xl underline"
            >
              contact@spousedapp.com
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:gap-8 relative "
      >
        <div className="flex flex-wrap gap-3 md:gap-4 ">
          <div className="flex-1">
            <InputFormLabel
              label={t("Name")}
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full md:flex-1">
            <InputFormLabel
              label={t("Email")}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor={"message"}
            className=" font-normal text-sm md:text-base"
          >
            {t("Message")} <span className="text-white">*</span>
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            required={true}
            className="td-300 w-full border border-white bg-neutral-12 py-2 px-2
            text-neutral-2 placeholder:opacity-50   focus:outline-none xl:text-base"
            rows={6}
          ></textarea>
        </div>
        <div className="flex-c">
          <button
            role="submit"
            disabled={loading}
            className="font-semibold  max-lg:text-sm flex items-center gap-2 shadow-lg
             bg-neutral-11  td-300 px-5 py-4 text-highlight rounded-lg disabled:brightness-50 "
          >
            {t("Send")}
            <span>
              <AiOutlineArrowRight size={24} />
            </span>
          </button>
        </div>
        {messageSent && (
          <div className="abs-c bg-green-200 font-medium text-green-800 border border-green-900 px-6 py-3 rounded-xl">
            Your Message Was Sent!
          </div>
        )}
      </form>
    </div>
  );
};

export default Chat;
interface InputFormLabelProps {
  type?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isDisabled?: boolean;
  label?: string;
  title?: string;
  placeholder?: string;
  half?: string;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}
const InputFormLabel: React.FC<InputFormLabelProps> = ({
  type = "text",
  name,
  value,
  onChange,
  isDisabled,
  label,
  title,
  placeholder,
  half,
  onFocus,
  onBlur,
  onClick,
  required = true,
}) => {
  return (
    <div className={`flex flex-col gap-1   ${half}`}>
      <label htmlFor={name} className=" font-normal text-sm md:text-base">
        {label || name} {required && <span className="text-white">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        className="td-300 w-full border-2 border-white bg-neutral-12 py-3 md:py-4 px-2
           text-neutral-2 placeholder:opacity-50   focus:outline-none xl:text-base"
        title={title}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        required={required}
      />
    </div>
  );
};
