import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Container from "@/components/Container";
import cartBreadcrumbItems from "@/public/data/breadcrumbs/cart.breadcrumb";

const Cart = () => {
  return (
    <main className="cart-main">
      <Container className="flex flex-col gap-10">
        <Breadcrumb items={cartBreadcrumbItems} />
      </Container>
    </main>
  );
};

export default Cart;
