import { IBreadcrumbItem } from "@/types/data/breadcrumb.types";
import Link from "next/link";

interface IProps extends IBreadcrumbItem {
  isInitial?: boolean;
}

const BreadcrumbItem = ({ link, name, isInitial = false }: IProps) => {
  return (
    <li className="breadcrumb-item flex items-center gap-2">
      {!isInitial ? (
        <span className="font-GR text-XS_TEXT text-BLACK">/</span>
      ) : null}
      <Link
        href={link}
        className="font-GR text-XS_TEXT text-BLACK hover:text-GRAY"
      >
        {name}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
