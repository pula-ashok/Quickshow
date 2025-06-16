import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import BlueCircle from './BlueCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

const FeaturedSection = () => {
    const navigate = useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-34 overflow-hidden'>
        <div className='relative flex items-center relative justify-between pt-20 pb-10'>
           <BlueCircle top='0' right='-80px'/>
           <p className='text-gray-300 text-lg font-medium'>Now Showing</p> 
           <button onClick={()=>{navigate('/movies');scrollTo(0,0)}} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All <ArrowRight className='w-4.5 h-4.5 group-hover:translate-x-0.5 transition'/></button>
        </div>
        <div className='flex flex-wrap gap-8 max-sm:justify-center mt-8'>
            {dummyShowsData?.slice(0,4)?.map((movie,index)=><MovieCard key={index+1} movie={movie}/>)}
        </div>
        <div className='flex justify-center mt-20'>
            <button onClick={()=>{navigate('/movies');scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull rounded-md transition cursor-pointer font-medium'>Show more</button>
        </div>
    </div>
  )
}

export default FeaturedSection