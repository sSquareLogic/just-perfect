import { IStateDispatch } from "../global.types";

export interface ISearchFocus {
  searchFocus: boolean;
  setSearchFocus: IStateDispatch<boolean>;
}

export interface IUIContext {
  searchFocus: ISearchFocus;
}
