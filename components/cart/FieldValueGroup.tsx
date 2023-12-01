import FieldValue from "./FieldValue";
import { ICartItem } from "@/types/data/cart.types";

interface IProps {
  fields: ICartItem["fields"];
}

const FieldValueGroup = ({ fields }: IProps) => {
  return (
    <ul className="field-value-group flex flex-col gap-6">
      {fields.map((field, i) => (
        <FieldValue name={field.name} value={field.value} key={i} />
      ))}
    </ul>
  );
};

export default FieldValueGroup;
