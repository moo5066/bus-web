import React from 'react'
import Sidebar from '@/app/components/Sidebar/page.jsx'
import { CiSearch } from "react-icons/ci";

const page = () => {
  return (
    <div className='flex  h-screen bg-gray-50'>
      <Sidebar/>

      <div className='w-full h-full overflow-y-auto p-7 '>
        <div className='flex justify-between'>
            <div>
<h1 className='text-2xl font-bold'>Drivers</h1>
<p className='text-gray-600'>Manage driver information and assignments</p>
</div>
<div className='flex gap-2 bg-black h-8 text-white p-1.5 items-center rounded-lg'>
    <p>+</p>
    <p>Add</p>
    <p>Driver</p>
</div>
        </div>

<div className='mt-10 text-gray-500 bg-gray-200 p-1 rounded-lg'> 
    <div className='flex items-center gap-2'>
        <CiSearch size={20}/>
        <p>Search drivers....</p>
    </div>
</div>

<div  className='mt-10 flex flex-col gap-6 md:flex md:flex-row'>

<div className='w-full md:w-[30%] border border-gray-300  rounded-lg flex flex-col gap-15 p-5'>
   <p className='text-gray-700 '>Total Drivers</p>
   <p className='text-2xl font-bold'>5</p>
</div>

<div className='w-full md:w-[30%] border border-gray-300  rounded-lg flex flex-col gap-15 p-5'>
   <p className='text-gray-700 '>On Duty</p>
   <p className='text-2xl font-bold text-blue-600'>4</p>
</div>

<div className='w-full md:w-[30%] border border-gray-300  rounded-lg flex flex-col gap-15 p-5'>
   <p className='text-gray-700 '>Available</p>
   <p className='text-2xl font-bold text-gray-600'>1</p>
</div>

<div className='w-full md:w-[30%] border border-gray-300  rounded-lg flex flex-col gap-15 p-5'>
   <p className='text-gray-700 '>Avg Experience</p>
   <p className='text-2xl font-bold'>7 years</p>
</div>





</div>

      </div>
    </div>
  )
}

export default page
