import React from 'react'
import { ReactTyped } from "react-typed";


export default function Home(){
    return (
        <div className='bg-[#2699fb] w-full py-[50px]'> 

        <div className='max-w-[1240px] mx-auto my-[100px] text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[24px]'>Learn with us </div>
            <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            
            {/* package install:react-typed-npm , copy  "npm i react-typed --force" paste on node , go to "package.json" file and saw the  "react-type" it means successfully install, import above "import { ReactTyped } from "react-typed";" , copy from react document "  <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />" here*/}
            <div className=' text-[20px] md:text-[50px] text-white md:p-[24px]'>Learn 
            <ReactTyped className='pl-3' strings={["Web Development", "Machine Learning","Artificial Intelligence"]} typeSpeed={100} 
            loop={true} 
            backSpeed={100}/>
            
            </div>
            <button className='bg-black text-white p-3 rounded'>Get started</button>

        </div>

        </div>
    )
}