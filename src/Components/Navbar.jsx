import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate()
  return (
    <>
    <div className='flex justify-between items-center w-[full]'>
        <div className='flex gap-3'>
            <img onClick={()=>navigate(-1)} className='w-6 cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-6 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center justify-between gap-4'>
            <p className='font-semibold bg-white text-black rounded-2xl cursor-pointer hidden p-2 md:block'>Explore Premium</p>
            <p className='font-semibold cursor-pointer'>Install App</p>
            <p className='bg-purple-800 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>B</p>
        </div>
       
    </div>
    <div className='flex items-center gap-2 mt-4'>
    <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
    <p className=' text-white px-4 py-1 rounded-2xl cursor-pointer '>Music</p>
    <p className=' text-white px-4 py-1 rounded-2xl cursor-pointer '>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar