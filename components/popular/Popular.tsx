import LinkArrow from "../LinkArrow";
import PopularCard from "./PopularCard";
import SectionTitle from "../SectionTitle";
import { popularCategories } from "@/public/data/popular_categories";

const Popular = () => {
  return (
    <section className="popular">
      <div className="flex flex-col gap-8 py-14">
        <div className="flex items-center gap-8 justify-between">
          <SectionTitle title="Самые популярные категории" />
          <LinkArrow link="/" text="Смотреть все категории" />
        </div>
        <div className="grid grid-cols-THREE_FR gap-8">
          {popularCategories.map((popularCategory, i) => (
            <PopularCard img={popularCategory.img} link={popularCategory.link} title={popularCategory.title} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
