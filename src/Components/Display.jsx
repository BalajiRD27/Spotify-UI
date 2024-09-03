import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
   const displayRef=useRef();

   const location = useLocation();
   const path=location.pathname ;
   const isAlbum = path.includes('album')
   const albumId= isAlbum ? path.split('/').pop() : '' ;
  
   useEffect(()=>{
    if(isAlbum){
         const bgColor= albumsData[Number(albumId)].bgColor ;
         displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
       displayRef.current.style.background = `#121212`
    }
   })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 text-white bg-[#121212] overflow-auto'>
      <Routes>
        <Route path='/' element={<Displayhome />}></Route>
        <Route path='/album/:id' element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  )
}

export default Display