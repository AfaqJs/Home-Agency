import React from "react";
import { whiteLogo, image, image7, image4, image8 } from "../assets";

const Footer = () => {
  return (
    <section className=" ">
      <div className=" font-poppins py-[5rem] bg-[#2F4052] text-white flex justify-center flex-wrap">
        <div className="w-[80%] text-center lg:w-[20%] lg:text-start lg:pr-[30px]">
          <h2 className=" capitalize">WHO WE ARE</h2>
          <img src={whiteLogo} alt="" className="pt-[20px] logo" />
          <p className="magnis max-w-[300px] text-[#A3B1BF] pt-[20px] text-[14px] ">
            Magnis modipsae voloratati andigen daepeditem quiate re porem que
            aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes
            maio es dem tumquam.
          </p>
          <h4 className="pt-[20px] cursor-pointer text-[14px] text-[#A3B1BF]">
            More about us
          </h4>
        </div>
        <div className="lg:pr-[30px] port-images w-[80%] lg:w-[20%] lg:mt-[0] mt-[50px] port-images text-center lg:text-start">
          <h2 className=" capitalize">LATEXT WORK</h2>
          <div className=" flex pt-[20px] justify-center lg:justify-start">
            <img src={image} alt="" className=" w-[40%] h-[40%] mr-[10px]" />
            <img src={image7} alt="" className=" w-[40%] h-[40%]" />
          </div>
          <div className=" flex mt-[10px] justify-center lg:justify-start">
            <img src={image4} alt="" className=" w-[40%] h-[40%] mr-[10px]" />
            <img src={image8} alt="" className=" w-[40%] h-[40%]" />
          </div>
        </div>
        <div className=" in-touch lg:w-[20%] lg:pr-[30px] lg:mt-[0] mt-[50px] text-center lg:text-start">
          <h2 className=" capitalize">GET IN TOUCH</h2>
          <p className="getIntouch max-w-[300px] text-[#A3B1BF] pt-[10px] text-[14px]">
            Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et
            consent accullignis dentibea autem inisita.
          </p>
          <ul className=" text-[#A3B1BF] pt-[10px] text-[12px]">
            <li className="pt-[5px]">84 Street, City, State 24813</li>
            <li className="pt-[5px]">+00 (123) 456 78 90</li>
            <li className="pt-[5px]">info@reen.com</li>
          </ul>
        </div>
        <div className=" upadates lg:mt-[0] mt-[50px] text-center lg:text-start">
          <h2 className="  capitalize">FREE UPDATES</h2>
          <p className="max-w-[300px] text-[#A3B1BF] pt-[10px] text-[14px]">
            Conecus iure posae volor remped modis aut lor volor accabora incim
            resto explabo.
          </p>
          <div className=" relative">
            <input
              type="text"
              placeholder="Enter your email address "
              className=" relative py-[15px] px-[20px] pr-[145px] mt-[10px] rounded-[3px] bg-[#4E5C6C] text-[12px]"
            />
            <button className=" hover:bg-[#516C86] capitalize absolute py-[7px] px-[20px] bg-[#00bc9c] top-[30%] right-[5%] font-medium text-[13px] hbg-[#00bc9c] text-white rounded-[4px] hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
