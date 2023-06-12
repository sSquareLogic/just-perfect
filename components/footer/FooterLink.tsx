import { IFooterLink } from "@/types/data/footer.types";
import Link from "next/link";

const FooterLink = ({ link, name }: IFooterLink) => {
  return (
    <li className="footer-link text-WHITE font-GR text-XS_TEXT">
      {link.startsWith("/") ? (
        <Link href={link}>{name}</Link>
      ) : (
        <a href={link}>{name}</a>
      )}
    </li>
  );
};

export default FooterLink;
