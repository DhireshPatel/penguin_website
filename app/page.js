import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Species from "../components/Species";
import GlobeSection from "../components/GlobeSection";
import Facts from "../components/Facts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Details />
        <Species />
        <GlobeSection />
        <Facts />
      </main>
      <Footer />
    </>
  );
}
