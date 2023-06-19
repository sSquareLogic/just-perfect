"use client";
import CustomRadioGroup from "@/components/CustomRadio/CustomRadioGroup";
import { FormEvent } from "react";
import SmallTitle from "../SmallTitle";
import GreenBtn from "../GreenBtn";

const DeliveryOptions = () => {
  return (
    <aside className="delivery-options bg-LIGHT_GRAY px-6 py-12 sticky top-4 right-0 h-fit">
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className="flex flex-col gap-10"
      >
        <CustomRadioGroup
          title={"Выберите способ доставки"}
          items={[
            {
              value: "self",
              name: "delivery",
              text: "Самовывоз (Бесплатно)",
            },
            {
              value: "deliver",
              name: "delivery",
              text: "Доставка курьером 20 ТМТ (от 500 ТМТ бесплатно)",
            },
          ]}
        />
        <CustomRadioGroup
          title={"Выберите способ оплаты"}
          items={[
            {
              value: "cash",
              name: "payment",
              text: "Налом",
            },
            {
              value: "card",
              name: "payment",
              text: "Картой",
            },
          ]}
        />
        <div className="summary flex flex-col gap-6">
          <SmallTitle title="Моя корзина" />
          <ul className="flex flex-col gap-4 font-GR text-TEXT text-BLACK">
            <li>Товаров (2)</li>
            <li>Скидка: 300 ТМТ</li>
            <li>Итоговая стоимость: 2600 ТМТ</li>
          </ul>
        </div>
        <div className="submit">
          <GreenBtn isSubmit text="Перейти к оформлению" />
        </div>
      </form>
    </aside>
  );
};

export default DeliveryOptions;
