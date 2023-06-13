import Container from "../Container";
import HeroItem from "./HeroItem";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="grid grid-cols-HERO gap-8 pb-14">
        <div className="hero-horizontal grid grid-rows-HERO_HORIZONTAL gap-6">
          <HeroItem
            img="/assets/placeholders/hero.jpg"
            direction="horizontal"
          />
          <HeroItem
            img="/assets/placeholders/hero.jpg"
            direction="horizontal"
          />
        </div>
        <div className="hero-horizontal grid grid-cols-HERO gap-6">
          <HeroItem img="/assets/placeholders/hero.jpg" direction="vertical" />
          <HeroItem img="/assets/placeholders/hero.jpg" direction="vertical" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
