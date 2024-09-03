import React from 'react'
import { useNavigate } from 'react-router-dom'

const Albumdata = ({id,image,name,desc}) => {
  const navigate =useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='cursor-pointer hover:bg-slate-800 min-w-[150px] mt-4 p-2 px-3'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-4 mb-1'>{name}</p>
        <p>{desc}</p>
        
    </div>
  )
}

export default Albumdata