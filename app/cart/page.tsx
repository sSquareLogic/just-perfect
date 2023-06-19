import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CartItem from "@/components/cart/CartItem";
import CartTop from "@/components/cart/CartTop";
import DeliveryOptions from "@/components/cart/DeliveryOptions";
import Container from "@/components/Container";
import cartBreadcrumbItems from "@/public/data/breadcrumbs/cart.breadcrumb";
import { cartItems } from "@/public/data/cart";
import { v4 } from "uuid";

const Cart = () => {
  return (
    <main className="cart-main">
      <Container className="flex flex-col gap-10 pb-14">
        <Breadcrumb items={cartBreadcrumbItems} />
        <CartTop />
        <div className="grid grid-cols-CART gap-12">
          <div className="flex flex-col gap-8">
            {cartItems.map((cartItem) => (
              <CartItem
                fields={cartItem.fields}
                name={cartItem.name}
                quantity={cartItem.quantity}
                img={cartItem.img}
                key={v4()}
              />
            ))}
          </div>
          <DeliveryOptions />
        </div>
      </Container>
    </main>
  );
};

export default Cart;
