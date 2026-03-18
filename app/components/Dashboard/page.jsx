import React from 'react'
import { TbBus } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import Link from 'next/link'


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
<h1>Total Buses</h1>
<TbBus size={25} className='bg-blue-200 p-1 rounded-lg text-blue-500'/>
</div>

<div className='mt-18  flex flex-col '>
  <h1 className='font-bold text-xl'>5</h1>
  <p className='text-gray-500'>4 active</p>
</div>
  </div>

</div>





      </div>
    </div>
  )
}

export default page
