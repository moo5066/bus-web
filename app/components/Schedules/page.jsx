'use client'

import Sidebar from '@/app/components/Sidebar/page.jsx'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
    const [click , setClick] = useState('All')
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='p-5 h-20 w-full'>
    <div>
   <div className='flex justify-between'>
    <div className='flex flex-col'>
<h1 className='font-bold text-3xl'>Schedules</h1>
<p className='text-gray-500'>Manage trip schedules and assignments</p>
  </div>
<div className='bg-black h-9 text-white p-2 flex items-center rounded-lg'>
    <Link href='/schedules'>
    <div className='flex gap-1'>
    <p>+Add</p>
    <p>Schedule</p>
    </div>
    </Link>
</div>
</div>
    </div>

<div className='mt-20 flex flex-col gap-5 lg:flex lg:flex-row'>
    <div className='w-full md:w-1/2 h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
        <p className='text-gray-600'>Total Schedules</p>
        <p className='text-3xl font-bold'>4</p>
    </div>

<div className='w-full md:w-1/2 h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>Scheduled</p>
    <h1 className='text-3xl font-bold text-blue-500'>3</h1>

</div>

<div className='w-full md:w-1/2 h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>Completed</p>
        <h1 className='text-3xl font-bold text-green-500'>1</h1>

</div>

<div className='w-full md:w-1/2 h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>In Progress</p>
        <h1 className='text-3xl font-bold'>1</h1>

</div>

</div>


<div className='mt-10'>
    <div className='flex gap-5'>
        <Link href='#' onClick={()=>setClick('All')} className={`border p-1 border-gray-200 rounded-lg ${click === 'All' ? 'bg-black text-white'  :'bg-white text-black'}`}>All</Link>
        <Link href='#' onClick={()=>setClick('Scheduled')} className={`border p-1 border-gray-200 rounded-lg  ${click === 'Scheduled' ? 'bg-black text-white'  :'bg-white text-black'}`}>Scheduled</Link>
        <Link href='#' onClick={()=>setClick('In Progress')} className={`border p-1 border-gray-200 rounded-lg ${click === 'In Progress' ? 'bg-black text-white'  :'bg-white text-black'}`}>In Progress</Link>
        <Link href='#' onClick={()=>setClick('Completed')} className={`border p-1 border-gray-200 rounded-lg ${click === 'Completed' ? 'bg-black text-white'  :'bg-white text-black'}`}>Completed</Link>

    </div>
</div>

{/* all */}
<div className='mt-20 '>
    <div className='border border-gray-300 px-2 '>
        <div className=''>
            <p>Route</p>
            <p>Bus</p>
            <p>Driver</p>
            <p>Date</p>
            <p>Departure</p>
            <p>Arrival</p>
            <p>Status</p>
            <p>Actions</p>
        </div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Page
