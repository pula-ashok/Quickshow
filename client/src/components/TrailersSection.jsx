import React, { useState } from 'react'
import ReactPlayer from "react-player"
import { dummyTrailers } from '../assets/assets'
import BlueCircle from './BlueCircle';
import { PlayCircleIcon } from "lucide-react"

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  return (
    <div className='px-6 md:px-16 lg:px-24  py-20 overflow-hidden'>
        <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
        <div className='relative mt-6'>
            <BlueCircle top='-100px' right='-100px'/>
            <ReactPlayer 
              url={currentTrailer?.videoUrl}
            //   url="https://www.youtube.com/watch?v=H7rJ2EIyZYU&ab_channel=TipsTelugu"
              controls={false} 
              className="mx-auto max-w-full"
              width={'960px'}
              height={'540px'}
            />
        </div>
        <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
            {dummyTrailers?.map((trailer,index)=>
            <div onClick={()=>setCurrentTrailer(trailer)} key={index+1} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 transition duration-300 cursor-pointer max-md:h-60 md:max-h-60'>
                <img src={trailer?.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75'/>
                <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 md:h-12 h-5 transform -translate-x-1/2 -translate-y-1/2'/>
            </div>)
            }
        </div>
    </div>
  )
}

export default TrailersSection