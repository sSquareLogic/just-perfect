"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { newsletterVariants } from "@/animations/newsletter.animations";
import { useContext } from "react";
import UIContext from "@/contexts/UIContext";
const NewsLetterInput = () => {
  const { newsletterFocus, setNewsletterFocus } =
    useContext(UIContext).newsletterFocus;
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Ваш e-mail"
        onFocus={() => setNewsletterFocus(true)}
        onBlur={() => setNewsletterFocus(false)}
        className="py-3 pl-6 pr-16 bg-WHITE text-BLACK placeholder:text-GRAY outline-none w-full rounded-3xl"
      />
      <motion.div
        className="overflow-hidden right-6 top-[50%] -translate-y-[50%] absolute w-full pointer-events-none grid"
        variants={newsletterVariants}
        animate={newsletterFocus ? "arrowActive" : "arrowRest"}
      >
        <motion.div
          className="justify-self-end w-[80px]"
          variants={newsletterVariants}
          animate={newsletterFocus ? "arrowFlipActive" : "arrowFlipRest"}
        >
          <Image
            src="/assets/icons/arrow-long-right.svg"
            alt="arrow"
            width={80}
            height={1}
            unoptimized
            unselectable="off"
            className="w-[80px] block object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewsLetterInput;
