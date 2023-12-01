import BreadcrumbItem from "./BreadcrumbItem";
import { IBreadcrumbItem } from "@/types/data/breadcrumb.types";

interface IProps {
  items: IBreadcrumbItem[];
}

const Breadcrumb = ({ items }: IProps) => {
  return (
    <ul className="breadcrumb flex items-center gap-2">
      <BreadcrumbItem link="/" name="Главная" isInitial />
      {items.map((item, i) => (
        <BreadcrumbItem link={item.link} name={item.name} key={i} />
      ))}
    </ul>
  );
};

export default Breadcrumb;
