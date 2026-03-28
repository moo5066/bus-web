
'use client'
import { useState } from 'react'

import React from 'react'
import Sidebar from '@/app/components/Sidebar/page.jsx'
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";

const page = () => {
     const [open,setOpen]=useState(false)
   
  return (
    <div className='flex  h-screen bg-gray-50'>
      <Sidebar/>

      <div className='w-full h-full overflow-y-auto p-7 '>
     
        <div className='flex justify-between'>
            <div>
<h1 className='text-2xl font-bold'>Driver</h1>
<p className='text-gray-600'>Manage driver information and assignments</p>
</div>
  <button onClick={() => setOpen(true)}
  className='p-1 bg-black text-white rounded-lg h-10 w-30'
>
  + Add Driver
</button>

{open && (
   <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
         
    
           

<h2 className="text-xl font-semibold mb-1">Add New Driver</h2>
  <p className="text-gray-500 text-sm mb-4">
        Register a new driver </p>

      <div onClick={()=>setOpen(false)} className='cursor-pointer absolute   top-0 right-0 p-5'>
         ✕
      </div>

<form className="space-y-4">
         <label className="block text-sm font-medium mb-1 text-gray-500">
           Full Name
          </label>
          <input
            type="text"
            placeholder="Moo Abdi"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

         <label className="block text-sm font-medium mb-1 text-gray-500">
           License Number
          </label>
          <input
            type="text"
            placeholder="DL-2024-1234"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />


<div className='flex justify-between'>
   <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>
         Phone
      </label>

<input type="text" placeholder='+1-555-0100'  className=' focus:outline-none border p-1 rounded-lg'/>
   </div>
   <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>
         Experience (years)
      </label>

<input type="number" placeholder='5'  className=' focus:outline-none border p-1 rounded-lg'/>
   </div>
</div>

<div className='flex flex-col gap-3'>
   <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>Email</label>
      <input type="email" placeholder='MooAbdi@gmail.com' className='border p-2 rounded-lg border-gray-300 '/>
   </div>

<div>
          <label className="block text-gray-500 text-sm font-medium mb-1">
            Status
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>Select status</option>
            <option>Active</option>
            <option>Maintenance</option>
            <option>Inactive</option>
          </select>
        </div>
<div>

</div>



</div>


</form>





      </div>
   </div>
)}
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

<div className='flex flex-col md:flex-row md:flex-wrap md:gap-15'>
<div className='hover:shadow-lg md:w-[40%] mt-20 border border-gray-300 rounded-lg p-5 text-gray-700'>
   <div>
   <div className='flex justify-between'>
      <div>
      <h1 className='text-xl font-semibold'>John Smith</h1>
      <p className='text-gray-600'>DL-2018-1234</p>
      </div>
<div className=''>
   <p className='bg-blue-200 w-20 p-0.5 text-sm text-center rounded-lg '>on-duty</p>
</div>
   </div>

<div className='mt-10'>
   <div className='flex gap-3 items-center'>
   <FaPhoneAlt className='text-gray-500'/>
   <p className='text-md'>+1-555-0101</p>
   </div>

<div className='mt-5 flex gap-3 items-center'>
   <MdOutlineMailOutline className='text-gray-500'/>
   <p className='text-md'>john.smith@busco.com</p>
</div>

<div className='mt-5 flex gap-3 items-center'>
<SiExpertsexchange className='text-gray-500'/>
<p className='text-md'>8 years experience</p>
</div>


</div>

<div className='mt-10 flex flex-row gap-5 items-center justify-center'>
   <p className='border hover:bg-gray-200 px-2 py-1 border-gray-300 rounded-lg w-60 text-center'>Edit</p>
   <p className='border px-2 hover:bg-gray-200 py-1 border-gray-300 rounded-lg w-60 text-center'>Assign</p>
</div>


   </div>
</div>



<div className='hover:shadow-lg md:w-[40%] mt-20 border border-gray-300 rounded-lg p-5 text-gray-700'>
   <div>
   <div className='flex justify-between'>
      <div>
      <h1 className='text-xl font-semibold'>Sarah Johnson</h1>
      <p className='text-gray-600'>DL-2019-5678</p>
      </div>
<div className=''>
   <p className='bg-blue-200 w-20 p-0.5 text-sm text-center rounded-lg '>on-duty</p>
</div>
   </div>

<div className='mt-10'>
   <div className='flex gap-3 items-center'>
   <FaPhoneAlt className='text-gray-500'/>
   <p className='text-md'>+1-555-0102</p>
   </div>

<div className='mt-5 flex gap-3 items-center'>
   <MdOutlineMailOutline className='text-gray-500'/>
   <p className='text-md'>sarah.johnson@busco.com</p>
</div>

<div className='mt-5 flex gap-3 items-center'>
<SiExpertsexchange className='text-gray-500'/>
<p className='text-md'>6 years experience</p>
</div>


</div>

<div className='mt-10 flex flex-row gap-5 items-center justify-center'>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Edit</p>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Assign</p>
</div>


   </div>
</div>


<div className='hover:shadow-lg md:w-[40%] mt-20 border border-gray-300 rounded-lg p-5 text-gray-700'>
   <div>
   <div className='flex justify-between'>
      <div>
      <h1 className='text-xl font-semibold'>Mike Davis</h1>
      <p className='text-gray-600'>DL-2017-9012</p>
      </div>
<div className=''>
   <p className='bg-blue-200 w-20 p-0.5 text-sm text-center rounded-lg '>on-duty</p>
</div>
   </div>

<div className='mt-10'>
   <div className='flex gap-3 items-center'>
   <FaPhoneAlt className='text-gray-500'/>
   <p className='text-md'>+1-555-0103</p>
   </div>

<div className='mt-5 flex gap-3 items-center'>
   <MdOutlineMailOutline className='text-gray-500'/>
   <p className='text-md'>mike.davis@busco.com</p>
</div>

<div className='mt-5 flex gap-3 items-center'>
<SiExpertsexchange className='text-gray-500'/>
<p className='text-md'>10 years experience</p>
</div>


</div>

<div className='mt-10 flex flex-row gap-5 items-center justify-center'>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Edit</p>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Assign</p>
</div>


   </div>
</div>



<div className='hover:shadow-lg md:w-[40%] mt-20 border border-gray-300 rounded-lg p-5 text-gray-700'>
   <div>
   <div className='flex justify-between'>
      <div>
      <h1 className='text-xl font-semibold'>Emily Brown</h1>
      <p className='text-gray-600'>DL-2020-3456</p>
      </div>
<div className=''>
   <p className='bg-blue-200 w-20 p-0.5 text-sm text-center rounded-lg '>on-duty</p>
</div>
   </div>

<div className='mt-10'>
   <div className='flex gap-3 items-center'>
   <FaPhoneAlt className='text-gray-500'/>
   <p className='text-md'>+1-555-0104</p>
   </div>

<div className='mt-5 flex gap-3 items-center'>
   <MdOutlineMailOutline className='text-gray-500'/>
   <p className='text-md'>emily.brown@busco.com</p>
</div>

<div className='mt-5 flex gap-3 items-center'>
<SiExpertsexchange className='text-gray-500'/>
<p className='text-md'>5 years experience</p>
</div>


</div>

<div className='mt-10 flex flex-row gap-5 items-center justify-center'>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Edit</p>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Assign</p>
</div>


   </div>
</div>

<div className='hover:shadow-lg md:w-[40%] mt-20 border border-gray-300 rounded-lg p-5 text-gray-700'>
   <div>
   <div className='flex justify-between'>
      <div>
      <h1 className='text-xl font-semibold'>David Wilson</h1>
      <p className='text-gray-600'>DL-2021-7890</p>
      </div>
<div className=''>
   <p className='bg-green-200 w-20 p-0.5 text-sm text-center rounded-lg '>available</p>
</div>
   </div>

<div className='mt-10'>
   <div className='flex gap-3 items-center'>
   <FaPhoneAlt className='text-gray-500'/>
   <p className='text-md'>+1-555-0105</p>
   </div>

<div className='mt-5 flex gap-3 items-center'>
   <MdOutlineMailOutline className='text-gray-500'/>
   <p className='text-md'>david.wilson@busco.com</p>
</div>

<div className='mt-5 flex gap-3 items-center'>
<SiExpertsexchange className='text-gray-500'/>
<p className='text-md'>4 years experience</p>
</div>


</div>

<div className='mt-10 flex flex-row gap-5 items-center justify-center'>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Edit</p>
   <p className='border px-2 py-1 hover:bg-gray-200 border-gray-300 rounded-lg w-60 text-center'>Assign</p>
</div>

</div>
   </div>
</div>

      </div>
    </div>
  )
}

export default page
