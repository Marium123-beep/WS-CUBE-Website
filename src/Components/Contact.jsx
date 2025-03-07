import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Element } from "react-scroll";



export default function Contact() {
    return (
      <Element name="contact">

      <footer className="bg-[#2699fb] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold text-black">WsCube Tech.</h2>
            <p className="mt-2 text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat.
            </p>
            <div className="flex space-x-9 mt-4">
              <a href="#" className="text-xl"><FaSquareFacebook /></a>
              <a href="#" className="text-xl"><SiInstagram /></a>
              <a href="#" className="text-xl"><FaTwitterSquare /></a>
              <a href="#" className="text-xl"><FaGithubSquare /></a>
            
             
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-3 text-black">Solutions</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">Analytics</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Commerce</a></li>
              <li><a href="#" className="hover:underline">Insights</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 text-black">Support</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">API Status</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-black">Company</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>
       
      </footer>
      </Element>
    )
  }