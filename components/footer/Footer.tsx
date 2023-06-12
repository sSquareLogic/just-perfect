import Container from "../Container";
import FooterLinks from "./FooterLinks";
import FooterSearch from "./FooterSearch";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-BLACK">
      <Container className="grid grid-cols-FOOTER gap-28">
        <FooterLinks />
        <FooterSearch />
      </Container>
    </footer>
  );
};

export default Footer;
