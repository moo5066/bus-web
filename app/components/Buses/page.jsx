'use client'


import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar/page'
import { CiSearch } from "react-icons/ci";
import { AiFillTool } from "react-icons/ai";
import { useState } from 'react';


const page = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <main className='flex-row p-8 overflow-y-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Buses</h1>
            <p className='text-gray-500'>Manage your bus fleet</p>
          </div>

          <button 
  onClick={() => setOpen(true)}
  className='bg-black text-white px-4 py-2 rounded-lg font-semibold'
>
  + Add Bus
</button>
{open && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    
    <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
      
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-1">Add New Bus</h2>
      <p className="text-gray-500 text-sm mb-4">
        Add a new bus to your fleet
      </p>

      {/* Form */}
      <form className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Bus Number
          </label>
          <input
            type="text"
            placeholder="BUS-006"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Model
          </label>
          <input
            type="text"
            placeholder="Volvo 9700"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Capacity
          </label>
          <input
            type="number"
            placeholder="50"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Select status</option>
            <option>Active</option>
            <option>Maintenance</option>
            <option>Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Add Bus
        </button>
      </form>
    </div>
  </div>
)}
        </div>
        {/* You can add your list of buses or a data table here */}

<div className='md:w-[30%]'>
    <div className='flex space-x-3 items-center border border-gray-200 p-1 rounded-lg hover:border-blue-500'>
        <CiSearch size={25} className='text-gray-500'/>
   {/* <input type="text" placeholder='Search buses...'/> */}
   <p className='text-gray-400'>Search buses...</p>
    </div>
</div>

<div className='mt-30 flex flex-col gap-10 md:flex md:flex-row '>
    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>Total Buses</p>
        <h1 className='text-2xl font-bold'>5</h1>
    </div>


    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>Active</p>
        <h1 className='text-2xl text-green-500 font-bold'>4</h1>
    </div>

    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>In Maintenance</p>
        <h1 className='text-2xl text-red-500 font-bold'>1</h1>
    </div>

</div>

<div className='md:flex  gap-5 md:flex-wrap'>
<div className='border p-2 border-gray-200 mt-20 px-5 w-full md:w-[40%] hover:shadow-md'>
  <div>
<div className='flex justify-between '>
  <div className='flex flex-col'>
  <h1>BUS-001</h1>
  <p className='text-gray-500 text-sm'>Volvo 9400</p>
  </div>
  <div >
    <p className='bg-green-300 p-1 rounded-sm items-center hover:bg-green-200 cursor-pointer'>active</p>
  </div>

</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Capacity:</h1>
  <p className=' font-md'>45 seats</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Driver:</h1>
  <p className=' font-md'>John Smith</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Last Maintenance:</h1>
  <p className=' font-md'>3/1/2026</p>
</div>
 </div>

<div className='flex justify-between items-center' >
  <div className='w-[80%] border border-gray-300 text-center mx-auto p-1 rounded-lg my-5'>
  <p>Edit</p>
  </div>

  <div className='border p-1 border-gray-300 rounded-lg'>
<AiFillTool/>
  </div>
</div>
 
</div>





<div className='border p-2 border-gray-200 mt-20 px-5 w-full md:w-[40%] hover:shadow-md'>
  <div>
<div className='flex justify-between '>
  <div className='flex flex-col'>
  <h1>BUS-002</h1>
  <p className='text-gray-500 text-sm'>Mercedes-Benz Travego</p>
  </div>
  <div >
    <p className='bg-green-300 p-1 rounded-sm items-center hover:bg-green-200 cursor-pointer'>active</p>
  </div>

</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Capacity:</h1>
  <p className=' font-md'>50 seats</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Driver:</h1>
  <p className=' font-md'>Sarah Johnson</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Last Maintenance:</h1>
  <p className=' font-md'>2/15/2026</p>
</div>
 </div>

<div className='flex justify-between items-center' >
  <div className='w-[80%] border border-gray-300 text-center mx-auto p-1 rounded-lg my-5'>
  <p>Edit</p>
  </div>

  <div className='border p-1 border-gray-300 rounded-lg'>
<AiFillTool/>
  </div>
</div>
 
</div>
<div className='border p-2 border-gray-200 mt-20 px-5 w-full md:w-[40%] hover:shadow-md'>
  <div>
<div className='flex justify-between '>
  <div className='flex flex-col'>
  <h1>BUS-003</h1>
  <p className='text-gray-500 text-sm'>Scania Touring</p>
  </div>
  <div >
    <p className='bg-green-300 p-1 rounded-sm items-center hover:bg-green-200 cursor-pointer'>active</p>
  </div>

</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Capacity:</h1>
  <p className=' font-md'>48 seats</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Driver:</h1>
  <p className=' font-md'>Unassigned</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Last Maintenance:</h1>
  <p className=' font-md'>3/10/2026</p>
</div>
 </div>

<div className='flex justify-between items-center' >
  <div className='w-[80%] border border-gray-300 text-center mx-auto p-1 rounded-lg my-5'>
  <p>Edit</p>
  </div>

  <div className='border p-1 border-gray-300 rounded-lg'>
<AiFillTool/>
  </div>
</div>
 
</div>
<div className='border p-2 border-gray-200 mt-20 px-5 w-full md:w-[40%] hover:shadow-md'>
  <div>
<div className='flex justify-between '>
  <div className='flex flex-col'>
  <h1>BUS-004</h1>
  <p className='text-gray-500 text-sm'>Volvo 9700</p>
  </div>
  <div >
    <p className='bg-green-300 p-1 rounded-sm items-center hover:bg-green-200 cursor-pointer'>active</p>
  </div>

</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Capacity:</h1>
  <p className=' font-md'>52 seats</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Driver:</h1>
  <p className=' font-md'>Mike Davis</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Last Maintenance:</h1>
  <p className=' font-md'>2/20/2026</p>
</div>
 </div>

<div className='flex justify-between items-center' >
  <div className='w-[80%] border border-gray-300 text-center mx-auto p-1 rounded-lg my-5'>
  <p>Edit</p>
  </div>

  <div className='border p-1 border-gray-300 rounded-lg'>
<AiFillTool/>
  </div>
</div>
 </div>


<div className='border p-2 border-gray-200 mt-20 px-5 w-full md:w-[40%] hover:shadow-md'>
  <div>
<div className='flex justify-between '>
  <div className='flex flex-col'>
  <h1>BUS-005</h1>
  <p className='text-gray-500 text-sm'>VMAN Lion's Coach</p>
  </div>
  <div >
    <p className='bg-green-300 p-1 rounded-sm items-center hover:bg-green-200 cursor-pointer'>active</p>
  </div>

</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Capacity:</h1>
  <p className=' font-md'>49 seats</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Driver:</h1>
  <p className=' font-md'>Emily Brown</p>
</div>

<div className='mt-10 flex justify-between items-center'>
  <h1 className='text-medium text-gray-600 '>Last Maintenance:</h1>
  <p className=' font-md'>3/5/2026</p>
</div>
 </div>

<div className='flex justify-between items-center' >
  <div className='w-[80%] border border-gray-300 text-center mx-auto p-1 rounded-lg my-5'>
  <p>Edit</p>
  </div>

  <div className='border p-1 border-gray-300 rounded-lg'>
<AiFillTool/>
  </div>
</div>
 
</div>




</div>












      </main>
    </div>
  )
}

export default page
