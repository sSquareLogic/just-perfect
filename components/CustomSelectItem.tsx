import {
  ICustomSelect,
  ICustomSelectItemProps,
} from "@/types/customselect.types";
import { v4 } from "uuid";
const CustomSelectItem = ({}: ICustomSelectItemProps) => {
  return <li className={`custom-select-item-${v4()}`}></li>;
};

export default CustomSelectItem;
