import React from 'react'
import Sidebar from '@/app/components/Sidebar/page.jsx'
import Link from 'next/link'
const page = () => {
  return (
   <div className='flex h-screen'>
<Sidebar/>

<div className='h-20 w-full p-5'>
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
<div>
  
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