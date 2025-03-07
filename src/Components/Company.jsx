import React from 'react'
import laptop from "../assets/img/laptop.jpg"
import { Element } from "react-scroll";

export default function Company(){
    return (
        <Element name="company">
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={laptop} alt="" className='inline' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusantium itaque maxime veritatis distinctio perspiciatis aperiam provident hic. Doloribus dolores odit neque eligendi nemo eveniet fuga saepe quo quos culpa.</p>
            <button className='bg-black text-white p-3 rounded w-[30%]'>Get started</button>
        </div>


        </div>
        </Element>
    )
}