import React from 'react'
import Sidebar from '@/app/components/Sidebar/page.jsx'
import Link from 'next/link'
const page = () => {
    
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
    <div className='w-full md:w-50% h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
        <p className='text-gray-600'>Total Schedules</p>
        <p className='text-3xl font-bold'>4</p>
    </div>

<div  className='w-full md:w-50% h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>Scheduled</p>
    <h1 className='text-3xl font-bold text-blue-500'>3</h1>

</div>

<div  className='w-full md:w-50% h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>Completed</p>
        <h1 className='text-3xl font-bold text-green-500'>1</h1>

</div>

<div  className='w-full md:w-50% h-35 p-5 rounded-lg flex flex-col gap-10 border border-gray-200'>
    <p className='text-gray-600'>In Progress</p>
        <h1 className='text-3xl font-bold'>1</h1>

</div>

</div>


<div className='mt-10'>
    <div className='flex gap-5'>
        <p className='border p-1 border-gray-200 rounded-lg'>All</p>
        <p className='border p-1 border-gray-200 rounded-lg'>Scheduled</p>
        <p className='border p-1 border-gray-200 rounded-lg'>In Progress</p>
        <p className='border p-1 border-gray-200 rounded-lg'>Completed</p>

    </div>
</div>


      </div>
    </div>
  )
}

export default page
