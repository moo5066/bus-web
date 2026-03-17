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
    <IoIosMenu size={20}/>
    <hr className='-mx-8 text-gray-400 mt-3' />
</div>

<div className='flex flex-col space-y-5 text-black'>
<MdOutlineDashboard size={20} className='hover:bg-gray-200 hover:rounded-lg'/>
<TbBus size={20}/>
<GrLocation size={20}/>
<FaRegCalendar size={20}/>
<MdPeopleAlt size={20}/>
<TbBrandBooking size={20}/>
</div>
</div>




  </div>
    </div>
  )
}

export default page
