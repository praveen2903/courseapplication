import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='bg-[#1e3a8a] text-white md:px-12 p-4 max-w-screen-3xl mx-auto rounded-lg'>
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-6'>
                <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src={logo} alt='/' className='w-10 inline-block items-center' />
                    <span className='text-white'>SMARTstudy</span>
                </a>
                <p className='md:w-1/2'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
                <div className='md:w-1/2 flex'>
                    <input type='email' placeholder='enter your email .....' id='email' name='email' className='bg-[#5b21b6] py-2 px-4 rounded-md focus:outline-none placeholder:text-white' />
                    <input type='submit' value="subscribe"  className='px-4 py-2 bg-secondary -ml-2 cursor-pointer rounded-md hover:bg-white hover:text-primary duration-300 transition-all' />
                </div>
            </div>

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-6 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300'>Overview</a>
                        <a href='/' className='block hover:text-gray-300'>Features</a>
                        <a href='/' className='block hover:text-gray-300'>About</a>
                        <a href='/' className='block hover:text-gray-300'>Pricing</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Help</h4>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300'>How does it works?</a>
                        <a href='/' className='block hover:text-gray-300'>Where to ask question?</a>
                        <a href='/' className='block hover:text-gray-300'>How to play?</a>
                        <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contacts</h4>
                    <ul className='space-y-3'>
                        <p className='hover:text-gray-300'>(012) 1234-567-890</p>
                        <p className='hover:text-gray-300'>123 xyz xyz</p>
                        <p className='hover:text-gray-300'>qwuerybaihefv, qiwu - hrebcl</p>
                        <p className='hover:text-gray-300'>095467</p>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
            <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
            <div className='flex items-center space-x-4'>
                <img src={facebook} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500'/>
                <img src={instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500' />
                <img src={twitter} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500' />
                <img src={linkedin} alt='' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default Footer;