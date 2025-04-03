import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";
import { ColourfulText } from "../components/ColourfulText";
import Countdown from "../components/Countdown.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="relative z-2 text-center">
              <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h3 max-md:mb-4 max-md:text-3xl max-md:leading-10 max-sm:text-2xl max-sm:leading-8">
                10th Middle East <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">Banking</span><br />
                AI & Analytics Summit 2025
              </h1>
            
              <p className="h5 mb-8 max-md:mb-6 max-md:text-sm max-sm:text-xs mx-auto">
                <ColourfulText text="LEADING SUMMIT & AWARDS FOR LEADERS IN BANKING" />
              </p>
              <div className="flex items-center justify-center flex-wrap max-md:flex-col max-md:gap-4">
                <div className="flex items-center gap-2">
                  <img src="/images/calendar.svg" alt="calendar" className="w-4 h-4" />
                  <span className="text-xl font-medium text-white max-md:text-lg max-sm:text-base">April 30th (Wednesday) 2025</span>
                </div>
                <span className="text-white/30 mx-2 max-md:hidden">|</span>
                <div className="flex items-center gap-2">
                  <img src="/images/location.svg" alt="location" className="w-4 h-4" />
                  <span className="text-xl font-medium text-white max-md:text-lg max-sm:text-base">
                    Hyatt Regency Riyadh Olaya
                  </span>
                </div>
              </div>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Countdown/>
              </LinkScroll>
            </div>
          </div>
        </div>
      </Element>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video 
          src="/images/herobg.webm" 
          className="w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-s1/50 to-black/70"></div>
      </div>
    </section>
  );
};

export default Hero;
