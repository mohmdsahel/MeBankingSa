import { motion } from "framer-motion";
import SeriesSpeakers from "./SeriesSpeakers";
import { LampContainer } from "../components/LampContainer";

const speakers = [
  {
    name: "FAHAD ALTWAIJRI",
    role: "Chief Information Officer",
    company: "Bank AlJazira",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/1.png"
  },
  {
    name: "ADEL THUWAYI",
    role: "Chief Technology Officer",
    company: "GIG Saudi",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/2.png"
  },
  {
    name: "SHAHID SALEEM MOHAMMED",
    role: "Senior Advisor - AI",
    company: "alinma",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/7.png"
  },
  {
    name: "ENG. MAHA E. ALQAHTANI",
    role: "Senior Director Data Management",
    company: "STC Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/3.png"
  },
  {
    name: "FAHAD BIN THABIT",
    role: "Director Digital Data & Performance",
    company: "Al Rajhi Takaful",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/4.png"
  },
  {
    name: "NAHIM BASSA",
    role: "Chief Strategy & Transformation Officer",
    company: "Confidential",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/5.png"
  },
  {
    name: "TALHA BIN HAFEEZ",
    role: "Head of Open Banking, Banking as a Service & Fintech Solutioning",
    company: "Bank AlBilad",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/6.png"
  },
  {
    name: "SALMAN AKHTAR",
    role: "Chief Executive Officer",
    company: "AdalFi",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/8.png"
  },
  {
    name: "SHAHID SALEEM MOHAMMED",
    role: "Senior Advisor - AI",
    company: "alinma",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/13.png"
  },
  {
    name: "LADLE PATEL",
    role: "Senior Advisor - AI Factory",
    company: "Arab National Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/11.png"
  },
  {
    name: "HUSAIN EBRAHIM",
    role: "AI Specialist",
    company: "Nutanix",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/10.png"
  },
  {
    name: "JOHN BAILEY",
    role: "Solutions Consulting Director EMEA",
    company: "SS&C Blue Prism",
    image: "https://mebankingai.com/sa/images-event/speakers/2025/12.png"
  }
];

const Speakers = () => {
  return (
    <section >
      <motion.div 
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: [0.5, 1, 1, 0.5],
              backgroundPosition: ["0% 100%", "100% 100%"],
              boxShadow: [
                "0 0 10px rgba(0, 163, 255, 0)",
                "0 0 20px rgba(0, 163, 255, 0.5)",
                "0 0 30px rgba(0, 163, 255, 0.3)",
                "0 0 10px rgba(0, 163, 255, 0)"
              ]
            }}
            transition={{ 
              duration: 3
              ,
              repeat: Infinity,
              ease: "linear"
            }}
            className="faq-glow_before relative z-2 border-2 border-s2 bg-gradient-to-r from-[#00A3FF]/20 via-[#0057FF]/40 to-[#00A3FF]/20 bg-[length:200%_100%]"
          />
      <div id="speakers" className="container max-w-[90rem] mx-auto">
        <LampContainer />
        <div className="mt-[-20rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
                <div className="rounded-2xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-p1 rounded-2xl z-10 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>
                <motion.div 
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-20"
                >
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">{speaker.name}</h3>
                  <p className="text-p1 text-sm uppercase mb-1 tracking-wider">{speaker.role}</p>
                  <p className="text-p1 text-sm uppercase tracking-wider">{speaker.company}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        
      </div>
      <SeriesSpeakers />
      
    </section>
    
  );
};

export default Speakers;