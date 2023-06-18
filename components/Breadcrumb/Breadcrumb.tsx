import { IBreadcrumbItem } from "@/types/data/breadcrumb.types";
import BreadcrumbItem from "./BreadcrumbItem";
import { v4 } from "uuid";
interface IProps {
  items: IBreadcrumbItem[];
}

const Breadcrumb = ({ items }: IProps) => {
  return (
    <ul className="breadcrumb flex items-center gap-2">
      <BreadcrumbItem link="/" name="Главная" isInitial />
      {items.map((item) => (
        <BreadcrumbItem link={item.link} name={item.name} key={v4()} />
      ))}
    </ul>
  );
};

export default Breadcrumb;
