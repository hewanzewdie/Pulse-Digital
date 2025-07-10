import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Partners from "./Components/Partners";
import Services from "./Components/Services";
import Solutions from "./Components/Solutions";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Home />      
      <About />
      <Services />
      <Solutions />
      <Testimonials />      
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
