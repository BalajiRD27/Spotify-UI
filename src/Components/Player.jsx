import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContextProvider'
const Player = () => {

  const {seekBar,seekBg,play,pause,previous,next,time,seekSong,track} =useContext(PlayerContext)

  let secondnow= time.currentTime.second >9 ? time.currentTime.second : '0'+time.currentTime.second ;
  let minutenow= time.currentTime.minute >9 ? time.currentTime.minute : '0'+time.currentTime.minute ;
  let secondfull= time.totalTime.second >9 ? time.totalTime.second : '0'+time.totalTime.second ;
  let minutefull= time.totalTime.minute >9 ? time.totalTime.minute : '0'+time.totalTime.minute ;
  return (
    <div className='h-[10%] flex bg-black justify between px-4 text-white' >
         <div className='hidden p-4 lg:flex items-center gap-3'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <h3 className='text-white'>{track.name}</h3>
                <h4 className='text-white'>{track.desc.slice(0,12)}...</h4>
            </div>
         </div>
         <div className='flex flex-col items-center m-auto gap-4'>
             <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
            <p className='text-white font-semibold'>{minutenow}:{secondnow}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1.5 rounded bg-green-500 w-0 transition ease-in' /> 
            </div>
            <p className='text-white font-semibold'>{minutefull}:{secondfull}</p>
            </div>
         </div>
         <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 h-1 bg-white rounded-full cursor-pointer'>
              <hr className='bg-blue h-[100%] w-[50%]' />
            </div>
            <img className='w-4' src={assets.zoom_icon} alt="" />

         </div>
    </div>
  )
}

export default Player