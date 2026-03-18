import React from 'react'
import { TbBus } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import Link from 'next/link'
import { GrLocation } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";



const page = () => {
  return (
    <div className='px-5 py-2'>
      <Link href='/' className='absolute top-0 right-0 m-5 cursor-pointer text-gray-600 hover:text-blue-500'>
        <IoExitOutline size={30} />
      </Link>
      <div>
        <h1 className='text-gray-600 font-medium '>Overview of your bus management system</h1>

<div className='sm:grid grid-cols-2 md:flex md:flex-wrap lg:flex lg:justify-between gap-5'>

  <div className='mt-10 border border-gray-200 w-70 h-40 px-7 py-2 rounded-lg'>
    <div className='flex justify-between items-center'>
<h1>Total Buses</h1>
<TbBus size={25} className='bg-blue-200 p-1 rounded-lg text-blue-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>5</h1>
  <p className='text-gray-500'>4 active</p>
</div>
  </div>


  <div className='mt-10 border border-gray-200 w-70 h-40 px-7 py-2 rounded-lg'>
    <div className='flex justify-between items-center'>
<h1>Active Routes</h1>
<GrLocation size={25} className='bg-green-200 p-1 rounded-lg text-green-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>4</h1>
</div>
  </div>


  <div className='mt-10 border border-gray-200 w-70 h-40 px-7 py-2 rounded-lg'>
    <div className='flex justify-between items-center'>
<h1>Today's Trips</h1>
<FaRegCalendar size={25} className='bg-indigo-200 p-1 rounded-lg text-indigo-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>5</h1>
  <p className='text-gray-500'>1 in progress</p>
</div>
  </div>


  <div className='mt-10 border border-gray-200 w-70 h-40 px-7 py-2 rounded-lg'>
    <div className='flex justify-between items-center'>
<h1>Active Drivers</h1>
<MdPeopleAlt size={25} className='bg-blue-200 p-1 rounded-lg text-blue-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>5</h1>
  <p className='text-gray-500'>4 active</p>
</div>
  </div>



<div className='mt-10 border border-gray-200 w-70 h-40 px-7 py-2 rounded-lg'>
    <div className='flex justify-between items-center'>
<h1>Total Bookings</h1>
<TbBrandBooking size={25} className='bg-red-200 p-1 rounded-lg text-red-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>4</h1>
</div>
  </div>

</div>


{/* <div className='m-20 flex flex-col  lg:flex justify-between items-center w-full sm:w-[50%] '> */}
  <div className='mt-50 w-full md:w-[50%] flex flex-col gap-5 md:flex md:flex-row md:justify-between'>
  <div className='border border-gray-300 p-3 rounded-lg h-60 md:w-[50%]'>

<div className='flex space-x-2 items-center'>
  <CgDanger className='text-red-500 text-lg'/>
<h1 className='text-lg'>Maintenance Required</h1>
  </div>

  <div className='flex justify-between items-center mt-5'>
    <div className='flex flex-col'>
      <h1 className='text-lg'>Bus-003</h1>
      <p className='text-gray-500'>Scania Touring</p>
    </div>
    <p className='bg-yellow-500/50 p-0.5 rounded-md text-black text-sm'>Maintenance</p>
  </div>

</div>


<div className='border border-gray-300 p-3 rounded-lg h-60 md:w-[50%]'>
  <div className='flex flex-row space-x-3 items-center'>
    <FaRegCalendar className='text-blue-500 text-lg'/>
<p className='font-semibold'>Upcoming Schedules</p>
    </div>

<div>
  <div className='flex justify-between items-center mt-5'>
    <div>
  <h1 className='font-bold text-medium'>Coastal Route</h1>
  <p className='text-gray-600 text-sm'>BUS-002 • 09:00</p>
  </div>
  <div>
    <p className='bg-blue-200 p-1 rounded-lg'>Scheduled</p>
  </div>
</div>


 <div className='flex justify-between items-center mt-5'>
    <div>
  <h1 className='font-bold text-medium'>Mountain Line</h1>
  <p className='text-gray-600 text-sm'>BUS-004 • 10:00</p>
  </div>
  <div>
    <p className='bg-blue-200 p-1 rounded-lg'>Scheduled</p>
  </div>
</div>


 <div className='flex justify-between items-center mt-5'>
    <div>
  <h1 className='font-bold text-medium'>City Express</h1>
  <p className='text-gray-600 text-sm'>BUS-001 • 14:00</p>
  </div>
  <div>
    <p className='bg-blue-200 p-1 rounded-lg'>Scheduled</p>
  </div>
</div>



</div>



  </div>

</div>
{/* </div> */}
</div>

      </div>
  
  )
}

export default page
