import { footerLinks } from "@/settings/footer";
import FooterLinksItem from "./FooterLinksItem";
import { v4 } from "uuid";

const FooterLinks = () => {
  return (
    <ul
      className="footer-links grid"
      style={{ gridTemplateColumns: `repeat(${footerLinks.length}, 1fr)` }}
    >
      {footerLinks.map((footerLink) => (
        <FooterLinksItem
          items={footerLink.items}
          key={v4()}
          title={footerLink.title}
        />
      ))}
    </ul>
  );
};

export default FooterLinks;
