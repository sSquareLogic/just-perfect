"use client";
import { IFCWithChildren } from "@/types/global.types";
import UIContextProvider from "./UIContextProvider";

const GlobalProvider = ({ children }: IFCWithChildren) => {
  return <UIContextProvider>{children}</UIContextProvider>;
};

export default GlobalProvider;
