import React from 'react'
import logo from "../assets/logo.png"
import {GrLanguage} from 'react-icons/gr'
import { useState } from 'react';
import { useEffect } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

function NavBar() {
    const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    const [isMenuOpen,SetIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
        SetIsMenuOpen(!isMenuOpen)
    }

    const handleToggle=(e)=>{
        if(e.target.checked){
            setTheme("black");
        }
        else{
            setTheme("light");
        }
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme)
        const localTheme=localStorage.getItem("theme");

        document.querySelector("html").setAttribute("data-theme",localTheme);
    },[theme])
    const navItems=[
        {link:"overview",path:"home"},
        {link:"Feature",path:"features"},
        {link:"About",path:"about"},
        {link:"Pricing",path:"pricing"}
    ]


  return (
    <div>
        <nav className=' m-2 rounded-3xl border-b bg-gradient-to-r from-[#bae6fd] to-[#60a5fa] md:px-14 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center p-1'>
                <div className='flex space-x-14  items-center'>
                    <a href='/' className='text-xl md:text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt='logo' className='w-16 inline-block items-center'/>
                        <span className='text-[#1d4ed8]'>SMART<span className='text-[#fbbf24]'>study</span></span>
                    </a>
                    <ul className='md:flex space-x-12 text-white hidden cursor-pointer'>
                        {
                            navItems.map(({link,path})=>
                                <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300'>{link}</Link>
                            )
                        }
                    </ul>
                </div>
                <div className='space-x-12 hidden md:flex items-center text-white'>
                    <a href='/' className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/><span>Language</span></a>
                    <button className='bg-secondary rounded-full py-2 px-4 transiton-all duration-300 hover:text-white hover:bg-indigo-600'>
                        Sign Up
                    </button>
                    <div>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggle} checked={theme==="light"? false: true}/>
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        </label>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none text-primary focus:text-gray-300'>
                        {
                            isMenuOpen? (<AiOutlineClose className='w-6 h-6'/>) : (<AiOutlineMenu className='w-6 h-6'/>)
                        }

                    </button>

                </div>
            </div>
            <div className='fixed md:hidden'>
                <div className={`space-y-4 px-8 pt-2 pb-5 cursor-pointer bg-secondary ${isMenuOpen ? "block fixed top-16 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link,path})=>
                            <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} onClick={toggleMenu} className='block text-white md:hidden hover:text-gray-300'>{link}</Link>
                        )
                    }

                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default NavBar