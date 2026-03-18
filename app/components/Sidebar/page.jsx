
'use client'

import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import Link from 'next/link'


const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className={`h-screen p-8 border-r border-gray-300 ${isOpen ? 'w-64' : 'w-fit'} flex flex-col`}>
        <div className='flex flex-col space-y-5'>
          <div className='flex items-center justify-between'>
             {isOpen && <h1 className='text-xl font-bold text-blue-500'>BusManager</h1>}
             <IoIosMenu 
               size={30} 
               className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer text-gray-700' 
               onClick={() => setIsOpen(!isOpen)}
             />
          </div>
          <hr className='-mx-8 text-gray-300 mt-3' />
        </div>

        <div className='flex flex-col space-y-5 text-gray-700 mt-5'>
          {/* Dashboard */}
          <Link href='Dashboard' className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <MdOutlineDashboard size={25} />
            {isOpen && <span className='text-blue-500'>Dashboard</span>}
          </Link>
          {/* Buses */}
          <div className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <TbBus size={25}/>
            {isOpen && <span className='text-blue-500'>Buses</span>}
          </div>
          {/* Routes */}
          <div className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <GrLocation size={25} />
            {isOpen && <span className='text-blue-500'>Routes</span>}
          </div>
          {/* Schedules */}
          <div className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <FaRegCalendar size={25} />
            {isOpen && <span className='text-blue-500'>Schedules</span>}
          </div>
          {/* Drivers */}
          <div className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <MdPeopleAlt size={25} />
            {isOpen && <span className='text-blue-500'>Drivers</span>}
          </div>
          {/* Booking */}
          <div className='flex items-center space-x-3 hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
            <TbBrandBooking size={25} />
            {isOpen && <span className='text-blue-500'>Booking</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
