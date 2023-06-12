"use client";
import { motion } from "framer-motion";
import { IFooterLink } from "@/types/data/footer.types";
import Link from "next/link";
import { navVariants } from "@/animations/nav.animation";

const NavLink = ({ link, name }: IFooterLink) => {
  return (
    <motion.li
      className="nav-link relative"
      whileHover={"lineActive"}
      initial={"lineRest"}
    >
      <Link
        href={link}
        className="inline-block py-10 font-GR text-BLACK text-SM_TEXT"
      >
        {name}
      </Link>
      <motion.span
        className="h-[1px] absolute bottom-9 border-b-2 border-GREEN block"
        variants={navVariants}
      ></motion.span>
    </motion.li>
  );
};

export default NavLink;
