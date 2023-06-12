import Container from "../Container";
import Language from "./Language";
import Links from "./Links";
import SearchBar from "../SearchBar";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header ">
      <Container className="grid grid-cols-HEADER gap-8 items-center py-11 border-b border-b-BLACK border-solid">
        <Title />
        <SearchBar />
        <div className="justify-self-end flex gap-10 items-center">
          <Language />
          <Links />
        </div>
      </Container>
    </header>
  );
};

export default Header;
