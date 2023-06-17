import { gridItems } from "@/public/data/grid";
import SectionTitle from "../SectionTitle";
import GridItem from "./GridItem";
import { v4 } from "uuid";

const Grid = () => {
  return (
    <section className="grid-section flex flex-col gap-8 py-14">
      <SectionTitle
        align="center"
        title="Мы в Instagram @justperfect"
        link="/"
      />
      <div className="grid grid-cols-FOUR_FR gap-6">
        {gridItems.map((item) => (
          <GridItem img={item.img} link={item.link} key={v4()} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
