"use client";
import type { SwiperClass } from "swiper/react";
import { motion } from "framer-motion";
import Image from "next/image";
interface IProps {
  swiper?: SwiperClass;
  pages: number;
}

const PaginationFraction = ({ swiper, pages }: IProps) => {
  return (
    <div className="pagination flex items-center gap-4 w-fit">
      <motion.button
        variants={{ active: { x: "-10px" } }}
        initial={{ x: "0px" }}
        whileTap={"active"}
        onClick={() => swiper && swiper.slidePrev()}
      >
        <Image
          src={"/assets/icons/arrow-left.svg"}
          alt="arrow"
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6"
        />
      </motion.button>
      <p className="font-GR text-BLACK text-TEXT font-bold">
        {swiper?.activeIndex} / <span className="text-[#CCCCCC]">{pages}</span>
      </p>
      <motion.button
        variants={{ active: { x: "10px" } }}
        initial={{ x: "0px" }}
        whileTap={"active"}
        onClick={() => swiper && swiper.slideNext()}
      >
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt="arrow"
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6"
        />
      </motion.button>
    </div>
  );
};

export default PaginationFraction;
