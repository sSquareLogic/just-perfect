"use client";
import { IDataContext } from "@/types/data/data.types";
import { createContext } from "react";

const DataContext = createContext({} as IDataContext);

export default DataContext;
