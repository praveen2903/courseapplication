import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../Variants'

function Banner({banner,heading,subheading,button1,button2}) {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-28'>
            <div className='bg-gradient-to-r from-[#ee9ae5] to-[#5961f9] rounded-xl rounded-br-80px md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    <motion.div variants={fadeIn("down",0.4)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.5}}>
                        <img src={banner} alt='img' className='lg:h-[386px]'/>
                    </motion.div>
                    <motion.div variants={fadeIn("up",0.5)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className='md:w-3/5 '>
                        <h2 className='md:text-7xl text-4xl font-semibold text-white mb-6 leading-relaxed'>{heading}</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8'>
                            {subheading}
                        </p>
                        <div className='space-x-5 space-y-4 '>
                            <button className='hover:bg-primary py-2 px-8 bg-secondary font-bold text-white rounded-xl'>{button1}</button>
                            <button className='hover:bg-primary py-2 px-8 bg-secondary font-bold text-white rounded-xl'>{button2}</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      )
}

export default Banner