"use client";
import { motion } from "framer-motion";
import DataContext from "@/contexts/DataContext";
import languages from "@/settings/languages";
import { useContext } from "react";
import { languageVariants } from "@/animations/language.animations";
import UIContext from "@/contexts/UIContext";

const LanguageDropdown = () => {
  const { language, setLanguage } = useContext(DataContext).language;
  const { languageOpen, setLanguageOpen } = useContext(UIContext).languageOpen;
  return (
    <motion.ul
      className="language-dropdown absolute right-0 top-[35px] rounded-lg overflow-hidden w-full shadow-lg border border-solid border-BG"
      variants={languageVariants}
      animate={languageOpen ? "dropdownActive" : "dropdownRest"}
    >
      {languages.map((lang) => (
        <motion.li
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
