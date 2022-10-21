import React, { useState } from 'react'
import Image from 'next/image'
import {  MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';



function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date)
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    })
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header className='sticky top-0 z-50 items-center grid grid-cols-3 bg-white border-b py-4 px-10 md:px-10'>
        {/* Left */}
        <div onClick={() => router.push('/')} className='flex relative items-center h-8 cursor-pointer my-auto'>
            <Image 
            src='https://links.papareact.com/qd3' 
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            />
        </div>

        {/* Middle - Search bar */}
        <div className='flex items-center md:border sm:w-full rounded-full py-2 shadow-black md:shadow-sm hover:shadow-lg transition-shadow ease-in duration-150 cursor-pointer'>
          <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 cursor-pointer' type='text' placeholder={placeholder || 'Search'}/>
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
        {searchInput && (
          <div className='flex flex-col col-span-3 mx-auto mt-2 drop-shadow-lg rounded'>
            <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-4 px-4 py-4 bg-white'>
              <h1 className='text-2xl flex-grow'>Add Guests</h1>
              <UsersIcon className='h-5'/>
              <input 
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type='number' 
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'/>
            </div>
            <div className='flex'>
              <div className='rounded-full bg-white px-5 py-3 mx-auto cursor-pointer hover:shadow-xl border hover:border-gray-500 active:scale-90 transform transition duration-150 ease-out'>
              <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
              </div>
              <div className='rounded-full bg-white px-5 py-3 mx-auto cursor-pointer hover:shadow-xl border hover:border-red-400 active:scale-90 transform transition duration-150 ease-out'>
              <button onClick={(e) => {search(); resetInput();}}  className='flex-grow text-red-400'>Search</button>
              </div>
            </div>
            
            

            </div>
        )}
    </header>
  )
}

export default Header
