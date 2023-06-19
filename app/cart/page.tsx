import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/Container";
import CustomRadioGroup from "@/components/CustomRadio/CustomRadioGroup";
import cartBreadcrumbItems from "@/public/data/breadcrumbs/cart.breadcrumb";
import { v4 } from "uuid";

const Cart = () => {
  return (
    <main className="cart-main">
      <Container className="flex flex-col gap-10 pb-14">
        <Breadcrumb items={cartBreadcrumbItems} />
        <CustomRadioGroup
          title={"Выберите способ доставки"}
          items={[
            {
              id: "asd",
              name: "zxc",
              text: "Самовывоз (Бесплатно)",
            },
            {
              id: "2",
              name: "zxc",
              text: "Доставка курьером 20 ТМТ (от 500 ТМТ бесплатно)",
            },
          ]}
        />
      </Container>
    </main>
  );
};

export default Cart;
