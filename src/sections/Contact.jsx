import { useState } from "react";
import ContactForm from "./ContactForm";


const Contact = () => { 
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
   
      
      <div id="register" className="container relative">
        <h2 className="text-center text-white text-4xl font-bold m-16">
        "Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">touch</span>"
      </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-10">
          {/* Email Card */}
          <div className="group relative p-8 rounded-3xl border-2 border-s3/30 backdrop-blur-sm bg-s2/20 overflow-hidden hover:border-p1 transition-all duration-300">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                
              </div>
              <h4 className="text-white text-xl font-bold text-center mb-6">Email Us</h4>
              <div className="space-y-3 text-center">
                <a href="mailto:info@meenterpriseai.com" className="block text-gray-300 hover:text-p1 transition-colors">info@meenterpriseai.com</a>
                <a href="mailto:info@letstalk-biz.com" className="block text-gray-300 hover:text-p1 transition-colors">info@letstalk-biz.com</a>
                <a href="mailto:marketing@letstalk-biz.com" className="block text-gray-300 hover:text-p1 transition-colors">marketing@letstalk-biz.com</a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative p-8 rounded-3xl border-2 border-s3/30 backdrop-blur-sm bg-s2/20 overflow-hidden hover:border-p1 transition-all duration-300">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                
                
              </div>
              <h4 className="text-white text-xl font-bold text-center mb-6">Let's Talk</h4>
              <div className="space-y-3 text-center">
                <a href="tel:+442037696179" className="block text-gray-300 hover:text-p1 transition-colors">+44 20 3769 6179</a>
                <a href="tel:+97152953979" className="block text-gray-300 hover:text-p1 transition-colors">+971 52 953 9979</a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="group relative p-8 rounded-3xl border-2 border-s3/30 backdrop-blur-sm bg-s2/20 overflow-hidden hover:border-p1 transition-all duration-300">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                
              </div>
              <h4 className="text-white text-xl font-bold text-center mb-6">Message Us</h4>
              <div className="text-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-p1 to-p1/70 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <ContactForm 
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      </div>
    
  );
};

export default Contact;