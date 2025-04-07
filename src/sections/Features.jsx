
import { motion } from "framer-motion";
import { features } from "../constants/index.jsx";

const Features = () => {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-s2 to-s1 ">
     
        <div className="container w-full">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-[3rem] md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-6">
            {features.map(({ id, icon, caption, title, topics, description, attendees }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                className="relative z-2 md:px-16 px-8 md:py-16 py-8 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <h3 className="text-p1 text-2xl font-semibold mb-6">{caption}</h3>
                <h2 className="text-white text-3xl font-bold mb-8">{title}</h2>
                
                {topics && (
                  <div>
                    <ul className="relative grid grid-cols-2 gap-8">
                      <div className="absolute bg-s3/20 top-0 bottom-0 left-1/2 w-[1px] h-full z-10" />
                      <div className="absolute bg-s3/20 top-1/2 left-0 right-0 w-full h-[1px] z-10" />
                      
                      {topics.map((topic, index) => (
                        <li key={index} className="relative flex flex-col items-center text-center group">
                          <div className="relative flex items-center justify-center mx-auto mb-4">
                            <div className="absolute inset-0 bg-s3/5 rounded-full blur-xl group-hover:bg-p1/20 transition-all duration-500" />
                            <div className="flex items-center justify-center border-2 border-s2 rounded-full group-hover:border-p1 transition-all duration-500 shadow-lg size-20 bg-s2/50 relative">
                              <img
                                src={`/images/details-${index + 1}.png`}
                                alt={topic}
                                className="size-12 object-contain z-20 group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <p className="text-gray-300 text-base font-bold leading-relaxed group-hover:text-white transition-colors duration-300">{topic}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rest of the attendees section remains unchanged */}
                {attendees && (
                  <div className="text-gray-300 space-y-8 text-lg">
                    <p className="leading-relaxed">{description}</p>
                    <div className="space-y-6">
                      {[attendees.executives, attendees.leaders, attendees.experts, attendees.teams].map((item, index) => (
                        item && (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-p1 mt-1 text-xl flex-shrink-0">•</span>
                            <p className="leading-relaxed">{item}</p>
                          </div>
                        )
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                      {attendees.departments.map((dept, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-p1 mt-1 text-xl flex-shrink-0">•</span>
                          <p className="leading-relaxed">{dept}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
     
    </section>
  );
};

export default Features;
