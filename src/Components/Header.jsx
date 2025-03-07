import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from "react-scroll";


export default function Header(){
    //toggle menu nahi dekhena tw false
    const [toggle,setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'> 
        <div className='max-w-[1240px] py-[12px] items-center  flex justify-between  mx-auto'>

        <div className='text-3xl font-bold'>
            WsCube Tech
        </div>

        { //use react code for agar navbar open hai tw close ka button show hou.
        //or agar navbar open nahi hai tw : menu  hamburger show hou
         
              toggle ?
         <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl block md:hidden'/> 
         :
         <AiOutlineMenu  onClick={() => setToggle(!toggle)}  className='text-white text-2xl block md:hidden' />

        }

<ul className="hidden md:flex text-white gap-10">
  <li>
    <Link to="home" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
      Home
    </Link>
  </li>
  <li>
    <Link to="company" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
      Company
    </Link>
  </li>
  <li>
    <Link to="resources" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
      Resources
    </Link>
  </li>
  <li>
    <Link to="about" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
      About
    </Link>
  </li>
  <li>
    <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
      Contact
    </Link>
  </li>
</ul>


        {/* Responsive Menu */}

        
        {/* Agar toggle true hai tw hume cross dikhey ga or menu bahar ajaega.. 
        Agar toggle false hai tw hume menu dikhega or menu ander chala jaega.. */}
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
              ${toggle ? 'left-[0]' :  'left-[-100%]'}

           `}>

            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>

        </ul>







        
        </div>
        </div>


    )
}