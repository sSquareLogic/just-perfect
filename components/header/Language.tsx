"use client";
import Image from "next/image";
import DataContext from "@/contexts/DataContext";
import { useContext } from "react";

const Language = () => {
  const { language, setLanguage } = useContext(DataContext).language;
  return (
    <div className="language flex gap-2 items-center">
      <span className="text-TEXT text-BLACK font-GR">{language}</span>
      <Image
        src="/assets/icons/arrow-down.svg"
        alt="arrow"
        width={24}
        height={24}
        unoptimized
        unselectable="off"
        className="w-6 h-6 object-contain"
      />
    </div>
  );
};

export default Language;
