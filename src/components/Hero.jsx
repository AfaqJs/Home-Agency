import React from "react";

("../assets/hero.png");
const Hero = () => {
  return (
    <div id="home" className=" bg-[url('../public/assets/images/hero.png')] bg-no-repeat bg-cover bg-center w-[100%] h-[14rem] ss:[20rem] xs:h-[20rem] sm:h-[30rem] md:[44rem] lg:h-[45rem] relative">
      <div className="hero-content w-[100%]">
        <h1 className="text-white font-bold font-poppins h2style ss:text-[1.8rem] md:text-[2.5rem] text-[1.5rem]">
          Made for Designers
        </h1>
        <p className="text-white py-[6px] hero-text text-[11px] ss:text-[14px] md:text-[17px] font-poppins px-[10px]">
          Create your online portfolio in minutes with the professionally and
          lovingly designed  REEN  website template. Customize your site
          with versatile and easy to use features.
        </p>
        <button className="  hover:bg-[#516B85] sm:text-[14px] sm:px-[25px] sm:mt-[13px]  px-[24px] py-[10px] font-medium mt-[9px] text-[10px] bg-[#00bc9c] text-white  hover:ring-2  hover:ring-offset-2  transition-all ease-out duration-300 rounded-[5px]">
          Get started now
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
