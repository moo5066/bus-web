

import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";



const page = () => {
  return (
    <div>

    {/* when its close */}
  <div className='h-screen p-8 w-full border-r border-gray-300'>
    <div className='flex flex-col space-y-5'>
    <div>
    <IoIosMenu size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer'/>
    <hr className='-mx-8 text-gray-300 mt-3' />
</div>

<div className='flex flex-col space-y-5 text-gray-700'>
<MdOutlineDashboard size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer' />
<GrLocation size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer' />
<FaRegCalendar size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer' />
<MdPeopleAlt size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer' />
<TbBrandBooking size={30} className='hover:bg-gray-200 p-1 rounded-lg cursor-pointer' />
</div>
</div>




  </div>
    </div>
  )
}

export default page
