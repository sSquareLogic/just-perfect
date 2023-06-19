export interface ICartItem {
  img: string;
  name: string;
  quantity: number;
  fields: { name: string; value: string | number }[];
}
