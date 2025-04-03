import { motion } from "framer-motion";

const About = () => {
  const slideIn = {
    initial: { 
      x: -100,
      opacity: 0 
    },
    animate: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black/70 to-s1"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            variants={slideIn}
          >
            "Summit At A <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">Glance</span>"
          </motion.h2>

          {[1, 2, 3, 4].map((index) => (
            <motion.p 
              key={index}
              className="text-gray-300 mb-6"
              variants={slideIn}
            >
              {index === 1 && "By 2025, GenAI is expected to contribute up to $340 billion annually to the global banking industry through enhanced productivity and decision-making."}
              {index === 2 && "Saudi Arabia's banking sector is rapidly adopting AI and analytics in line with Vision 2030 goals. In 2023, key initiatives include frameworks from the Saudi Data and Artificial Intelligence Authority (SDAIA) and partnerships between banks and tech firms to enhance secure data handling and personalized services. Open banking is also growing, with new SAMA licenses for fintech enabling innovations like Payment Initiation Services (PIS). These advancements drive customer-centric solutions and operational efficiency, with leading banks establishing AI centres to enhance customer experiences and streamline processes."}
              {index === 3 && "Join us at the 10th Annual Middle East Banking AI & Analytics Summit 2025 to explore crucial topics in the banking sector, such as the role of AI in regulatory compliance, risk management, customer trust, and personalization. Additionally, sessions will focus on generative AI's impact on banking, sustainable practices through analytics, and new AI-driven payment solutions and much more."}
              {index === 4 && "In addition to exclusive networking opportunities, the #MEBANKINGTECH Awards will honor pioneering institutions and solution providers for their contributions in advancing sustainable financial ecosystem through cutting-edge technologies."}
            </motion.p>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {[1, 2, 3].map((index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-lg"
              variants={imageVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={`/images/summit-${index}.jpg`}
                alt={`Summit Image ${index}`}
                className="w-full h-64 object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-40"
                whileHover={{ 
                  backgroundColor: "#0055ff72"
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;