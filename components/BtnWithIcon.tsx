"use client";
import Image from "next/image";
interface IProps {
  img: string;
  text: string;
  onClick?: () => void;
}
const BtnWithIcon = ({ text, img, onClick = () => null }: IProps) => {
  return (
    <button type="button" className="flex items-center gap-4" onClick={onClick}>
      <span>{text}</span>
      <Image
        src={img}
        alt={`icon_${img}`}
        unoptimized
        unselectable="off"
        width={24}
        height={24}
        className="object-contain w-6 h-6"
      />
    </button>
  );
};

export default BtnWithIcon;
