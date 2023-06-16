import { IPopularCategory } from "@/types/data/popular_category.types";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ img, title, link }: IPopularCategory) => {
  return (
    <Link
      href={link}
      className="popular-card h-[418px] rounded-2xl relative overflow-hidden"
    >
      <Image
        src={img}
        alt={`popular_${img}`}
        unoptimized
        unselectable="off"
        width={480}
        height={418}
        className="rounded-2xl w-full object-cover h-full absolute left-0 top-0 z-0"
      />
      <span className="h-full w-full py-4 px-2 text-center flex items-center justify-center text-WHITE font-RW text-TITLE font-bold bg-DARKEN z-10 relative">
        {title}
      </span>
    </Link>
  );
};

export default PopularCard;
