import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from '../index.css?inline'

function Hero() {
  return (
    <div className="hero-bg">
      <div className="backdrop-brightness-50 flex justify-center items-center h-screen">
        <div className="overfolw-hidden text-center max-w-[1200px] w-full mx-auto pt-8 px-4">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-[700] mb-5 text-white">Your Best Property Awaits</h1>
          <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="flex gap-4 justify-center items-center mt-8">
            <button className="bg-gradient-to-l from-orange-500 to-orange-400 hover:to-orange-500 hover:from-orange-400 px-4 py-2 rounded-md font-medium text-white">
              <a href="#contact">Properties</a>
            </button>
            <button className="border-solid border-white border-2 px-4 py-2 rounded-md font-medium text-white hover:bg-orange-400">
              <a href="#contact">Properties</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero