import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-3 bg-slate-800 flex-col text-white gap-3 hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] flex flex-col justify-around rounded'>
          <div className='flex pl-8 gap-3 cursor-pointer items-center'>
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
          </div>
          <div className='flex pl-8 gap-3 cursor-pointer  items-center'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-bold'>Search</p>
          </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='flex items-center justify-between p-4'>
            <div className='flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-bold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-7' src={assets.arrow_icon} alt="" />
                <img  className='w-7' src={assets.plus_icon} alt="" />
            </div>
        </div>
        <div className="p-3 bg-gray-900 m-3 rounded min-w-[200px] flex flex-col items-start gap-3">
            <h1  className='font-bold'>Create your playlist</h1>
            <p  className='font-light' >It's easy we will help you</p>
            <button className='bg-white font-semibold px-3 py-2 text-black rounded-full'>Create Playlist</button>
      </div>
        <div className="p-3 bg-gray-900 m-3 rounded min-w-[200px] flex flex-col items-start gap-3">
            <h1 className='font-bold'>Podcasts Available</h1>
            <p className='font-light'>Lets follow some Podcasts</p>
            <button className='bg-white font-semibold px-3 py-2 text-black rounded-full'>Browse Podcasts</button>
      </div>
    </div>
    </div>
  )
}

export default Sidebar