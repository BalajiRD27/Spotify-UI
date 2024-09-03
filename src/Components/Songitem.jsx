import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContextProvider'

const Songitem = ({id,image,name,desc,duration}) => {

  const {playwithID} =useContext(PlayerContext)
  return (
    <div onClick={()=>playwithID(id)} className='flex flex-col min-w-[150px] gap-3 cursor-pointer p-4 hover:bg-slate-800'>
        <img src={image} alt="" />
        <div>
            <p  className='font-bold mt-2 mb-2'>{name}</p>
            <p className='text-slate-200 text-sm '>{desc}</p>
            
        </div>
    </div>
  )
}

export default Songitem