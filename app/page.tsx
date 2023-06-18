import CartSwiper from "@/components/CardSwiper";
import Container from "@/components/Container";
import Popular from "@/components/popular/Popular";
import Hero from "@/components/hero/Hero";
import { newCards, popularCards } from "@/public/data/new_cards";
import Grid from "@/components/grid/Grid";

const Home = () => {
  return (
    <main className="home-main">
      <Hero />
      <Container className="mb-10">
        <CartSwiper items={newCards} title="Новинки" />
        <Popular />
        <CartSwiper items={popularCards} title="Самые популярные товары" />
        <Grid />
      </Container>
    </main>
  );
};

export default Home;
