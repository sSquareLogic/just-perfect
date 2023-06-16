import { popularCategories } from "@/public/data/popular_categories";
import Container from "../Container";
import LinkArrow from "../LinkArrow";
import SectionTitle from "../SectionTitle";
import PopularCard from "./PopularCard";
import { v4 } from "uuid";

const Popular = () => {
  return (
    <section className="popular">
      <Container className="flex flex-col gap-8 py-14">
        <div className="flex items-center gap-8 justify-between">
          <SectionTitle title="Самые популярные категории" />
          <LinkArrow link="/" text="Смотреть все категории" />
        </div>
        <div className="grid grid-cols-THREE_FR gap-8">
          {popularCategories.map((popularCategory) => (
            <PopularCard
              img={popularCategory.img}
              link={popularCategory.link}
              title={popularCategory.title}
              key={v4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Popular;
