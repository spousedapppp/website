import React, { useEffect, useState, ChangeEvent, useTransition } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { languageList } from "/data/languages";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(languageList[0]);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeLanguage = async (iso: string) => {
    await i18n.changeLanguage(iso);
  };

  const handleSelect = (item: any) => {
    setLanguage(item.iso);
    handleChangeLanguage(item.iso);
    setSelectedLanguage(item);
    handleClose();
  };
  useEffect(() => {
    if (i18n.isInitialized) {
      // i18n?.changeLanguage("en");
      setLanguage(i18n.language);
      const a = languageList.find((item) => item.iso === i18n.language);
      if (a) {
        setSelectedLanguage(a);
      } else {
        setSelectedLanguage(languageList[0]);
      }
      setTranslationsLoaded(true);
    }
  }, [i18n]);
  if (!translationsLoaded) {
    return (
      <div className="flex-c">
        <CircularProgress
          sx={{
            color: "white",
            height: "2rem !important",
            width: "2rem !important",
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <button
        className="text-white font-semibold"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <div className="flex items-center gap-2">
          <Image
            src={selectedLanguage?.icon}
            alt={selectedLanguage?.title}
            className="w-5"
          />
          <span className="max-lg:hidden">{selectedLanguage?.title}</span>
        </div>
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {languageList.map((item, index) => {
          return (
            <MenuItem key={index} onClick={() => handleSelect(item)}>
              <div className="flex items-center gap-2">
                <Image src={item.icon} alt={item.title} />
                <span className="font-medium text-sm">{item.title}</span>
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
