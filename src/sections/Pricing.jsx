
const Pricing = () => {
  return (
  
      
      <div id="tickets" className="container relative z-2">
       
      <h2  className="text-4xl text-center font-bold mt-20 m-12 text-white">
            Book your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#0057FF]">tickets!</span>
          </h2>

        <div className="relative">

        <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/middle-east-enterprise-ai-analytics-summit-2025-001441/booking" frameborder="0" height="800" width="100%"></iframe>
        <link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" />

        </div>

       
      </div>
    
  );
};

export default Pricing;
