import { ICartItem } from "@/types/data/cart.types";

export const cartItems: ICartItem[] = [
  {
    img: "/assets/placeholders/cart-1.jpg",
    name: "Куртка кожаная женская",
    quantity: 1,
    fields: [
      {
        name: "Размер",
        value: "S",
      },
      {
        name: "Цвет",
        value: "бежевый",
      },
      {
        name: "Стоимость",
        value: "2000 ТМТ",
      },
    ],
  },
  {
    img: "/assets/placeholders/cart-2.jpg",
    name: "Джинсы женские",
    quantity: 5,
    fields: [
      {
        name: "Размер",
        value: "S",
      },
      {
        name: "Цвет",
        value: "голубой",
      },
      {
        name: "Стоимость",
        value: "900 ТМТ",
      },
    ],
  },
];
