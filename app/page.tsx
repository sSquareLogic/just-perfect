import CartSwiper from "@/components/CardSwiper";
import Container from "@/components/Container";
import Popular from "@/components/popular/Popular";
import Hero from "@/components/hero/Hero";
import { newCards } from "@/public/data/new_cards";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Container className="mb-10">
        <CartSwiper items={newCards} title="Новинки" />
        <Popular />
      </Container>
    </main>
  );
};

export default Home;
