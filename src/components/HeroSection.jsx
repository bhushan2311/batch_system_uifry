// src/components/Header.js
import React from 'react';
import Image from 'next/image';
function HeroSection() {
  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Splash Images */}
      <div className="absolute left-[210px] top-[40px] z-0">
        <img src="/Assets/Images/ytored.png" alt="Splash" />
      </div>
      <div className="absolute right-[40px] top-[80px] z-0">
        <img src="/Assets/Images/redflash.png" alt="Splash2" />
      </div>
      
     
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-20 w-4/5 relative z-10">
        <div className="flex w-full justify-between">
          {/* Left Section */}
          <div className="w-2/5 flex flex-col justify-center pr-8">
            <div className="text-4xl font-bold leading-tight">
              Make The Best Financial Decisions
            </div>
            <div className="text-lg leading-relaxed text-gray-600 mt-6">
              Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </div>
            <div className="flex items-center gap-4 mt-10">
              <button className="px-8 py-4 text-lg font-semibold text-white bg-black rounded-md hover:bg-transparent hover:text-black border border-black">
                Get Started
                <img src="/Assets/Images/arrow.png" alt="Arrow" className="ml-2" />
              </button>
              <div className="flex items-center gap-2">
                <img src="/Assets/Images/player.png" alt="Player" className="w-10 h-10" />
                <span className="font-semibold">Watch Video</span>
              </div>
            </div>
            <div>
              <img src="/Assets/Images/design.png" alt="Design" className="w-full" />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="relative w-3/5 mt-[-220px]">
            <img src="/Assets/Images/phone1-3.png" alt="Phone3" className="absolute right-[15px] top-[60px] z-10" />
            <img src="/Assets/Images/phone1-2.png" alt="Phone2" className="absolute right-[42px] top-[145px] z-20" />
            <img src="/Assets/Images/phone1-1.png" alt="Phone1" className="absolute right-[160px] top-[80px] z-30" />
          </div>
        </div>
      </div>
      
      {/* Stars */}
      {/* <div className="absolute left-[20px] top-[60px] z-0">
        <img src="/Assets/Images/smallstar.png" alt="Star" />
      </div> */}
      <div className="absolute right-[20px] top-[700px] z-0">
        <img src="/Assets/Images/smallstar.png" alt="Star" />
      </div>
    </div>
    
  );
}

export default HeroSection;
