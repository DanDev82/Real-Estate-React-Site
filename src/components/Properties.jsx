import React, {useState} from 'react'
import {PiBoundingBoxLight} from 'react-icons/pi'
import {MdOutlineKingBed} from 'react-icons/md'
import {LuBath} from 'react-icons/lu'
import {BiMap} from 'react-icons/bi'
import Accordion from '../components/Accordion'
import Team from '../components/Team'
import Footer from '../components/Footer'


// Create properties
const properties = [
  {
    id: 0,
    price: '$390K',
    tag: 'Single Family',
    feet: '2400 Sqft',
    desc: 'Beautiful neighborhood',
    beds: 4,
    baths: 3,
    year: 2014,
    status: 'For Sale',
    
    color: 'bg-orange-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/1.png'
  },
  {
    id: 1,
    price: '$365K',
    tag: 'Single Family',
    feet: '1800 Sqft',
    desc: 'New pool out back',
    beds: 3,
    baths: 3,
    year: 2012,
    status: 'Sold',
    
    color: 'bg-red-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/2.png'
  },
  {
    id: 2,
    price: '$380K',
    tag: 'Single Family',
    feet: '2200 Sqft',
    desc: 'Convenient to downtown',
    beds: 4,
    baths: 3,
    year: 2009,
    status: 'For Sale',
    
    color: 'bg-orange-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/3.png'
  },
  {
    id: 3,
    price: '$410K',
    tag: 'Single Family',
    feet: '2600 Sqft',
    desc: 'Near shopping center',
    beds: 4,
    baths: 4,
    year: 2018,
    status: 'Sold',
    
    color: 'bg-red-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/4.png'
  },
  {
    id: 4,
    price: 'N/A',
    tag: 'Single Family',
    feet: '3000 Sqft',
    desc: 'Sprinkler System',
    beds: 4,
    baths: 3,
    year: 2020,
    status: 'Sold',
    color: 'bg-red-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/5.png'
  },
  {
    id: 5,
    price: 'From $390K',
    tag: 'Single Family',
    feet: '4000 Sqft',
    desc: 'New construction',
    beds: 5,
    baths: 3,
    year: 2023,
    status: 'For Sale',
    color: 'bg-orange-400',
    image: 'https://preview.colorlib.com/theme/realestate2/img/property/6.png'
  }
]

