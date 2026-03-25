'use client'
import React, { useState } from 'react' 
import Sidebar from '@/app/components/Sidebar/page.jsx'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'

const Page = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Central Data Source
  const allBookings = [
    { id: '#1', name: 'Alice Cooper', phone: '+1-555-1001', route: 'City Express', bus: 'BUS-001', seat: 'A1', fare: '$15', status: 'Confirmed' },
    { id: '#2', name: 'Bob Martin', phone: '+1-555-1002', route: 'City Express', bus: 'BUS-001', seat: 'A2', fare: '$15', status: 'Confirmed' },
    { id: '#3', name: 'Carol White', phone: '+1-555-1003', route: 'Coastal Route', bus: 'BUS-002', seat: 'B1', fare: '$25', status: 'Confirmed' },
    { id: '#4', name: 'Daniel Green', phone: '+1-555-1004', route: 'Mountain Line', bus: 'BUS-004', seat: 'C1', fare: '$30', status: 'Confirmed' },
    { id: '#5', name: 'Eva Martinez', phone: '+1-555-1005', route: 'Business District', bus: 'BUS-005', seat: 'D1', fare: '$12', status: 'Completed' },
  ];

  // 2. Filtering Logic
  const filteredBookings = allBookings.filter(booking => {
    const matchesTab = activeTab === 'All' || booking.status === activeTab;
    const matchesSearch = booking.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabClass = (tab) => 
    `px-4 py-2 rounded-lg transition-colors ${
      activeTab === tab ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;

  return (
    <div className='flex h-screen bg-white'>
      <Sidebar />
      <div className='flex-1 h-full overflow-y-auto p-4 md:p-8'>
        {/* Header */}
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-2xl font-bold'>Bookings</h1>
            <p className='text-gray-600'>Manage passenger bookings and reservations</p>
          </div>
          <button className='flex gap-2 bg-black hover:bg-gray-800 text-white items-center px-4 py-2 rounded-lg transition-all'>
            <span>+</span><span>Add Booking</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            { label: 'Total Bookings', value: '5', color: 'text-black' },
            { label: 'Confirmed', value: '4', color: 'text-green-600' },
            { label: 'Completed', value: '1', color: 'text-black' },
            { label: 'Total Revenue', value: '$97', color: 'text-blue-600' },
          ].map((stat, i) => (
            <div key={i} className='border border-gray-200 p-6 flex flex-col justify-between h-32 rounded-xl shadow-sm'>
              <p className='text-sm text-gray-500 font-medium'>{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className='mt-12 flex flex-col lg:flex-row gap-4 items-center justify-between'>
          <div className='lg:w-[90%] w-full flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg focus-within:bg-white focus-within:ring-2 ring-black/5'>
            <CiSearch size={20} className="text-gray-400" />
            <input 
                type="text" 
                placeholder="Search by passenger name..." 
                className='bg-transparent outline-none w-full text-sm'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className='flex gap-2 w-full lg:w-auto'>
            {['All', 'Confirmed', 'Completed'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={tabClass(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className='mt-8 overflow-x-auto border border-gray-200 rounded-xl shadow-sm'>
          <table className='w-full text-left border-collapse'>
            <thead className='bg-gray-50 border-b border-gray-200'>
              <tr>
                {['Booking ID', 'Passenger', 'Contact', 'Route', 'Bus', 'Seat', 'Fare', 'Status', 'Actions'].map((h) => (
                  <th key={h} className='px-6 py-4 text-xs font-semibold text-gray-500 uppercase'>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 font-medium'>{booking.id}</td>
                  <td className='px-6 py-4'>{booking.name}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{booking.phone}</td>
                  <td className='px-6 py-4'>{booking.route}</td>
                  <td className='px-6 py-4 text-gray-600'>{booking.bus}</td>
                  <td className='px-6 py-4 text-gray-600'>{booking.seat}</td>
                  <td className='px-6 py-4 font-semibold'>{booking.fare}</td>
                  <td className='px-6 py-4'>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm'>
                    <div className='flex gap-3'>
                      <button className='font-semibold hover:underline'>View</button>
                      <button className='text-red-500 hover:text-red-700'>Cancel</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredBookings.length === 0 && (
            <div className="p-10 text-center text-gray-400">No bookings found for this category.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
