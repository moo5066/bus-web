
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
  const [active, setActive] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: MdOutlineDashboard, href: './components/Dashboard' },
    { name: 'Buses', icon: TbBus },
    { name: 'Routes', icon: GrLocation },
    { name: 'Schedules', icon: FaRegCalendar },
    { name: 'Drivers', icon: MdPeopleAlt },
    { name: 'Booking', icon: TbBrandBooking },
  ]
  
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
          {menuItems.map((item) => (
            <div key={item.name} onClick={() => setActive(item.name)}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 p-1 rounded-lg cursor-pointer ${active === item.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                >
                  <item.icon size={25} />
                  {isOpen && <span className={active === item.name ? '' : 'text-blue-500'}>{item.name}</span>}
                </Link>
              ) : (
                <div className={`flex items-center space-x-3 p-1 rounded-lg cursor-pointer ${active === item.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}>
                  <item.icon size={25} />
                  {isOpen && <span className={active === item.name ? '' : 'text-blue-500'}>{item.name}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
