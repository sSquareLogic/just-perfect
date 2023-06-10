import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IFCWithChildren {
  children: ReactNode;
}
export type IStateDispatch<T> = Dispatch<SetStateAction<T>>;
