import React from 'react'
import Sidebar from './components/Sidebar/page.jsx'
import Dashboard from './components/Dashboard/page.jsx'

const page = () => {
  return (
    <div className='flex'>
      <div>
      <Sidebar/>
      </div>
     <Dashboard/>
    </div>
  )
}

export default page
