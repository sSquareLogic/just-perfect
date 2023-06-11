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

  const [languageOpen, setLanguageOpen] = useState(false);
  const languageOpenMemo = useMemo(
    () => ({ languageOpen, setLanguageOpen }),
    [languageOpen, setLanguageOpen]
  );
  return (
    <UIContext.Provider
      value={{ searchFocus: searchFocusMemo, languageOpen: languageOpenMemo }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
