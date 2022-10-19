import React from 'react'
import Image from 'next/image'
import {  MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'



function Header() {
  return (
    <header className='sticky top-0 z-50 items-center grid grid-cols-3 bg-white border-b py-4 px-10 md:px-10'>
        {/* Left */}
        <div className='flex relative items-center h-8 cursor-pointer my-auto'>
            <Image 
            src='https://links.papareact.com/qd3' 
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            />
        </div>

        {/* Middle - Search bar */}
        <div className='flex items-center md:border rounded-full py-2 shadow-black md:shadow-sm hover:shadow-lg transition-shadow ease-in duration-150 cursor-pointer'>
          <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 cursor-pointer' type='text' placeholder='Search'/>
          <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>

        </div>

        {/* Right */}
        <div className='flex items-center justify-end'>
          <div className='hover:bg-gray-100 p-3 hidden md:inline-flex rounded-full cursor-pointer'>
          <p className='hidden md:inline-flex cursor-pointer text-sm'>Become a Host</p>
          </div>
          <div className='hover:bg-gray-100 p-3 rounded-full cursor-pointer'>
          <GlobeAltIcon className='h-5 cursor-pointer'/>
          </div>
          <div className='flex items-center space-x-2 border p-1 rounded-full cursor-pointer hover:shadow-lg transition-shadow ease-in duration-150'>
          <Bars3Icon className='h-5 ml-2 text-gray-500'/>
          <UserCircleIcon className='h-8  text-gray-500'/>
          </div>

        </div>
      
    </header>
  )
}

export default Header
