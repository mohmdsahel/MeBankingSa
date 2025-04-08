import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Speakers from "./sections/Speakers.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";

import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import Collaboration from "./sections/Collaboration.jsx";
import { BeamAnimation } from "./components/BeamAnimation.jsx";


const App = () => {
  return (
    <main className="overflow-hidden">
      <BeamAnimation/>
      <Header />
      <Hero />
      <About />
      <Speakers />
      
      <Features />
      
      <Faq />
      <Collaboration/>
      <Pricing />
      
      <Contact/>
      <Footer />
    </main>
  );
};

export default App;
