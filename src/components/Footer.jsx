import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'


function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-[1200px] mx-auto py-[80px] px-4 md:flex grid grid-cols-2">
        {/* column 1 */}
        <div className="pr-4 md:w-1/4 ">
          <div className="text-2xl items-center">Logo<span className="text-orange-400">.</span></div>
          <ul className="my-8 text-[#919191] font-light">
            <li>email@email.com</li>
            <li className="my-2">555-555-5555</li>
            <li>123 Main st, New York</li>
          </ul>
          {/* socil icons */}
          <div className="flex gap-4">
            <div className="rounded-full border-[#919191] text-[#919191] hover:border-orange-400 hover:text-orange-400 border-[1px] items-center justify-center flex w-[30px] h-[30px]"><FaFacebookF /></div>
            <div className="rounded-full border-[#919191] text-[#919191] hover:border-orange-400 hover:text-orange-400 border-[1px] items-center justify-center flex w-[30px] h-[30px]"><AiOutlineTwitter /></div>
            <div className="rounded-full border-[#919191] text-[#919191] hover:border-orange-400 hover:text-orange-400 border-[1px] items-center justify-center flex w-[30px] h-[30px]"><AiOutlineInstagram /></div>
          </div>
        </div>
        {/* column 2 */}
        <div className="px-4 md:w-1/4 ">
          <h3 className="text-[#001D38] text-lg font-medium">Services</h3>
          <ul className="my-8 text-[#919191] font-light">
            <li className="my-4">Menu Item 1</li>
            <li className="my-4">Menu Item 2</li>
            <li className="my-4">Menu Item 3</li>
            <li className="my-4">Menu Item 4</li>
            <li>Menu Item 5</li>
          </ul>
        </div>
        {/* column 3 */}
        <div className="px-4 md:w-1/4 ">
          <h3 className="text-[#001D38] text-lg font-medium">Useful Links</h3>
          <ul className="my-8 text-[#919191] font-light">
            <li className="my-4">Menu Item 1</li>
            <li className="my-4">Menu Item 2</li>
            <li className="my-4">Menu Item 3</li>
            <li>Menu Item 5</li>
          </ul>
        </div>
        {/* column 4 */}
        <div className="pl-4 md:w-1/2 overflow-hidden">
          <h3 className="text-[#001D38] text-lg font-medium">Subscribe</h3>
          <form className="my-8 flex w-full">
            <input type="text" placeholder='Your email' className="relative text-sm border-[1px] rounded-full px-2 py-2 w-full"/>
            <input type="submit" value="Subscribe" className=" bg-orange-500 w-[100px] text-sm px-4 rounded-full mt-1 mb-1 ml-[-110px] z-10" />
          </form>
          <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="text-center">
        <hr />
        <p className="py-4 text-[#919191]">Copyright &copy;2023 All rights reserved | Stuff and Things</p>
      </div>
    </footer>
  )
}

export default Footer