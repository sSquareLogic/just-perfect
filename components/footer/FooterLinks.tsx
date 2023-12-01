import FooterLinksItem from "./FooterLinksItem";
import { footerLinks } from "@/settings/footer";

const FooterLinks = () => {
  return (
    <ul className="footer-links grid" style={{ gridTemplateColumns: `repeat(${footerLinks.length}, 1fr)` }}>
      {footerLinks.map((footerLink, i) => (
        <FooterLinksItem items={footerLink.items} key={i} title={footerLink.title} />
      ))}
    </ul>
  );
};

export default FooterLinks;
