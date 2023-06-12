import { navLeftLinks, navRightLinks } from "@/settings/nav";
import Container from "../Container";
import NavLink from "./NavLink";
import { v4 } from "uuid";

const Nav = () => {
  return (
    <nav className="nav">
      <Container className="flex justify-between gap-10">
        <ul className="flex items-center gap-10">
          {navLeftLinks.map((navLeftLink) => (
            <NavLink
              link={navLeftLink.link}
              name={navLeftLink.name}
              key={v4()}
            />
          ))}
        </ul>
        <ul className="flex items-center gap-10">
          {navRightLinks.map((navLeftLink) => (
            <NavLink
              link={navLeftLink.link}
              name={navLeftLink.name}
              key={v4()}
            />
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
