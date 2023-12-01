import FooterLink from "./FooterLink";
import { IFooterLinksItem } from "@/types/data/footer.types";

const FooterLinksItem = ({ items, title }: IFooterLinksItem) => {
  return (
    <li className="footer-links-item flex flex-col gap-6">
      <h6 className="text-WHITE text-SM_TEXT font-GR font-bold">{title}</h6>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <FooterLink key={i} link={item.link} name={item.name} />
        ))}
      </ul>
    </li>
  );
};

export default FooterLinksItem;
