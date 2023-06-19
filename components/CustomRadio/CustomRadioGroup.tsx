"use client";
import { useState } from "react";
import Check from "./Check";
import { ICustomRadio } from "@/types/customradio.types";
import { v4 } from "uuid";
import SmallTitle from "../SmallTitle";

interface IProps {
  items: ICustomRadio[];
  title?: string;
}

const CustomRadioGroup = ({ items, title }: IProps) => {
  const [isChecked, setIsChecked] = useState<string>(items[0].value);
  return (
    <div className="custom-radio-group flex flex-col gap-6">
      {title ? <SmallTitle title={title} /> : null}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <label
            className="custom-radio flex items-center gap-4 relative w-full"
            key={v4()}
          >
            <Check checked={isChecked === item.value} />
            <span className="font-GR text-BLACK text-TEXT">{item.text}</span>
            <input
              value={item.value}
              type="radio"
              name={item.name}
              checked={isChecked === item.value}
              onClick={() => {
                setIsChecked(item.value);
              }}
              onChange={() => null}
              className="w-full h-full z-20 absolute top-0 left-0 opacity-0"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioGroup;
