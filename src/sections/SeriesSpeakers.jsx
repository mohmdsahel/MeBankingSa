import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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