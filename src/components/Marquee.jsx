import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
   
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] '>
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden">
        <h1 className='text-[18vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase  '>we are ochi</h1>
        <h1 className='text-[18vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase  '>we are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee 
