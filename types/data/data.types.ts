import { ILanguage } from "./language.types";
import { ISearch } from "./search.types";

export interface IDataContext {
  search: ISearch;
  language: ILanguage;
}
