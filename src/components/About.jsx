import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#252916] ">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach : </h1>
          <button className="py-6 px-10 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase">
            Read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full  "></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-green-300"> </div>
      </div>
    </div>
  );
}

export default About;
