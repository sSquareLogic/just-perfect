import Image from "next/image";

interface IProps {
  onClick: () => void;
}

const CartBtn = ({ onClick }: IProps) => {
  return (
    <button
      type="button"
      className="cart-btn py-3 px-4 bg-GREEN rounded-lg w-fit transition-all hover:bg-GREEN_HOVER"
      onClick={onClick}
    >
      <Image
        src={"/assets/icons/cart.svg"}
        alt="add_to_cart"
        unoptimized
        unselectable="off"
        width={24}
        height={24}
        className="object-contain w-6 h-6"
      />
    </button>
  );
};

export default CartBtn;
