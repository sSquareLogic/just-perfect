import Container from "../Container";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header ">
      <Container className="grid grid-cols-HEADER gap-8 items-center py-11 border-b border-b-BLACK border-solid">
        <Title />
        <SearchBar />
      </Container>
    </header>
  );
};

export default Header;
