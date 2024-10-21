import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentation"].map((item, index) => {
          return (
            <div className="maskar">
                <div className="flex items-center  overflow-hidden  w-fit">
                    {index === 1 && (<div className=" mr-[1vw] w-[8vw] rounded-md h-[5vw] relative top-[.4vw] bg-green-500"> </div>)}
              <h1 className=" uppercase text-[7vw] font-['Founders_Grotesk'] leading-[6vw] tracking-tighter font-medium">
                {item}
              </h1>
            </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {[
          " For public and private companies",
          " From the first pitch to IPO",  
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
