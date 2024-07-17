import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Digital from "../components/Digital";
import About from "../components/About";
import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import Video from "../components/Video";
import Footer from "../components/Footer";


function Home() {

  return (
    <>
      <Hero />
      {/* <Digital /> */}
      <About />
      <Services />
      {/* <Video /> */}
      <ChooseUs />
    </>
  )
}

export default Home