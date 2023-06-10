"use client";
import { IFCWithChildren } from "@/types/global.types";
import UIContextProvider from "./UIContextProvider";
import DataContextProvider from "./DataContextProvider";

const GlobalProvider = ({ children }: IFCWithChildren) => {
  return (
    <DataContextProvider>
      <UIContextProvider>{children}</UIContextProvider>
    </DataContextProvider>
  );
};

export default GlobalProvider;
