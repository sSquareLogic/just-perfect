"use client";
import Image from "next/image";
import SmallTitle from "../SmallTitle";
import FieldValueGroup from "./FieldValueGroup";
import { ICartItem } from "@/types/data/cart.types";
import BtnWithIcon from "../BtnWithIcon";
import QuantityController from "./QuantityController";

const CartItem = ({ fields, name, quantity, img }: ICartItem) => {
  return (
    <div className="cart-item flex gap-8">
      <div className="rounded-lg overflow-hidden max-w-[320px] max-h-[400px] w-full h-full">
        <Image
          src={img}
          alt={`img_${img}`}
          unoptimized
          unselectable="off"
          width={320}
          height={400}
          className="max-w-[320px] max-h-[400px] w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between gap-3 w-full">
        <div className="flex flex-col gap-8">
          <SmallTitle title={name} />
          <div className="flex flex-col gap-6">
            <FieldValueGroup fields={fields} />
            <BtnWithIcon
              img="/assets/icons/favourite.svg"
              text="Добавит в закладки"
            />
            <BtnWithIcon img="/assets/icons/trash.svg" text="Удалить" />
          </div>
        </div>
        <QuantityController initial={quantity} onChange={(quantity) => null} />
      </div>
    </div>
  );
};

export default CartItem;
