
'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { HiOutlineCalendar, HiOutlineUserGroup, HiOutlineTicket } from "react-icons/hi2";
import Link from 'next/link'
import { CiLocationOn } from "react-icons/ci";



const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: MdOutlineDashboard, href: '/' },
    { name: 'Buses', icon: TbBus, href: '/components/Buses'},
    { name: 'Routes', icon: CiLocationOn, href: '/components/Routes' },
    { name: 'Schedules', icon: HiOutlineCalendar, href: '/components/Schedules' },
    { name: 'Drivers', icon: HiOutlineUserGroup, href: '#' },
    { name: 'Booking', icon: HiOutlineTicket, href: '#' },
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
          {menuItems.map((item) => {
            const active = pathname === item.href;
            const isClickable = item.href !== '#';
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 p-1 rounded-lg ${
                    isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                  } ${active ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                  onClick={(e) => !isClickable && e.preventDefault()}
                >
                  <item.icon size={25} />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
