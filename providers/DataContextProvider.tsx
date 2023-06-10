"use client";
import { useMemo, useState } from "react";
import DataContext from "@/contexts/DataContext";
import { IFCWithChildren } from "@/types/global.types";
import { ISearch } from "@/types/data/search.types";

const DataContextProvider = ({ children }: IFCWithChildren) => {
  const [search, setSearch] = useState<ISearch["search"]>("");
  const searchMemo = useMemo(
    () => ({ search, setSearch }),
    [search, setSearch]
  );
  return (
    <DataContext.Provider value={{ search: searchMemo }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
