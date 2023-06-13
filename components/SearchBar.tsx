"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DataContext from "@/contexts/DataContext";
import { ChangeEvent, useContext } from "react";
import { searchVariants } from "@/animations/search.animations";
import UIContext from "@/contexts/UIContext";
import colors from "@/variables/colors";

const SearchBar = () => {
  const { search, setSearch } = useContext(DataContext).search;
  const { searchFocus, setSearchFocus } = useContext(UIContext).searchFocus;
  return (
    <form
      className="searchbar justify-self-center flex items-center w-full rounded-3xl bg-GREEN border border-GREEN overflow-hidden transition-all"
      style={
        searchFocus
          ? { background: colors.GREEN_HOVER, borderColor: colors.GREEN_HOVER }
          : {}
      }
    >
      <div className="relative min-w-[320px] w-full">
        <motion.div
          className="absolute top-[50%] -translate-y-[50%] left-6 w-6 h-6 object-contain pointer-events-none"
          variants={searchVariants}
          animate={searchFocus ? "iconFocus" : "iconBlur"}
        >
          <Image
            src={"/assets/icons/search.svg"}
            alt="search"
            width={24}
            height={24}
            unoptimized
            unselectable="off"
          />
        </motion.div>
        <motion.input
          type="text"
          placeholder="Поиск по сайту"
          className="py-3 pr-5 pl-14 text-BLACK placeholder:text-GRAY outline-none w-full rounded-r-3xl rounded-b-3xl"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onBlur={() => setSearchFocus(false)}
          onFocus={() => setSearchFocus(true)}
          variants={searchVariants}
          animate={searchFocus ? "inputFocus" : "inputBlur"}
        />
      </div>
      <button
        type="button"
        className="py-3 px-6 text-XS_TEXT font-GR text-BLACK"
      >
        Найти
      </button>
    </form>
  );
};

export default SearchBar;
