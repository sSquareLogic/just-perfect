import Link from "next/link";
import Image from "next/image";
import LinkItem from "./LinkItem";
const Links = () => {
  return (
    <ul className="links flex items-center gap-6">
      <LinkItem link="/user" src={"/assets/icons/user.svg"} />
      <LinkItem link="/favourites" src={"/assets/icons/favourite.svg"} />
      <LinkItem link="/cart" src={"/assets/icons/cart.svg"} />
    </ul>
  );
};

export default Links;
