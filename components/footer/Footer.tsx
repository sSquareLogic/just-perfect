import Container from "../Container";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-BLACK">
      <Container className="grid grid-cols-FOOTER gap-28">
        <FooterLinks />
      </Container>
    </footer>
  );
};

export default Footer;
