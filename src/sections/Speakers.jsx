import { motion } from "framer-motion";
import SeriesSpeakers from "./SeriesSpeakers";

const speakers = [
  {
    name: "CHRIS MALACHOWSKY",
    role: "FOUNDER AND NVIDIA FELLOW",
    company: "NVIDIA",
    image: "/images/speakers/speaker1.png"
  },
  {
    name: "MILDA MITKUTE",
    role: "CO-FOUNDER",
    company: "VINTED",
    image: "/images/speakers/speaker2.png"
  },
  {
    name: "DYLAN FIELD",
    role: "CO-FOUNDER & CEO",
    company: "FIGMA",
    image: "/images/speakers/speaker3.png"
  },
  {
    name: "NIK STORONSKY",
    role: "FOUNDER & CEO",
    company: "REVOLUT",
    image: "/images/speakers/speaker4.png"
  },
  {
    name: "CHRIS MALACHOWSKY",
    role: "FOUNDER AND NVIDIA FELLOW",
    company: "NVIDIA",
    image: "/images/speakers/speaker1.png"
  },
  {
    name: "MILDA MITKUTE",
    role: "CO-FOUNDER",
    company: "VINTED",
    image: "/images/speakers/speaker2.png"
  },
  {
    name: "DYLAN FIELD",
    role: "CO-FOUNDER & CEO",
    company: "FIGMA",
    image: "/images/speakers/speaker3.png"
  },
  {
    name: "NIK STORONSKY",
    role: "FOUNDER & CEO",
    company: "REVOLUT",
    image: "/images/speakers/speaker4.png"
  },
  {
    name: "CHRIS MALACHOWSKY",
    role: "FOUNDER AND NVIDIA FELLOW",
    company: "NVIDIA",
    image: "/images/speakers/speaker1.png"
  },
  {
    name: "MILDA MITKUTE",
    role: "CO-FOUNDER",
    company: "VINTED",
    image: "/images/speakers/speaker2.png"
  },
  {
    name: "DYLAN FIELD",
    role: "CO-FOUNDER & CEO",
    company: "FIGMA",
    image: "/images/speakers/speaker3.png"
  },
  {
    name: "NIK STORONSKY",
    role: "FOUNDER & CEO",
    company: "REVOLUT",
    image: "/images/speakers/speaker4.png"
  },
  // Add 8 more speakers with similar structure
];

const Speakers = () => {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-s1 to-s2">
      <div className="container max-w-[90rem] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
         2025 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">Speakers</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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