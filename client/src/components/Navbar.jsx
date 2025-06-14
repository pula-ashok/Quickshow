import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from './../assets/assets';
import { MenuIcon, SearchIcon, XIcon } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full flex justify-between items-center px-6 md:px-16 lg:px-36 py-5 fixed top-0 left-0 z-50'>
      <Link to="/" className='max-md:flex-1'>
        <img src={assets.logo} alt='logo' className='w-36 h-auto'/>
      </Link>
      <div className={`${isOpen ? 'max-md:w-full':'max-md:w-0'} max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md: text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border md:border-gray-300/20 overflow-hidden transition-[width] duration-300`}>
        <XIcon className='w-6 h-6 cursor-pointer absolute top-6 right-6 md:hidden' onClick={() => setIsOpen(!isOpen)}/>
        <Link to="/" onClick={()=>{setIsOpen(!isOpen);window.scrollTo(0,0)}}>Home</Link>
        <Link to="/movies" onClick={()=>{setIsOpen(!isOpen);window.scrollTo(0,0)}}>Movies</Link>
        <Link to="/" onClick={()=>{setIsOpen(!isOpen);window.scrollTo(0,0)}}>Theaters</Link>
        <Link to="/" onClick={()=>{setIsOpen(!isOpen);window.scrollTo(0,0)}}>Releases</Link>
        <Link to="/favorite" onClick={()=>{setIsOpen(!isOpen);window.scrollTo(0,0)}}>Favorite</Link>
      </div>
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
        <button className='px-4 py-1 sm:px-7 bg-primary hover:bg-primary-dull rounded-full font-medium cursor-pointer transition '>Login</button>
      </div>
      <MenuIcon className='w-8 h-8 max-md: ml-4 md:hidden' onClick={() => setIsOpen(!isOpen)}/>
    </div>
  )
}

export default Navbar