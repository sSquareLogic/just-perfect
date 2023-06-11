import { Variants } from "framer-motion";
import colors from "@/variables/colors";
export const languageVariants: Variants = {
  arrowRest: {
    rotateX: "0deg",
  },
  arrowActive: {
    rotateX: "180deg",
  },
  dropdownRest: {
    height: "0px",
    opacity: 0,
  },
  dropdownActive: {
    opacity: 1,
    height: "80px",
  },
  itemRest: {
    background: colors.WHITE,
  },
  itemActive: {
    background: colors.GREEN,
  },
};
