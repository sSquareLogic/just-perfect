import Card from "@/components/card/Card";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <div className="w-[312px]">
        <Card img="/assets/placeholders/new-1.jpg" name="ASDF" price="300" />
      </div>
    </main>
  );
};

export default Home;
