import Image from "next/image";

interface IProps {
  img: string;
  direction: "horizontal" | "vertical";
}

const HeroItem = ({ img, direction }: IProps) => {
  return (
    <div
      className="hero-vertical-item h-full rounded-lg w-full overflow-hidden"
      style={
        direction === "horizontal"
          ? { maxHeight: "240px" }
          : { maxHeight: "504px" }
      }
    >
      <Image
        src={img}
        alt={`hero_${img}`}
        width={310}
        height={504}
        unoptimized
        unselectable="off"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroItem;
