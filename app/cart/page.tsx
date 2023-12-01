import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CartItem from "@/components/cart/CartItem";
import CartTop from "@/components/cart/CartTop";
import Container from "@/components/Container";
import DeliveryOptions from "@/components/cart/DeliveryOptions";
import cartBreadcrumbItems from "@/public/data/breadcrumbs/cart.breadcrumb";
import { cartItems } from "@/public/data/cart";

const Cart = () => {
  return (
    <main className="cart-main">
      <Container className="flex flex-col gap-10 pb-14">
        <Breadcrumb items={cartBreadcrumbItems} />
        <CartTop />
        <div className="grid grid-cols-CART gap-12">
          <div className="flex flex-col gap-8">
            {cartItems.map((cartItem, i) => (
              <CartItem
                fields={cartItem.fields}
                name={cartItem.name}
                quantity={cartItem.quantity}
                img={cartItem.img}
                key={i}
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
