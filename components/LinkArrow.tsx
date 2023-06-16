import Link from "next/link";
import Image from "next/image";

interface IProps {
  text: string;
  link: string;
}

const LinkArrow = ({ link, text }: IProps) => {
  return (
    <Link href={link} className="link-arrow flex items-center gap-4">
      <span className="font-GR text-BLACK text-TEXT">{text}</span>
      <Image
        src={"/assets/icons/arrow-long-right.svg"}
        alt="arrow"
        height={1}
        width={80}
        unoptimized
        unselectable="off"
        className="w-[80px] object-contain"
      />
    </Link>
  );
};

export default LinkArrow;
