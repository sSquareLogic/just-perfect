import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DeliveryOptions from "@/components/cart/DeliveryOptions";
import Container from "@/components/Container";
import cartBreadcrumbItems from "@/public/data/breadcrumbs/cart.breadcrumb";

const Cart = () => {
  return (
    <main className="cart-main">
      <Container className="flex flex-col gap-10 pb-14">
        <Breadcrumb items={cartBreadcrumbItems} />
        <div className="grid grid-cols-CART gap-12">
          <div></div>
          <DeliveryOptions />
        </div>
      </Container>
    </main>
  );
};

export default Cart;
