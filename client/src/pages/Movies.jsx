import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './../components/MovieCard';
import BlueCircle from '../components/BlueCircle';

const Movies = () => {
  return dummyShowsData?.length > 0 ?
  <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-34  overflow-hidden min-h-[80vh]'>
      <BlueCircle top='150px' left='0px'/>
      <BlueCircle bottom='50px' right='50px'/>
      <h1 className='text-lg font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap gap-8 max-sm:justify-center '>
        {dummyShowsData?.map((movie,index)=><MovieCard key={index+1} movie={movie}/>)}
      </div>
    </div>:
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No Movies Available</h1>
    </div>
}

export default Movies