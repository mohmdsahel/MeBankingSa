import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "YAZID BASTAMI",
    role: "Chief Strategy Officer",
    company: "Vision Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/135.jpg"
  },
  {
    name: "ABDULLAH ALBAR",
    role: "Chief Data Officer",
    company: "Abdul Latif Jameel United Finance",
    image: "https://mebankingai.com/sa/images-event/speakers/109.jpg"
  },
  {
    name: "BRIAN JAMIESON",
    role: "Chief Innovation Officer",
    company: "Lamaa",
    image: "https://mebankingai.com/sa/images-event/speakers/136.jpg"
  },
  {
    name: "KHALED SALEM",
    role: "CIO",
    company: "J-B",
    image: "https://mebankingai.com/sa/images-event/speakers/117.jpg"
  },
  {
    name: "LOGAN SIMPSON",
    role: "Global Chief Information Security Officer",
    company: "Hala",
    image: "https://mebankingai.com/sa/images-event/speakers/115.jpg"
  },
  {
    name: "WALID HEGAB",
    role: "Chief Risk Officer",
    company: "Bidaya Finance",
    image: "https://mebankingai.com/sa/images-event/speakers/125.jpg"
  },
  {
    name: "ENG. MAHA E. ALQAHTANI",
    role: "Director Data Governance Office",
    company: "stc bank",
    image: "https://mebankingai.com/sa/images-event/speakers/118.jpg"
  },
  {
    name: "SALEH AL SUWAIYEL",
    role: "Director Data Analytics & Partner Insight",
    company: "Al Rajhi Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/111.jpg"
  },
  {
    name: "FAHAD BIN THABIT",
    role: "Director Digital Data & Performance",
    company: "Al Rajhi Takaful",
    image: "https://mebankingai.com/sa/images-event/speakers/110.jpg"
  },
  {
    name: "PRASHANT DIXIT",
    role: "Executive Director - Digital",
    company: "Tawuniya",
    image: "https://mebankingai.com/sa/images-event/speakers/132.jpg"
  },
  {
    name: "ZAMIR CHAUDRY",
    role: "Executive Director - Risk",
    company: "Tawuniya",
    image: "https://mebankingai.com/sa/images-event/speakers/131.jpg"
  },
  {
    name: "NAHIM BASSA",
    role: "SVP: Group Head of Strategy & Transformation",
    company: "Bank Aljazira",
    image: "https://mebankingai.com/sa/images-event/speakers/137.jpg"
  },
  {
    name: "SULTAN AL-BAYHANI",
    role: "SVP, Head of Open Banking Business Section, Digital Innovation & Partnership Section",
    company: "Riyad Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/130.jpg"
  },
  {
    name: "MARIA MEDVEDEVA",
    role: "Country Business Manager, KSA & Bahrain",
    company: "Mastercard",
    image: "https://mebankingai.com/sa/images-event/speakers/106.jpg"
  },
  {
    name: "SAFDAR HUSSAIN",
    role: "Head of Data Science",
    company: "Banque Saudi Fransi",
    image: "https://mebankingai.com/sa/images-event/speakers/112.jpg"
  },
  {
    name: "CODEINE CARAGEA",
    role: "Head of Customer Experience",
    company: "Alinma Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/119.jpg"
  },
  {
    name: "MUZAMMIL EBRAHIM",
    role: "Partner: AI & Data | Financial Services - Middle East",
    company: "Deloitte",
    image: "https://mebankingai.com/sa/images-event/speakers/116.jpg"
  },
  {
    name: "LADLE PATEL",
    role: "Senior Advisor - Advance Analytics",
    company: "Arab National Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/134.jpg"
  },
  {
    name: "DR. EMMANUEL MANYONGANISE",
    role: "Customer Experience Strategy Advisor",
    company: "Bank AlBilad",
    image: "https://mebankingai.com/sa/images-event/speakers/133.jpg"
  },
  {
    name: "DR. DEBASHIS DUTTA",
    role: "Senior Advisor - Risk Group",
    company: "Saudi EXIM Bank",
    image: "https://mebankingai.com/sa/images-event/speakers/140.jpg"
  },
  {
    name: "ENG FAHAD ALBAZ",
    role: "Chief Information Security Officer",
    company: "SIMAH - Saudi Credit Bureau",
    image: "https://mebankingai.com/sa/images-event/speakers/114.jpg"
  },
  {
    name: "MOSTAFA MAHMOUD",
    role: "Lead Enterprise Domain Architect, AI Delivery Leader",
    company: "Bank Albilad",
    image: "https://mebankingai.com/sa/images-event/speakers/122.jpg"
  }
];

export const SeriesCard = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "200s");
    }
  };

  const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={mergeClasses(
        "relative z-20 max-w-7xl overflow-hidden",
        "mask-linear-gradient",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        '--transform-direction': 'translateX(-50%)',
      }}
    >
      <motion.ul
        ref={scrollerRef}
        className={mergeClasses(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll"
        )}
        style={{
          animation: start ? `scroll var(--animation-duration) forwards linear infinite` : "none",
          animationPlayState: pauseOnHover ? "running" : "paused",
          transform: "translateX(0)",
        }}
        whileHover={{ animationPlayState: pauseOnHover ? "paused" : "running" }}
      >
        {items.map((speaker, idx) => (
          <motion.li
            key={idx}
            className="relative w-[260px] shrink-0 rounded-3xl border-2 border-s3 bg-s2/50 backdrop-blur-sm overflow-hidden p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-white font-bold text-lg uppercase mb-2">{speaker.name}</h3>
              <p className="text-p1 text-sm uppercase mb-1">{speaker.role}</p>
              <p className="text-p1 text-sm uppercase">{speaker.company}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const SeriesSpeakers = () => {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24">
      <div className="container max-w-[90rem] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Series <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">Speakers</span>
        </motion.h2>
        
        <SeriesCard
          items={speakers}
          direction="left"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default SeriesSpeakers;