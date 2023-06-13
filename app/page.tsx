import CartSwiper from "@/components/CardSwiper";
import Container from "@/components/Container";
import Hero from "@/components/hero/Hero";
import { newCards } from "@/public/data/new_cards";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Container className="mb-10">
        <CartSwiper items={newCards} title="Новинки" />
      </Container>
    </main>
  );
};

export default Home;
