import { IStateDispatch } from "../global.types";
import { ILanguageState } from "./language.types";

export interface ISearchFocus {
  searchFocus: boolean;
  setSearchFocus: IStateDispatch<boolean>;
}

export interface INewsletterFocus {
  newsletterFocus: boolean;
  setNewsletterFocus: IStateDispatch<boolean>;
}

export interface IUIContext {
  searchFocus: ISearchFocus;
  newsletterFocus: INewsletterFocus;
  languageOpen: ILanguageState;
}
