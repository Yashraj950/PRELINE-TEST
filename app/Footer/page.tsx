import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github, YoutubeIcon } from 'lucide-react'
import { FaLocationPinLock, FaXmark } from 'react-icons/fa6'
import { GrLocation } from "react-icons/gr";
import { CiGlobe } from 'react-icons/ci'
import { FiMessageSquare } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-[#171717] border-t-[1px] border-neutral-700  text-white relative ">
      {/* Background Image */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h4 className="text-xl semibold mb-4">Subscribe & get 10% off</h4>
        <div className="flex items-center justify-start gap-2  space-y-2">
              <Input
                type="email"
                placeholder="Enter  email address"
                className="bg-neutral-900 relative top-1 py-6  bg-opacity-50 text-white w-80 border-neutral-700"
              />
              <Button type="submit" className="bg-blue-600 py-6 px-6 hover:bg-blue-700 text-white">
               Sin Up
              </Button>
            </div>
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          opacity: 0.2
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Help</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/about" className="hover:underline  text-gray-400 hover:text-white  transition-colors">FAQs</Link></li>
              <li><Link href="/shorten" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Subscription</Link></li>
              <li><Link href="/contact" className="hover:underline   text-gray-400 hover:text-white transition-colors">Order Status</Link></li>
              <li><Link href="/contact" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/contact" className="hover:underline   text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Gift Cards</Link></li>
              <li><Link href="/about" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Find a Store</Link></li>
              <li><Link href="/shorten" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline  text-gray-400 hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/about" className="hover:underline  text-gray-400 hover:text-white  transition-colors">New features</Link></li>
              <li><Link href="/shorten" className="hover:underline  text-gray-400 hover:text-white  transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:underline   text-gray-400 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/contact" className="hover:underline   text-gray-400 hover:text-white transition-colors">Purpose</Link></li>
            </ul>
           
          </div>

          {/* Newsletter Signup */}
          <div>
             <div className="flex gap-2  pb-2 pt-2 hover:rounded-lg ">
             <GrLocation className="relative top-1"/>
                          <p className=" text-white hover:text-gray-400  ">Location</p>
                        </div>
                        <div className="flex gap-2  pb-2 pt-2 hover:rounded-lg ">
                        <CiGlobe className="relative top-1"/>
                          <p className=" text-white hover:text-gray-400 ">United Kingdom</p>
                        </div>
                        <div className="flex gap-2  pb-2 pt-2 hover:rounded-lg ">
                        <FiMessageSquare  className="relative top-1"/>
                          <p className=" text-white hover:text-gray-400 ">Send Message</p>
                        </div>

                        <span className="flex gap-2 font-bold  pb-5 pt-7 hover:rounded-lg ">
                       
                          <p >Stay connection</p>
                        </span>



                        <div className="flex space-x-4">
             
            
              <a href="/instagram"  target='_blank' className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={17} />
              </a>
              <a href="/linkedin"  target='_blank'  className="text-gray-300 hover:text-white transition-colors">
              <FaXmark  size={20} />
              </a>
              <a href="/github"  target='_blank' className="text-gray-300 hover:text-white transition-colors">
                  <YoutubeIcon size={19} />
              </a>
            </div>
           
           
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 sm:mb-0">&copy;2025 Company ❤️ Wanted Yash  ❤️. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

