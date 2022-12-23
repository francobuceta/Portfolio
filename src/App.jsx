import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  )
}

export default App;