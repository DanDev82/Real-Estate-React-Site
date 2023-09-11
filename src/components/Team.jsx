import {useState} from 'react'
import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'


const Team = ({title, content, image}) => {
  const [hover, setHover] = useState(false)
  return (
    <>
    <div className="text-center md:h-[250px] w-full mb-[80px]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img className="rounded-md w-full h-full object-cover ease duration-300" src={image} alt="" />
      <div className={`${hover ? "flex items-center justify-center gap-2 bg-slate-500 opacity-80 mt-[-40px] rounded-md py-3 text-white w-full" : "hidden"}`}>
        <FaFacebookF />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
      </div>
      <h3 className="text-xl pt-4 pb-2">{title}</h3>
      <p className="font-light text-sm">{content}</p>
    </div>    
    </>
  )
}

export default Team