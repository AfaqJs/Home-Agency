import React from "react";
import { image, image2, image3, image4, image5, image6 } from "../assets";

const Portfolio = () => {
  return (
    <section id='portfolio' className="mt-[4rem] bg-[#F2F5F7] pt-[5rem] pb-[3rem]">
      <div className="portfolio-heading text-center font-poppins ">
        <h2 className="  font-semibold text-[1.6rem]">
          Check out our latest works
        </h2>
        <p className="pt-[12px] text-[13px] pr-[12px] pl-[12px]">
          Magnis modipsae que voloratati andigen daepeditem quiate re porem aut
          labor.
        </p>
      </div>

      <div className="tow-images text-center items-center flex flex-wrap justify-center  ">
        <div className="  mx-[30px] bg-white mt-[3rem] pb-[16px]">
          <img src={image} alt="Motel" className=" " />
          <h2 className="mt-[20px] font-semibold text-[13px] sm:text-[18px]">
            Grand Motel gets an identity brushup
          </h2>
          <p className="mt-[6px] text-[12px] sm:text-[16px]">Identity</p>
        </div>
        <div className="  mx-[30px] bg-white mt-[3rem] pb-[16px]">
          <img src={image2} alt="Motel" className=" " />
          <h2 className="mt-[20px] font-semibold text-[13px] sm:text-[18px]">
            Fresh branding for a creative startup
          </h2>
          <p className="mt-[6px] text-[12px] sm:text-[16px]">Identity</p>
        </div>
      </div>

      <div className="mt-[3rem] flex justify-center flex-wrap">
        <img src={image3} alt=""  className=" mb-[25px] xs:mr-[10px] image image3 "/>
        <img src={image4} alt=""  className=" mb-[25px] image4 image"/>
        <img src={image5} alt=""  className=" mb-[25px] xs:mr-[10px] image5 image"/>
        <img src={image6} alt=""  className="mb-[25px] image6 "/>
      </div>

      <div className=" flex justify-center">
        <div className="shape bg-black w-[8px] h-[8px] rounded-[100%]"></div>
        <div className="shape bg-[#00bc9c] w-[8px] h-[8px] rounded-[100%] mx-[15px] "></div>
        <div className="shape bg-black w-[8px] h-[8px] rounded-[100%]"></div>
        
      </div>
    </section>
  );
};

export default Portfolio;
