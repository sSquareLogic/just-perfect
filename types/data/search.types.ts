import { IStateDispatch } from "../global.types";

export interface ISearch {
  search: string;
  setSearch: IStateDispatch<string>;
}
