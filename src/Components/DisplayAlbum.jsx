import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContextProvider'

const DisplayAlbum = () => {

    const {id}=useParams()
    const albumData =albumsData[id]
    console.log(albumData)

    const {playwithID} =useContext(PlayerContext)

  return (
    <>
        <Navbar />

        <div className='flex flex-col md:flex-row mt-10 gap-8'>
            <img className='w-[300px] h-[300px]' src={albumData.image} alt="" />
            <div>
              <p>Playlist</p>
              <h2 className='font-bold text-5xl md:text-7xl mb-4'>{albumData.name}</h2>
              <h4>{albumData.desc}</h4>
              <p className='mt-4 flex items-center gap-4'>
               <img className='inline-block w-10' src={assets.spotify_logo} alt="" />
              <b>Spotify</b>
              <p>134567 likes</p>
              <b>50 Songs,</b>
               about 2hr 30 minz
              </p>
            </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 mt-8 mb-4 pl-2 text-white'>
              <p><b className='mr-4'>#</b><b>Title</b></p>
              <p>Album</p>
              <p className='hidden sm:block'>Date Added</p>
              <img className='w-5 m-auto' src={assets.clock_icon} alt="" />
            </div>
            <hr />
             {
              songsData.map((item,index)=>(
                <div onClick={()=>playwithID(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center hover:bg-slate-400 cursor-pointer'>
                    <p className='text-white'>
                          <b className='text-white mr-4'>{index+1}</b>
                          <img src={item.image} className='w-10 inline mr-4' alt="" />
                          {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] m-auto'>{item.duration}</p>

                </div>
              ))
             }

    </>
  )
}

export default DisplayAlbum