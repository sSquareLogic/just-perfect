"use client";
import { useState } from "react";
import { ICard } from "@/types/data/card.types";
import PaginationFraction from "./PaginationFraction";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import Card from "./card/Card";
import { v4 } from "uuid";
import SwiperClass from "swiper";

interface IProps {
  title?: string;
  items: ICard[];
}

const CardSwiper = ({ items, title }: IProps) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState<number>(1);
  return (
    <div className="card-swiper flex flex-col gap-8">
      <div className="flex items-center gap-8 justify-between">
        <h5 className="text-BLACK text-SM_TITLE font-RW font-bold">{title}</h5>
        <PaginationFraction
          swiper={controlledSwiper}
          activeIndex={activeIndex}
          pages={Math.ceil(items.length / 4)}
        />
      </div>
      <div>
        <Swiper
          className="h-[500px]"
          speed={1200}
          modules={[Controller, Navigation]}
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroup={4}
          spaceBetween={24}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          onSlideChange={(swiper) =>
            setActiveIndex(Math.ceil(swiper.activeIndex / 4) + 1)
          }
        >
          {items.map((item) => (
            <SwiperSlide key={v4()}>
              <Card img={item.img} name={item.name} price={item.price} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSwiper;
