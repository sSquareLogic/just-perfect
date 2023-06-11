import Link from "next/link";
import Image from "next/image";

interface IProps {
  link: string;
  src: string;
}

const LinkItem = ({ link, src }: IProps) => {
  return (
    <li>
      <Link href={link}>
        <Image
          src={src}
          alt={src}
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6 object-contain"
        />
      </Link>
    </li>
  );
};

export default LinkItem;
