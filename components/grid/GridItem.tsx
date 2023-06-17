import Image from "next/image";
import Link from "next/link";

interface IProps {
  link: string;
  img: string;
}

const GridItem = ({ img, link }: IProps) => {
  return (
    <Link
      href={link}
      className="grid-item w-[312px] h-[312px] rounded-lg overflow-hidden"
    >
      <Image
        src={img}
        alt={`grid_item_${img}`}
        width={312}
        height={312}
        unoptimized
        unselectable="off"
        className="grid-item w-[312px] h-[312px] object-cover rounded-lg"
      />
    </Link>
  );
};

export default GridItem;
