import SearchBar from "../SearchBar";
import NewsLetter from "./NewsLetter";

const FooterSearch = () => {
  return (
    <div className="footer-search flex flex-col gap-8">
      <SearchBar />
      <NewsLetter />
    </div>
  );
};

export default FooterSearch;
