import GridItem from "./GridItem";
import SectionTitle from "../SectionTitle";
import { gridItems } from "@/public/data/grid";

const Grid = () => {
  return (
    <section className="grid-section flex flex-col gap-8 py-14">
      <SectionTitle align="center" title="Мы в Instagram @justperfect" link="/" />
      <div className="grid grid-cols-FOUR_FR gap-6">
        {gridItems.map((item, i) => (
          <GridItem img={item.img} link={item.link} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
