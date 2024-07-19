import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Digital from "./components/Digital";
// import About from "./components/About";
// import Services from "./components/Services";
// import ChooseUs from "./components/ChooseUs";
// import Video from "./components/Video";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./components/ServiceDetail";
import Service from "./pages/Service";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<Service />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
