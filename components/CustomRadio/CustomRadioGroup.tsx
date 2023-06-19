"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Check from "./Check";
import { ICustomRadio } from "@/types/customradio.types";
interface IProps {
  items: ICustomRadio[];
  title?: string;
}

const CustomRadioGroup = ({ items, title }: IProps) => {
  const [isChecked, setIsChecked] = useState<string>(items[0].id);
  return (
    <div className="custom-radio-group flex flex-col gap-6">
      {title ? (
        <h6 className="font-GR text-BLACK text-LG_TEXT font-bold">{title}</h6>
      ) : null}
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {items.map((item) => (
          <label className="custom-radio flex items-center gap-4 relative w-full">
            <Check checked={isChecked === item.id} />
            <span className="font-GR text-BLACK text-TEXT">{item.text}</span>
            <input
              id={item.id}
              type="radio"
              name={item.name}
              value={item.text}
              checked={isChecked === item.id}
              onClick={() => {
                setIsChecked(item.id);
              }}
              className="w-full h-full z-20 absolute top-0 left-0 opacity-0"
            />
          </label>
        ))}
      </form>
    </div>
  );
};

export default CustomRadioGroup;
