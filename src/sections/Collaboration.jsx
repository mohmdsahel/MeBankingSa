


import { motion } from "framer-motion";

export const SlidingPartnersRight = [
  {
    icon: "https://meenterpriseai.com/sa/images/partner/06.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/partner/03.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/partner/08.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/partner/07.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/partner/02.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/20.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/12.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/15.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/1.png"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/4.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/10.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/16.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/11.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/21.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/18.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/17.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/22.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/8.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/8.png"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/9.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/2.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/14.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/5.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/past/19.jpg"
  },
  {
    icon: "https://meenterpriseai.com/sa/images/partner/09.jpg"
  }
];

export const SlidingPartnersLeft = [
  {
    icon: "https://meenterpriseai.com/sa/images/media/1.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/2.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/3.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/4.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/5.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/6.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/7.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/8.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/9.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/10.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/11.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/12.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/13.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/14.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/15.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/16.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/17.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/18.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/19.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/20.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/21.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/22.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/23.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/24.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/25.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/26.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/27.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/28.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/29.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/30.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/31.jpg" },
    { icon: "https://meenterpriseai.com/sa/images/media/32.jpg" }
];

const Heading = ({ title, className }) => (
  <h3 className={`text-white text-2xl font-bold mb-8 ${className}`}>{title}</h3>
);

const Collaboration = () => {
  return (
    <div className="container">
      <h2 className="text-center text-white text-4xl font-bold m-16">
      "2025 Thought Leadership <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">PARTNERS</span>"
      </h2>
  
      {/* Top Tier Partners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-medium mb-4">Official Enterprise AI Partner</h3>
          <div className="w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/datarobot.png" alt="DataRobot" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
  
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-medium mb-4">Everyday AI Partner</h3>
          <div className="w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/dataiku.png" alt="Dataiku" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
  
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-medium mb-4">Strategic Partner</h3>
          <div className="w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/nutanix.png" alt="Nutanix" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
  
      {/* Premium Partners */}
      <div className="mb-16">
        <div className="mb-12">
          <h3 className="text-white text-lg font-medium mb-6 text-center">Premium Bronze Partners</h3>
          <div className="flex justify-center gap-8">
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/incorta.png" alt="Incorta" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/tiger.png" alt="Tiger Analytics" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
  
        <div className="mb-12">
          <h3 className="text-white text-lg font-medium mb-6 text-center">Premium Silver Partners</h3>
          <div className="flex justify-center gap-8">
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/ssbc.png" alt="SSBC" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/synechron.png" alt="Synechron" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
  
        <div className="mb-12">
          <h3 className="text-white text-lg font-medium mb-6 text-center">Bronze Partners</h3>
          <div className="flex justify-center gap-8">
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/caiz.png" alt="CAIZ" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
              <img src="/images/partners/adalfi.png" alt="AdalFi" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
  
      {/* Exhibiting Partners */}
      <div>
        <h3 className="text-white text-lg font-medium mb-6 text-center">Exhibiting Partners</h3>
        <div className="flex justify-center gap-8">
          <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/altair.png" alt="Altair" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/sutra.png" alt="Sutra" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-40 h-20 bg-white rounded-lg flex items-center justify-center p-4">
            <img src="/images/partners/selytics.png" alt="Selytics Partners" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    
    
     
     
      {/* Added Sliding Partners Sections */}
      <h2 className="text-center text-white text-4xl font-bold m-16">
        "Series <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">PARTNERS</span>"
      </h2>
      <div className="overflow-hidden container w-full">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-max"
        >
          <ul className="flex flex-row flex-nowrap gap-6">
            {SlidingPartnersRight.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-1 w-[100px] sm:w-[125px] md:w-[150px]"
              >
                <div className="rounded-2xl flex items-center mb-4 justify-center bg-[#a826ff] w-full">
                  <img 
                    src={item.icon} 
                    width={150} 
                    height={150}
                    className="object-contain" 
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
  
     
      {/* Media Partners Section */}
      <h2 className="text-center text-white text-4xl font-bold m-16">
        "Media <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">PARTNERS</span>"
      </h2>
  
      <div className="overflow-hidden container w-full">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-max"
        >
          <ul className="flex flex-row flex-nowrap gap-6">
            {SlidingPartnersLeft.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-1 w-[100px] sm:w-[125px] md:w-[150px]"
              >
                <div className="rounded-2xl flex items-center mb-4 justify-center bg-[#a826ff] w-full">
                  <img 
                    src={item.icon} 
                    width={150} 
                    height={150}
                    className="object-contain" 
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Collaboration;


