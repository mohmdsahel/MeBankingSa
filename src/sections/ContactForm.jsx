import { useState } from "react";

const ContactForm = ({ onSubmit, onClose, showModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md p-4 sm:p-6 rounded-[1.5rem] bg-gradient-to-br from-s2/20 to-s1 border-2 border-s3/30 backdrop-blur-xl my-4">
        <button 
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-p1"
          onClick={onClose}
        >
          ✕
        </button>
        
        <h4 className="text-center mb-3 sm:mb-4 h4 text-lg sm:text-xl text-white">
          Get in <span className="text-p1">Touch</span>
        </h4>
        
        <form onSubmit={onSubmit} className="space-y-2 sm:space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {/* Form fields with updated styling */}
            <div className="w-full">
              <label className="block text-gray-400 mb-1 text-xs">Your Name*:</label>
              <input 
                type="text" 
                required
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-s2/50 border border-s3/50 focus:border-p1 outline-none text-white text-xs sm:text-sm"
              />
            </div>
            <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Email*:</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-p1 outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Phone Number:</label>
                    <input 
                      type="tel"
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-p1 outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Organization:</label>
                    <input 
                      type="text"
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                
                </div>
                
                <div className="w-full">
                  <label className="block text-n-4 mb-1 text-xs">Your Interest In:</label>
                  <select 
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-p1 outline-none text-white text-xs sm:text-sm [&>option]:bg-p1"
                  >
                    <option value=""></option>
                    <option value="1">Attending</option>
                    <option value="2">Sponsoring/Exhibiting</option>
                    <option value="3">Speaking</option>
                    <option value="4">Other</option>
                  </select>
                </div>
                
               
                
                
                <div className="w-full">
                  <label className="block text-n-4 mb-1 text-xs">Message:</label>
                  <textarea 
                    rows="2"
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-p1 outline-none text-white text-xs sm:text-sm overflow-y-auto resize-none"
                  ></textarea>
                </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-p1 to-p1/70 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;