import { IStateDispatch } from "../global.types";

export interface ILanguageState {
  languageOpen: boolean;
  setLanguageOpen: IStateDispatch<boolean>;
}
