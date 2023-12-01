"use client";

import DataContext from "@/contexts/DataContext";
import UIContext from "@/contexts/UIContext";
import { languageVariants } from "@/animations/language.animations";
import languages from "@/settings/languages";
import { motion } from "framer-motion";
import { useContext } from "react";

const LanguageDropdown = () => {
  const { language, setLanguage } = useContext(DataContext).language;
  const { languageOpen, setLanguageOpen } = useContext(UIContext).languageOpen;

  return (
    <motion.ul
      className="language-dropdown absolute right-0 top-[35px] rounded-lg overflow-hidden w-full shadow-lg border border-solid border-BG z-30"
      variants={languageVariants}
      animate={languageOpen ? "dropdownActive" : "dropdownRest"}
    >
      {languages.map((lang, i) => (
        <motion.li
          key={i}
          className="p-2 font-GR text-BLACK"
          onClick={() => {
            setLanguage(lang);
            setLanguageOpen(false);
          }}
          variants={languageVariants}
          animate={language === lang ? "itemActive" : "itemRest"}
        >
          {lang}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default LanguageDropdown;
