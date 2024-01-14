import Hero from "./Hero";
import Navbar from "components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-blue-300">
        <Hero />
      </div>
    </>
  );
};

export default Home;
