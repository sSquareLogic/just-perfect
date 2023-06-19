import Image from "next/image";
import SectionTitle from "../SectionTitle";
import BtnWithIcon from "../BtnWithIcon";

const CartTop = () => {
  return (
    <div className="cart-top flex flex-col gap-6">
      <SectionTitle title="Корзина" />
      <div className="flex items-center gap-10">
        <span>Товаров (2)</span>
        <BtnWithIcon text="Удалить все" img="/assets/icons/trash.svg" />
      </div>
    </div>
  );
};

export default CartTop;
