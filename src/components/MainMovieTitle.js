import React, { useEffect } from 'react'

const MainMovieTitle = () => {
    useEffect(()=>
    {
        
    },[]);
  return (
    <div className=' h-[90vh] p-4 lg:p-24 flex flex-col justify-end bg-gradient-to-r from-black'>
        <h1 className='text-2xl lg:text-6xl font-bold py-6 text-white'>Elemental</h1>
        <p className=' md:w-1/3 md:text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className='flex my-2'>
            <button className='px-10 py-3 bg-white text-black rounded-sm hover:opacity-85'>▶ Play</button>
            <button className='hidden lg:inline-block px-10 mx-2 py-3 bg-white rounded-sm opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default MainMovieTitle