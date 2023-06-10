"use client";
import { useEffect, useMemo, useState } from "react";
import DataContext from "@/contexts/DataContext";
import { IFCWithChildren } from "@/types/global.types";
import { ISearch } from "@/types/data/search.types";
import { Languages } from "@/types/data/language.types";
import LocalStorage from "@/utils/LocalStorage";

const DataContextProvider = ({ children }: IFCWithChildren) => {
  const [search, setSearch] = useState<ISearch["search"]>("");
  const [language, setLanguage] = useState<Languages>(
    LocalStorage.getItem("lastLanguage") || "EN"
  );
  const searchMemo = useMemo(
    () => ({ search, setSearch }),
    [search, setSearch]
  );
  const languageMemo = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  useEffect(() => {
    LocalStorage.setItem("lastLanguage", languageMemo.language);
  }, [languageMemo.language]);
  return (
    <DataContext.Provider
      value={{ search: searchMemo, language: languageMemo }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
