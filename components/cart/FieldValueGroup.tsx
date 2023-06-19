import { ICartItem } from "@/types/data/cart.types";
import FieldValue from "./FieldValue";
import { v4 } from "uuid";

interface IProps {
  fields: ICartItem["fields"];
}

const FieldValueGroup = ({ fields }: IProps) => {
  return (
    <ul className="field-value-group flex flex-col gap-6">
      {fields.map((field) => (
        <FieldValue name={field.name} value={field.value} key={v4()} />
      ))}
    </ul>
  );
};

export default FieldValueGroup;
