import { ICartItem } from "@/types/data/cart.types";

const FieldValue = ({ name, value }: ICartItem["fields"][0]) => {
  return (
    <li className="font-GR text-BLACK text-TEXT">
      {name}: {value}
    </li>
  );
};

export default FieldValue;
