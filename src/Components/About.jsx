import React from 'react'
import single from "../assets/img/single.png"
import double from "../assets/img/double.png"
import triple from "../assets/img/triple.png"
import { Element } from "react-scroll";


export default function About(){
    return (

      <Element name="about">
        <div className='py-[100px] px-2'>

            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5'>

             <div  className=' shadow-xl my-4  h-[500px] bg-gray-100 hover:scale-105 duration-500 flex items-center justify-center relative'>
               <img src={single} alt="" className='w-[80px] absolute top-[12px] ' />
               <h1 className='text-black font-bold text-xl md:text-2xl absolute 
               top-[90px]'>Web Development</h1>
               <h1 className='text-black font-bold text-3xl md:text-5xl absolute 
               top-[150px]'>$ 149</h1>
               <p className='text-center text-black text-[12px] md:text-[16px]'><br/><br/><br/><br/>Lorem ipsum is simply <br/> <br/> lorem ipsum is simply dummy text of <br/>the printing <br/> <br/> Lorem Ipsum is simply dumm.</p>
               <button className='bg-[#00df9a] text-black p-3  rounded mt-[370px] ml-[10px] absolute'>Start Trial</button>

             </div>
             <div  className=' shadow-xl  my-4  h-[500px] bg-gray-100 hover:scale-105 duration-500 flex items-center justify-center relative'>
             <img src={double} alt="" className='w-[80px] absolute top-[12px] ' />
             <h1 className='text-black font-bold text-xl md:text-2xl absolute 
               top-[90px]'>Machine Learning</h1>
               <h1 className='text-black font-bold text-3xl md:text-5xl absolute 
               top-[150px]'>$ 149</h1>
            <p className='text-center text-black text-[12px] md:text-[16px]'><br/><br/><br/><br/>Lorem ipsum is simply <br/> <br/> lorem ipsum is simply dummy text of <br/>the printing <br/> <br/> Lorem Ipsum is simply dumm.</p>
            <button className='text-[#00df9a] bg-black p-3  rounded mt-[370px] ml-[10px] absolute'>Start Trial</button>
             </div>
             <div  className=' shadow-xl  my-4  h-[500px] bg-gray-100 hover:scale-105 duration-500 flex items-center justify-center relative'>
             <img src={triple} alt="" className='w-[80px] absolute top-[12px] ' />
             <h1 className='text-black font-bold text-xl md:text-2xl absolute 
               top-[90px]'>Artificial Intelligence</h1>
                <h1 className='text-black font-bold text-3xl md:text-5xl absolute 
               top-[150px]'>$ 149</h1>
                <p className='text-center text-black text-[12px] md:text-[16px]'><br/><br/><br/><br/>Lorem ipsum is simply <br/> <br/> lorem ipsum is simply dummy text of <br/>the printing <br/> <br/> Lorem Ipsum is simply dumm.</p>
                <button className='bg-[#00df9a] text-black p-3  rounded mt-[370px] ml-[10px] absolute'>Start Trial</button>
             </div>

            </div>

        </div>
        </Element>
            
    )}