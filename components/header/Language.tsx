"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DataContext from "@/contexts/DataContext";
import { useContext } from "react";
import LanguageDropdown from "./LanguageDropdown";
import UIContext from "@/contexts/UIContext";
import { languageVariants } from "@/animations/language.animations";
import { useOnClickOutside } from "usehooks-ts";

const Language = () => {
  const { language } = useContext(DataContext).language;
  const { languageOpen, setLanguageOpen } = useContext(UIContext).languageOpen;
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setLanguageOpen(false));
  return (
    <div
      ref={ref}
      className="language flex gap-2 items-center relative cursor-pointer"
      onClick={() => setLanguageOpen(!languageOpen)}
    >
      <span className="text-TEXT text-BLACK font-GR">{language}</span>
      <motion.div
        variants={languageVariants}
        animate={languageOpen ? "arrowActive" : "arrowRest"}
      >
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="arrow"
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6 object-contain"
        />
      </motion.div>
      <LanguageDropdown />
    </div>
  );
};

export default Language;