function Properties() {
  // loop through and build property grid
  const listProperties = properties.map(property =>
    <div className="rounded-lg border-0 outline-none shadow-md hover:shadow-lg ease duration-150 overflow-hidden">
      <div className="relative">
      <img className="w-full h-[230px] rounded-t-lg object-cover" src={property.image} />
      <div className={`absolute top-8 left-6 ${property.color} bg-opacity-70 text-white text-[14px] w-1/4 rounded-full py-2 px-4 text-center`}>{property.status}</div>
      </div>
      <div>
        <div className="px-6 py-4 my-4">
          <h3 className="text-lg text-slate-900 capitalize font-medium">{property.desc}</h3>
          <p className="text-[14px] text-gray-500 mt-1 mb-3">{property.tag}</p>
          <div className="w-[130px] rounded-full px-4 py-2 bg-green-500 text-[15px] text-white font-400 flex items-center justify-center">{property.price}</div>
        </div>
        {/* card footer */}
    <hr />
        <div className="flex justify-between px-6 py-4">
          <div className="flex justify-center items-center gap-2"><PiBoundingBoxLight /> <span className="text-[13px]">{property.feet}</span></div>          
          <div className="flex justify-center items-center gap-2"><MdOutlineKingBed /> <span className="text-[13px]">{property.beds} Bed</span></div>          
          <div className="flex justify-center items-center gap-2"><LuBath /> <span className="text-[13px]">{property.baths} Bath</span></div>          
        </div>
      </div>
    </div>      
  )
  const accordionData = [
    {
      title: 'How does it work?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id expedita quisquam nemo, enim odio esse totam aliquid modi cumque quod maiores pariatur inventore sapiente eaque molestias culpa temporibus aliquam nulla.'
    },
    {
      title: 'Can I pay online?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id expedita quisquam nemo, enim odio esse totam aliquid modi cumque quod.'
    },
    {
      title: 'How long does it take?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id expedita quisquam nemo, enim odio esse totam aliquid.'
    },
    {
      title: 'What\'s your Cancel Policy?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id expedita quisquam nemo, enim odio esse totam aliquid odio esse totam aliquid'
    }
  ]
  const teamData = [
    {
      title: 'John Doe',
      content: 'CEO',
      image: 'https://preview.colorlib.com/theme/realestate2/img/team/1.png'
    },
    {
      title: 'Jane Doe',
      content: 'CFO',
      image: 'https://preview.colorlib.com/theme/realestate2/img/team/2.png'
    },
    {
      title: 'Bob Robert',
      content: 'Sales',
      image: 'https://preview.colorlib.com/theme/realestate2/img/team/3.png'
    },
    {
      title: 'Dan Coria',
      content: 'Developer',
      image: 'https://preview.colorlib.com/theme/realestate2/img/team/4.png'
    },
  ]
  return (
    <div>
      <div className="flex justify-center items-center py-[80px] px-4">
        <div className="max-w-[1200px] w-full">
          <h2 className="text-4xl font-medium text-center mb-8">Popular Properties</h2>

          {/* Properties List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listProperties}
          </div>
        </div> 
      </div>

      {/* Background with white box */}
      <section className="bg-[url('https://preview.colorlib.com/theme/realestate2/img/banner/home_details.png.webp')]  bg-cover  py-8">
        <div className="bg-1/3 bg-white h-[360px] md:w-[550px] w-96 ml-8 my-8 rounded-lg relative">
          <div className="absolute top-[-20px] left-[40px] bg-orange-400 text-white rounded-md px-4 py-2">For Sale</div>
          <div className="p-6 ml-4">
            <h3 className="pt-4 text-xl font-[500] text-[#001D38]">Upscale Downtown Loft</h3>
            <small className="font-thin flex items-center my-2"><span><BiMap /></span>Popular Property</small>
            <hr className="my-6"/>
            {/* Property stats */}
            <div className="flex items-center gap-4">
              <div className="flex  items-center gap-2"><PiBoundingBoxLight /> <span className="text-[13px]">2600</span></div>          
              <div className="flex  items-center gap-2"><MdOutlineKingBed /> <span className="text-[13px]">4 Bed</span></div>          
              <div className="flex  items-center gap-2"><LuBath /> <span className="text-[13px]">4 Bath</span></div>          
            </div>
            <p className="mt-4 font-light">Lorem ipsum dolor sit amet, consectetur elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/* card footer */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-green-600 md:text-lg text-md">$4500/month</div>
              <div><button className="bg-transparent border-orange-500 border-2 rounded-full px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white duration-300">View Details</button></div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex mx-auto items-center justify-center max-w-[1200px] py-[80px] px-4">
        <div className="md:w-[50%] w-full mr-[80px]">
          <h2 className="md:text-4xl text-2xl mb-2 pl-2">Frquently asked questions</h2>
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <div className="md:w-[50%] w-full">
          <img className="rounded-md w-full" src="https://preview.colorlib.com/theme/realestate2/img/banner/accordion.png" alt="" />
        </div>
      </section>
      <section className="mb-8">
        <div className="flex md:gap-8 gap-4 mx-auto max-w-[1200px] w-full items-center overflow-hidden">
          <div className="p-8">
            <h3 className="text-orange-300 md:text-4xl text-2xl font-[500]">200 +</h3>
            <p className="font-light text-gray-500">Properties for sale</p>
          </div>
          <div className="p-8">
            <h3 className="text-orange-300 md:text-4xl text-2xl font-[500]">300</h3>
            <p className="font-light text-gray-500">Properties for sale</p>
          </div>
          <div className="p-8">
            <h3 className="text-orange-300 md:text-4xl text-2xl font-[500]">15</h3>
            <p className="font-light text-gray-500">Properties for sale</p>
          </div>
        </div>
      </section>
      <section className="bg-[url('https://preview.colorlib.com/theme/realestate2/img/banner/testmonial.png.webp')] bg-cover bg-[rgba(42,42,42,0.8)] bg-blend-overlay">
        <div className="py-[80px] px-4 max-w-[800px] mx-auto">
            <p className="text-center text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident hic aut animi laudantium, recusandae alias! Aspernatur, veniam dicta accusamus ducimus, nulla animi itaque repellendus iste error voluptate deserunt nam?</p>
        </div>      
      </section>
      <section className="my-[80px] px-4">
        <h2 className="text-4xl font-medium text-center my-8">Our Team</h2>
        <div className="md:flex grid grid-cols-2 md:justify-center justify-between items-center gap-4 max-w-[1200px] mx-auto">
          {teamData.map(({ title, content, image }) => (
            <Team title={title} content={content} image={image}/>
          ))}
        </div>
      </section>
      <section className="bg-[url('https://preview.colorlib.com/theme/realestate2/img/banner/add_property.png.webp')] bg-cover bg-[#FDAE5C] bg-blend-overlay py-[80px]">
        <div className="md:flex justify-between items-center py-6 px-4 max-w-[1200px] mx-auto">
            <div>
              <h2 className="text-white md:text-4xl text-2xl">Add your property for sale</h2>
            </div>
            <div>
              <div className="flex items-center md:gap-4 gap-2 md:p-0 pt-6">
                <div className="text-white">555-555-5555</div>
                <div><button className="bg-transparent border-white border-2 rounded-full px-4 py-2 text-white hover:bg-orange-500 hover:text-white duration-300">Add Property</button></div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Properties