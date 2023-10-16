import React from 'react'
import about from '../assets/reading.png'
import ballon from '../assets/universe.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../Variants'

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-3'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div variants={fadeIn("right",0.4)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className='md:w-1/2'>
                <img src={about} alt='about' className='rounded-2xl'/>
            </motion.div>
            <motion.div variants={fadeIn("left",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.5}} className='md:w-2/3'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product  
                    <span className='text-secondary'> for many years.</span>
                </h2>
                <p  className='text-third text-lg mb-7'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded-2xl hover:bg-primary transition-all duration-300'>Get Started</button>
            </motion.div>
        </div>
        <div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8' id='about'>
                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className='md:w-1/2'>
                    <img src={ballon} alt='about' className='rounded-2xl'/>
                </motion.div>
                <motion.div variants={fadeIn("right",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className='md:w-2/3'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any 
                        <span className='text-secondary'> time convinent for you.</span>
                    </h2>
                    <p  className='text-third text-lg mb-7'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded-2xl hover:bg-primary transition-all duration-300'>Get Started</button>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default About