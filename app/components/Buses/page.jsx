import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar/page'

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

          <Link href='/components/Buses/add' className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold'>
            + Add Bus
          </Link>
        </div>
        {/* You can add your list of buses or a data table here */}
      </main>
    </div>
  )
}

export default page
