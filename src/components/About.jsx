import React from "react";
import { features } from "../constants";
import { heart, lamp } from "../assets";

const AbourUS = () => {
  return (
    <section className="overflow-hidden">
      <div className=" mt-[3rem] text-center">
        <h2 className="ss:text-[.6] text-[1.4rem] mr-auto font-semibold font-poppins md:text-[1.7rem] ">
          Beautiful. Clean. Responsive.
        </h2>
        <p className=" sm:block hidden reen-p text-[13px] font-poppins pt-[14px] ss:text-[14px] md:text-[16px]">
          REEN is a high-quality solution for those who want a beautiful website
          in no <br /> time.  It's fully responsive and will adapt itself to any
          mobile device. iPad<br /> Android, it  doesn't matter. Your
          content will always looks its absolute best.
        </p>
        <p className=" sm:hidden block px-[20px] reen-p text-[12px] font-poppins pt-[14px] ss:text-[14px] md:text-[16px]">
          REEN is a high-quality solution for those who want a beautiful website
          in no  time.  It's fully responsive and will adapt itself to any
          mobile device. iPad Android, it  doesn't matter. Your
          content will alwawys looks its absolute best.
        </p>
      </div>

      <div className="fetures lg:mr-[6rem] lg:ml-[6rem] lg:mt-[4rem] ">
        <div className=" flex flex-col  lg:flex-row justify-between ">
          {features.map((feture) => (
            <div
              key={feture.id}
              className="flex  items-center lg:items-start  lg:flex-row "
            >
              <div className=" hidden  lg:block lg:items-center lg:w-[32px] lg:h-[64px]">
                <img
                  src={feture.icon}
                  alt="icon"
                  className="items-center w-object-contain "
                />
              </div>
              <div className="flex-1 flex items-center lg:items-start flex-col font-poppins lg:w-[20%] lg:ml-6">
              <div className=" lg:hidden mt-[2rem] flex  w-[32px] lg:h-[64px]">
                <img
                  src={feture.icon}
                  alt="icon"
                  className="items-center w-object-contain "
                />
              </div>
                <h2 className="font-bold mt-[12px] lg:mt-[0]">{feture.title}</h2>
                <p
                  className={` text-center lg:text-start lg:w-[90%] lg:text-[15px] mt-[13px] lg:leading-[26px] font-poppins lg:pr-[20px] text-[13px] w-[70%] ss:[50%] sm:w-[45%] sm:text-[14px] md:w-[50%] md:text-[15px]`}
                >
                  {feture.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbourUS;
