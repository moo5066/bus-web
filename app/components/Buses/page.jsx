import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar/page'
import { CiSearch } from "react-icons/ci";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-grow p-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Buses</h1>
            <p className='text-gray-500'>Manage your bus fleet</p>
          </div>

          <Link href='/' className='bg-black text-white px-4 py-2 rounded-lg  font-semibold'>
            + Add Bus
          </Link>
        </div>
        {/* You can add your list of buses or a data table here */}

<div className='md:w-[30%]'>
    <div className='flex space-x-3 items-center border border-gray-200 p-1 rounded-lg hover:border-blue-500'>
        <CiSearch size={25} className='text-gray-500'/>
   {/* <input type="text" placeholder='Search buses...'/> */}
   <p className='text-gray-400'>Search buses...</p>
    </div>
</div>

<div className='mt-30 flex flex-col gap-10 md:flex md:flex-row md:justify-between'>
    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>Total Buses</p>
        <h1 className='text-lg font-bold'>5</h1>
    </div>


    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>Active</p>
        <h1 className='text-lg font-bold'>4</h1>
    </div>

    <div className='sm:w-[50%] w-full flex flex-col gap-10  md:w-[40%] border border-gray-200 hover:border-blue-400 rounded-lg p-5'>
        <p className='text-gray-700 font-semibold'>In Maintenance</p>
        <h1 className='text-lg font-bold'>1</h1>
    </div>

</div>

      </main>
    </div>
  )
}

export default page
