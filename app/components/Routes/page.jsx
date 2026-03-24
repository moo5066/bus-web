import React from 'react'
import Sidebar from '@/app/components/Sidebar/page.jsx'
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";

import Link from 'next/link'
const page = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
<Sidebar/>

<div className='h-20 w-full h-full overflow-y-auto p-7 '>
  <div>
    <div className='flex justify-between'>
    <div className='flex flex-col'>
<h1 className='font-bold text-xl'>Routes</h1>
<p className='text-gray-500'>Manage bus routes and stops</p>
  </div>

  <div className='bg-black text-white h-10 items-center justify-center flex p-2 rounded-lg'>
    <Link href='/routes'>+  Add Route</Link>
  </div>
</div>


<div className='space-y-5 flex flex-col items-center md:flex-row md:justify-between md:gap-5 md:items-center lg: mt-10'>
  <div className='border border-gray-300 rounded-lg w-80 h-37 flex flex-col gap-15 p-5'>
    <p className='font-semibold'>Total Routes</p>
    <p className='font-bold text-3xl'>4</p>
  </div>

   <div className='border border-gray-300 rounded-lg w-80 h-37 flex flex-col gap-15 p-5'>
    <p  className='font-semibold'>Total Distance</p>
    <p className='font-bold text-3xl'>148 km</p>
  </div>

   <div className='border border-gray-300 rounded-lg w-80 h-37 flex flex-col gap-15 p-5'>
    <p className='font-semibold'>Avg Duration</p>
    <p className='font-bold text-3xl'>73 min</p>
  </div>

   <div className='border border-gray-300 rounded-lg w-80 h-37 flex flex-col gap-15 p-5'>
    <p className='font-semibold'>Total Stops</p>
    <p className='font-bold text-3xl'>20</p>


  </div>
</div>

<div className='mt-20 border border-gray-300 p-3  rounded-lg w-full'>
  <div>
  <div>
  <div className='flex justify-between'>
    <div className='mt-2 flex flex-col'>
    <h1 className='text-gray-700 text-xl font-bold'>City Express</h1>
<div className='flex gap-4 items-center text-gray-500 '>
<CiLocationOn/>
<p>Downtown Terminal</p>
<FaArrowRightLong size={15}/>
<p>Airport</p> 
</div>
</div>

<div className='bg-green-300 h-5 flex items-center p-1 rounded-md hover:bg-green-400'>
  <p className='text-sm text-gray-500'>Active</p>
</div>
</div>

<div className='flex flex-col mt-5 gap-2 lg:flex-row lg:justify-between lg:items-center lg:pr-100'>

<div className='flex mt-7 gap-2 items-center'>
  <CiLocationOn size={20}/>

  <div>
    <p className='text-gray-600'>Distance</p>
    <h1 className='text-black text-lg font-medium'>25 km</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <BsStopwatch size={20}/>

  <div>
    <p className='text-gray-600'>Duration</p>
    <h1 className='text-black text-lg font-medium'>45 min</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <LuDollarSign size={20}/>

  <div>
    <p className='text-gray-600'>Fare</p>
    <h1 className='text-black text-lg font-medium'>$15</h1>
 </div>
</div>

</div>

<div>
  <div>
    <p className='m-2'>Stops (5)</p>
    
<div className='flex gap-3 w-full'>
  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    <p>1.Residential Area</p>
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
2. Metro Station
 </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
    3. City Hall
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    4. Business Hub
  </div>
  <div className='bg-gray-100 px-0.5 py-0.5 text-sm rounded-lg border border-gray-300'>
   5. Corporate Park
  </div>
</div>
</div>
</div>


  <div className='mt-7'>
    <div className='flex gap-5'>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>Eidt Route</h1>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>View Schedules</h1>
    </div>
  </div>
  
 </div>
</div>
</div>

<div className='mt-20 border border-gray-300 p-3  rounded-lg w-full'>
  <div>
  <div>
  <div className='flex justify-between'>
    <div className='mt-2 flex flex-col'>
    <h1 className='text-gray-700 text-xl font-bold '>Coastal Route</h1>
<div className='flex gap-4 items-center text-gray-500 '>
<CiLocationOn/>
<p>Main Station</p>
<FaArrowRightLong size={15}/>
<p>Beach Resort</p> 
</div>
</div>

<div className='bg-green-300 h-5 flex items-center p-1 rounded-md hover:bg-green-400'>
  <p className='text-sm text-gray-500'>Active</p>
</div>
</div>

<div className='flex flex-col mt-5 gap-2 lg:flex-row lg:justify-between lg:items-center lg:pr-100'>

<div className='flex mt-7 gap-2 items-center'>
  <CiLocationOn size={20}/>

  <div>
    <p className='text-gray-600'>Distance</p>
    <h1 className='text-black text-lg font-medium'>45 km</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <BsStopwatch size={20}/>

  <div>
    <p className='text-gray-600'>Duration</p>
    <h1 className='text-black text-lg font-medium'>90 min</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <LuDollarSign size={20}/>

  <div>
    <p className='text-gray-600'>Fare</p>
    <h1 className='text-black text-lg font-medium'>$25</h1>
 </div>
</div>

</div>

<div>
  <div>
    <p className='m-2'>Stops (5)</p>
    
<div className='flex gap-3 w-full'>
  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    <p>1.Main Station</p>
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
2. Harbor View
 </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
    3. Lighthouse
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    4. Seaside
  </div>
  <div className='bg-gray-100 px-0.5 py-0.5 text-sm rounded-lg border border-gray-300'>
   5. Beach Resort

  </div>
