import { motion } from "framer-motion"; 
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const flipCards = [
  {
    id: 1,
    title: "300",
    subtitle: "INDUSTRY LEADERS",
    icon: "/images/stats.png",
    description: "Connect with industry leaders and innovators shaping the future of enterprise AI"
  },
  {
    id: 2,
    title: "15",
    subtitle: "LIVE TECH DEMO/EXHIBITORS",
    icon: "/images/stats.png",
    description: "Experience cutting-edge technology demonstrations and exhibitor showcases"
  },
  {
    id: 3,
    title: "35",
    subtitle: "SPEAKERS",
    icon: "/images/stats.png",
    description: "Learn from expert speakers sharing insights on AI implementation and innovation"
  },
  {
    id: 4,
    title: "25",
    subtitle: "AWARDS",
    icon: "/images/stats.png",
    description: "Celebrating excellence and innovation in enterprise AI and analytics"
  }
];

// Update the card rendering section:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
  {flipCards.map((card) => (
    <div key={card.id} className="group h-[300px] w-[300px] mx-auto [perspective:1000px]">
      <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0">
          <div className="h-full w-full rounded-2xl bg-s2/20 border-2 border-s3/30 p-8 shadow-xl backdrop-blur-sm flex flex-col items-center justify-center">
            <img src={card.icon} alt={card.subtitle} className="w-16 h-16 mb-4" />
            <h2 className="text-white text-5xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-300 text-sm text-center">{card.subtitle}</p>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-s2 border-2 border-s3/30 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-p1 text-4xl font-bold mb-4">{card.title}</h3>
            <p className="text-white text-lg leading-relaxed">{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      />
        <div className="container relative z-2 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {flipCards.map((card) => (
              <div key={card.id} className="group h-[400px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="absolute inset-0">
                    <div className="h-full w-full rounded-2xl bg-s2/20 border-2 border-s3/30 p-8 shadow-xl backdrop-blur-sm">
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <img 
                          src={card.icon} 
                          alt={card.subtitle}
                          className="absolute inset-0 w-full h-full object-contain opacity-5"
                        />
                        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                          <h2 className="text-white text-7xl font-bold mb-4">{card.title}</h2>
                          <p className="text-gray-300 text-xl uppercase tracking-wider text-center">{card.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-s2 border-2 border-s3/30 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <h3 className="text-p1 text-2xl font-bold mb-4">{card.subtitle}</h3>
                      <p className="text-white/80 text-lg leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="faq-glow_before relative z-2 border-2 border-s2 bg-s1"
        />
          <div className="container flex gap-10 max-lg:block">
            

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          
        
         {/* Summit Highlights Section */}
         <div className="mt-20">
            <h1 className="text-center mb-12">
              <span className="text-4xl font-bold text-white">2024 SUMMIT</span>
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-p1 to-blue-500"> HIGHLIGHTS</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-s3/30 shadow-xl hover:border-p1/50 transition-all duration-300">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/pniOqiQPPPY" 
                  title="8th Middle East Banking AI & Analytics Summit 2024 | KSA Edition" 
                
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-s3/30 shadow-xl hover:border-p1/50 transition-all duration-300">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/Z69pxgyJ-t8" 
                  title="7th Middle East Banking AI & Analytics Summit & Awards" 
                 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
      
    </section>
  );
};

export default Faq;
