'use client'

import React from 'react'
import { TbBus, TbBrandBooking } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import Link from 'next/link'
import { GrLocation } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

const Page = () => {
  const stats = [
    { label: 'Total Buses', value: '5', desc: '4 active', icon: TbBus, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Routes', value: '4', desc: 'All operational', icon: GrLocation, color: 'text-green-600', bg: 'bg-green-100' },
    { label: "Today's Trips", value: '5', desc: '1 in progress', icon: FaRegCalendar, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Active Drivers', value: '5', desc: '4 active', icon: MdPeopleAlt, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Total Bookings', value: '24', desc: 'New today', icon: TbBrandBooking, color: 'text-red-600', bg: 'bg-red-100' },
  ]

  return (
    <div className='p-6 w-full bg-slate-50 h-full overflow-y-auto text-slate-800 font-sans'>
      
      {/* Header */}
      <div className='flex justify-between items-start mb-10'>
        <div>
          <h1 className='text-3xl font-bold text-slate-900'>Dashboard</h1>
          <p className='text-slate-500 mt-1'>Overview of your bus management system</p>
        </div>
        <Link href='/' className='p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-all'>
          <IoExitOutline size={28} />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        {stats.map((stat, index) => (
          <div key={index} className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow'>
            <div className='flex justify-between items-start'>
              <div>
                <p className='text-sm font-medium text-slate-500'>{stat.label}</p>
                <h3 className='text-3xl font-bold text-slate-800 mt-2'>{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <p className='text-xs font-medium text-slate-400 mt-4'>{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
        
        {/* Maintenance Card */}
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-red-50 rounded-lg text-red-500'>
              <CgDanger size={24}/>
            </div>
            <h2 className='text-xl font-bold text-slate-800'>Maintenance Required</h2>
          </div>

          <div className='flex-1'>
             <div className='flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl'>
                <div className='flex flex-col'>
                  <span className='font-bold text-slate-800'>BUS-003</span>
                  <span className='text-sm text-slate-500'>Scania Touring</span>
                </div>
                <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full'>
                  In Maintenance
                </span>
             </div>
          </div>
        </div>

        {/* Schedules Card */}
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-blue-50 rounded-lg text-blue-500'>
              <FaRegCalendar size={24}/>
            </div>
            <h2 className='text-xl font-bold text-slate-800'>Upcoming Schedules</h2>
          </div>

          <div className='space-y-4'>
            {[
              { route: 'Coastal Route', bus: 'BUS-002', time: '09:00' },
              { route: 'Mountain Line', bus: 'BUS-004', time: '10:00' },
              { route: 'City Express', bus: 'BUS-001', time: '14:00' },
            ].map((item, i) => (
              <div key={i} className='flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors group'>
                <div>
                  <h4 className='font-bold text-slate-800 group-hover:text-blue-600 transition-colors'>{item.route}</h4>
                  <p className='text-sm text-slate-500 flex items-center gap-2'>
                    <span>{item.bus}</span>
                    <span className='w-1 h-1 rounded-full bg-slate-300'></span>
                    <span>{item.time}</span>
                  </p>
                </div>
                <span className='px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full'>
                  Scheduled
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page
