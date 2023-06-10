import { IStateDispatch } from "../global.types";

export type Languages = "RU" | "EN";

export interface ILanguage {
  language: Languages;
  setLanguage: IStateDispatch<Languages>;
}
