import { IStateDispatch } from "../global.types";
import { ILanguageState } from "./language.types";

export interface ISearchFocus {
  searchFocus: boolean;
  setSearchFocus: IStateDispatch<boolean>;
}

export interface IUIContext {
  searchFocus: ISearchFocus;
  languageOpen: ILanguageState;
}
