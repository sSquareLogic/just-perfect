import Image from "next/image";
import SectionTitle from "../SectionTitle";

const CartTop = () => {
  return (
    <div className="cart-top flex flex-col gap-6">
      <SectionTitle title="Корзина" />
      <div className="flex items-center gap-10">
        <span>Товаров (2)</span>
        <button type="button" className="flex items-center gap-4">
          <span>Удалить все</span>
          <Image
            src={"/assets/icons/trash.svg"}
            alt="trash"
            unoptimized
            unselectable="off"
            width={24}
            height={24}
            className="object-contain w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default CartTop;
