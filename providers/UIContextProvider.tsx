"use client";
import { useMemo, useState } from "react";
import UIContext from "@/contexts/UIContext";
import { IFCWithChildren } from "@/types/global.types";

const UIContextProvider = ({ children }: IFCWithChildren) => {
  const [ui, setUi] = useState({});
  const uiMemo = useMemo(() => ({ ui, setUi }), [ui, setUi]);
  return <UIContext.Provider value={uiMemo}>{children}</UIContext.Provider>;
};

export default UIContextProvider;
