import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {IoLogoYoutube} from 'react-icons/io'
import {BsEnvelopeAt} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'
import {useState} from 'react'
import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const newLocal = "md:hidden z-10 cursor-pointer items-center justify-center pt-2"
  return (
    <div className="absolute z-10 bg-white w-full">
    {/* Top bar */}
    <div className="hidden md:flex bg-[#001D38]  text-[#919191] font-light text-[13px] justify-between px-4 py-4">
      <div className="max-w-[1200px] w-full flex justify-between mx-auto">
        <div>
          <p>Welcome to the site</p>
        </div>
        {/* top bar contact info */}
        <div className="flex justify-center items-center">
          <BsEnvelopeAt className="text-orange-400 mr-2"/> <span className="mr-3">info@email.com</span>
          <BsPhone className="text-orange-400 mr-2"/> <span>555-555-5555</span>
          {/* social icons */}
          <div className="flex gap-3 ml-4">
            <MdFacebook  className="text-[#C7C7C7] w-[20px] h-[20px] hover:text-orange-400 hover:cursor-pointer"/>
            <IoLogoYoutube  className="text-[#C7C7C7] w-[20px] h-[20px] hover:text-orange-400 hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
      
    {/* Navbar */}
    <div className="w-full shadow-md p-4">
      <nav className="max-w-[1200px] w-full mx-auto flex justify-between text-[15px]">
        <div className="text-2xl items-center">Logo<span className="text-orange-400">.</span></div>
        <ul className="items-center gap-5 hidden md:flex">
          <li className="hover:text-orange-400">
            <a href="/">Home</a>
          </li>
          <li>
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 rounded-md font-medium text-white">
              <a href="#contact">Contact</a>
            </button>
          </li>
        </ul>


        {/* hamburger */}
        <div onClick={handleClick} className={newLocal}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white text-[#0a192f] flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link></li>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar