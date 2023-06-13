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
  console.log(controlledSwiper?.activeIndex);
  return (
    <div className="card-swiper flex flex-col gap-8">
      <div className="flex items-center gap-8 justify-between">
        <h5 className="text-BLACK text-SM_TITLE font-RW font-bold">{title}</h5>
        <PaginationFraction
          swiper={controlledSwiper}
          pages={Math.ceil(items.length / 4)}
        />
      </div>
      <div>
        <Swiper
          modules={[Controller, Navigation]}
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroup={4}
          spaceBetween={24}
          loop={true}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
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
