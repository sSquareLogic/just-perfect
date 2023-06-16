"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CartBtn from "./CartBtn";
import Link from "next/link";
import { ICard } from "@/types/data/card.types";

const Card = ({ img, name, price }: ICard) => {
  return (
    <motion.div initial={{ y: "0px" }} whileHover={{ y: "-10px" }}>
      <Link
        href={"/"}
        className="card shadow-CARD rounded-lg overflow-hidden bg-WHITE flex flex-col"
      >
        <div className="card-img h-[400px] w-full">
          <Image
            src={img}
            alt={`card_${img}`}
            unoptimized
            unselectable="off"
            width={312}
            height={400}
            className="object-cover h-[400px] w-full rounded-lg"
          />
        </div>
        <div className="card-description flex gap-6 items-center justify-between p-4">
          <div className="text-BLACK text-SM_TEXT font-GR font-bold">
            <p>{name}</p>
            <span>{price} TMT</span>
          </div>
          <CartBtn onClick={() => null} />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
