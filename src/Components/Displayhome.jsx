import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumdata from './Albumdata'
import Songitem from './Songitem'
const Displayhome = () => {
  return (
    <>
        <Navbar />
        <div>
            <h1 className='font-bold text-xl my-5'>Featured Charts</h1>
        <div className='min-w-[150px] mt-4 overflow-auto flex gap-3'>
          {
            albumsData.map((data)=>{
                return <Albumdata key={data.id} id={data.id} image={data.image} name={data.name} desc={data.desc} />
            })
          }
        </div>
        </div>
        <div>
            <h1 className='font-bold text-xl my-5'>Featured Charts</h1>
        <div className='min-w-[150px] mt-4 flex overflow-auto gap-3'>
          {
            songsData.map((data)=>{
                return <Songitem key={data.id} id={data.id} image={data.image} name={data.name} desc={data.desc} duration={data.duration} />
            })
          }
        </div>
        </div>
     </>
  )
}

export default Displayhome