"use client";
import { useMemo, useState } from "react";
import UIContext from "@/contexts/UIContext";
import { IFCWithChildren } from "@/types/global.types";

const UIContextProvider = ({ children }: IFCWithChildren) => {
  const [searchFocus, setSearchFocus] = useState(false);
  const searchFocusMemo = useMemo(
    () => ({ searchFocus, setSearchFocus }),
    [searchFocus, setSearchFocus]
  );
  return (
    <UIContext.Provider value={{ searchFocus: searchFocusMemo }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