</div>
</div>
</div>


  <div className='mt-7'>
    <div className='flex gap-5'>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>Eidt Route</h1>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>View Schedules</h1>
    </div>
  </div>
  
 </div>
</div>
</div>
<div className='mt-20 border border-gray-300 p-3  rounded-lg w-full'>
  <div>
  <div>
  <div className='flex justify-between'>
    <div className='mt-2 flex flex-col'>
    <h1 className='text-gray-700 text-xl font-bold '>Mountain Line</h1>
<div className='flex gap-4 items-center text-gray-500 '>
<CiLocationOn/>
<p>City Center</p>
<FaArrowRightLong size={15}/>
<p>Hill Station</p> 
</div>
</div>

<div className='bg-green-300 h-5 flex items-center p-1 rounded-md hover:bg-green-400'>
  <p className='text-sm text-gray-500'>Active</p>
</div>
</div>

<div className='flex flex-col mt-5 gap-2 lg:flex-row lg:justify-between lg:items-center lg:pr-100'>

<div className='flex mt-7 gap-2 items-center'>
  <CiLocationOn size={20}/>

  <div>
    <p className='text-gray-600'>Distance</p>
    <h1 className='text-black text-lg font-medium'>60 km</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <BsStopwatch size={20}/>

  <div>
    <p className='text-gray-600'>Duration</p>
    <h1 className='text-black text-lg font-medium'>120 min</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <LuDollarSign size={20}/>

  <div>
    <p className='text-gray-600'>Fare</p>
    <h1 className='text-black text-lg font-medium'>$30</h1>
 </div>
</div>

</div>

<div>
  <div>
    <p className='m-2'>Stops (5)</p>
    
<div className='flex gap-3 w-full'>
  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    <p>1.City Center</p>
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
2.  Suburb A
 </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
    3.  Suburb B
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    4. Valley View
  </div>
  <div className='bg-gray-100 px-0.5 py-0.5 text-sm rounded-lg border border-gray-300'>
   5. Hill Station
  </div>
</div>
</div>
</div>


  <div className='mt-7'>
    <div className='flex gap-5'>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>Eidt Route</h1>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>View Schedules</h1>
    </div>
  </div>
  
 </div>
</div>
</div>
<div className='mt-20 border border-gray-300 p-3  rounded-lg w-full'>
  <div>
  <div>
  <div className='flex justify-between'>
    <div className='mt-2 flex flex-col'>
    <h1 className='text-gray-700 text-xl font-bold '>Business District</h1>
<div className='flex gap-4 items-center text-gray-500 '>
<CiLocationOn/>
<p>Residential Area</p>
<FaArrowRightLong size={15}/>
<p>Corporate Park</p> 
</div>
</div>

<div className='bg-green-300 h-5 flex items-center p-1 rounded-md hover:bg-green-400'>
  <p className='text-sm text-gray-500'>Active</p>
</div>
</div>

<div className='flex flex-col mt-5 gap-2 lg:flex-row lg:justify-between lg:items-center lg:pr-100'>

<div className='flex mt-7 gap-2 items-center'>
  <CiLocationOn size={20}/>

  <div>
    <p className='text-gray-600'>Distance</p>
    <h1 className='text-black text-lg font-medium'>18 km</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <BsStopwatch size={20}/>

  <div>
    <p className='text-gray-600'>Duration</p>
    <h1 className='text-black text-lg font-medium'>35 min</h1>
 </div>
</div>

<div className='flex mt-7 gap-2 items-center'>
  <LuDollarSign size={20}/>

  <div>
    <p className='text-gray-600'>Fare</p>
    <h1 className='text-black text-lg font-medium'>$12</h1>
 </div>
</div>

</div>

<div>
  <div>
    <p className='m-2'>Stops (5)</p>
    
<div className='flex gap-3 w-full'>
  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    <p>1.Residential Area</p>
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
2. Metro Station
 </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300'>
    3. City Hall
  </div>

  <div className='bg-gray-100 p-1 text-sm rounded-lg border border-gray-300 '>
    4. Business Hub
  </div>
  <div className='bg-gray-100 px-0.5 py-0.5 text-sm rounded-lg border border-gray-300'>
   5. Corporate Park
  </div>
</div>
</div>
</div>


  <div className='mt-7 '>
    <div className='flex gap-5 '>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>Eidt Route</h1>
      <h1 className='border border-gray-300 p-1 rounded-lg hover:bg-gray-400'>View Schedules</h1>
    </div>
  </div>
  
 </div>
</div>
</div>

 






  </div>
</div>



   </div>
  )
}

export default page



//  <div className='flex h-screen'>
//       <div>
//     <Sidebar/>
//         </div>
//         <div>
//           <div className='flex p-5 w-full items-center  justify-between'>
//       <div>
      
//         <div className='flex flex-col'>
//         <h1 className='font-bold text-2xl'>Routes</h1>
//         <p className='text-gray-500'>Manage bus routes and stops</p>
//         </div>
//         <div className='bg-black h-10 text-white items-center justify-center rounded-lg cursor-pointer p-2'>
//           <p>+  Add Route</p>
//         </div>
//       </div>
// </div>
// <div>

//   <div>
//     <p>Total Routes</p>
//     <p>4</p>
//   </div>

//    <div>
//     <p>Total Distance</p>
//     <p>148 km</p>
//   </div>

//    <div>
//     <p>Avg Duration</p>
//     <p>73 min</p>
//   </div>

//    <div>
//     <p>Total Stops</p>
//     <p>20</p>
//   </div>
// </div>



//     </div>
//     </div>