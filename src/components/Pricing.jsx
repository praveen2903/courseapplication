import React from 'react'
import green from '../assets/Rectangle 18.png'
import red from '../assets/Rectangle 22.png'
import { useState } from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../Variants'

const Pricing = () => {
    const [isYearly,setIsYearly]=useState(false);
    const packages=[
        {
            name:"Start", monthlyprice:19, yearlyprice:199, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",p1:green,p2:green,p3:red,p4:red,p5:red,
        },
        {
            name:"Advance", monthlyprice:39,yearlyprice:399, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",p1:green,p2:green,p3:green,p4:green,p5:red,
        },
        {
            name:"Premium", monthlyprice:49, yearlyprice:499, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",p1:green,p2:green,p3:green,p4:green,p5:green,
        }
    ]

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-5' id='pricing'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Here are all our plans</h2>
            <p className='text-third md:w-1/3 mx-auto px-4'>A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
            <div className='mt-16'>
                <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${isYearly? "bg-primary ml-8 ":"bg-secondary"}`}>

                        </div>
                    </div>
                    <span className='mr-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type='checkbox' id='toggle' className='hidden' checked={isYearly} onChange={()=>setIsYearly(!isYearly)}/>

            </div>
        </div>

        <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.5}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
            {
                packages.map((pkg,index)=>
                <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                    <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                    <p className='text-third text-center my-5'>{pkg.description}</p>
                    <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                        {isYearly ? `$${pkg.yearlyprice}`:`$${pkg.monthlyprice}`}
                        <span className='text-base text-third font-light'>{isYearly? "/year" :  "/month"}</span>
                    </p>
                    <ul className='mt-4 space-y-5 px-4'>
                        <li className='flex gap-2 items-center'><img src={pkg.p1} alt='' className='w-4 h-4'/>Videos of Lessons</li>
                        <li className='flex gap-2 items-center'><img src={pkg.p2} alt='' className='w-4 h-4'/>Homework check</li>
                        <li className='flex gap-2 items-center'><img src={pkg.p3} alt='' className='w-4 h-4'/>Additional practical task</li>
                        <li className='flex gap-2 items-center'><img src={pkg.p4} alt='' className='w-4 h-4'/>Monthly conferences </li>
                        <li className='flex gap-2 items-center'><img src={pkg.p5} alt='' className='w-4 h-4'/>Personal advice from teachers</li>
                    </ul>
                    <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded-2xl hover:bg-primary transition-all duration-300'>Get Started</button>
                    </div>
                </div>

                )
            }
        </motion.div>
    </div>
  )
}

export default Pricing