"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  initial: number;
  onChange: (quantity: number) => void;
}

const QuantityController = ({ initial, onChange }: IProps) => {
  const [quantity, setQuantity] = useState<number>(initial);

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);
  return (
    <div className="quantity-controller flex items-center justify-between gap-4 px-6 py-2 border border-BLACK border-solid rounded-lg max-w-[320px] w-full">
      <Image
        src={"/assets/icons/minus.svg"}
        alt="minus"
        width={32}
        height={32}
        className="w-8 h-8 object-contain transition-all cursor-pointer"
        onClick={() => setQuantity(quantity - 1)}
        style={quantity < 2 ? { opacity: "0.6", pointerEvents: "none" } : {}}
      />
      <span className="font-GR text-BLACK text-LG_TEXT">{quantity}</span>
      <Image
        src={"/assets/icons/plus.svg"}
        alt="plus"
        width={32}
        height={32}
        className="w-8 h-8 object-contain cursor-pointer"
        onClick={() => setQuantity(quantity + 1)}
      />
    </div>
  );
};

export default QuantityController;
