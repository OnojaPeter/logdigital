import Hero from "../components/Hero";
// import Digital from "../components/Digital";
import About from "../components/About";
import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import CoreValues from "../components/CoreValues";
// import Video from "../components/Video";


function Home() {

  return (
    <>
      <Hero />
      {/* <Digital /> */}
      <About />
      <Services />
      {/* <Video /> */}
      <ChooseUs />
      <CoreValues />
    </>
  )
}

export default Home