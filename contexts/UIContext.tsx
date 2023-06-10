import { createContext } from "react";
import { IUIContext } from "@/types/ui/ui.types";

const UIContext = createContext({} as IUIContext);

export default UIContext;
