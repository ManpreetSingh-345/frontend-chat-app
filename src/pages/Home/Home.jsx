import Navbar from "@components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="homepage h-[100vh] min-h-[600px] w-[100vw] min-w-[300px]">
      <Navbar loginButton={true} />
      <Hero />
      <Grid />
      <Footer />
    </div>
  );
};

export default Home;
