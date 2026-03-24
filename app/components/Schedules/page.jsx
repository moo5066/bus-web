'use client'

import Sidebar from '@/app/components/Sidebar/page.jsx'
import Link from 'next/link'
import React, { useState, useMemo } from 'react'
import { SlCalender } from "react-icons/sl";

const schedulesData = [
    { id: 1, route: 'City Express', bus: 'BUS-001', driver: 'John Smith', date: '3/17/2026', departure: '08:00 AM', arrival: '10:00 AM', status: 'Scheduled' },
    { id: 2, route: 'Suburb Link', bus: 'BUS-002', driver: 'Jane Doe', date: '3/17/2026', departure: '09:00 AM', arrival: '11:30 AM', status: 'In Progress' },
    { id: 3, route: 'Downtown Loop', bus: 'BUS-003', driver: 'Peter Jones', date: '3/16/2026', departure: '02:00 PM', arrival: '04:00 PM', status: 'Completed' },
    { id: 4, route: 'Airport Shuttle', bus: 'BUS-004', driver: 'Mary Johnson', date: '3/18/2026', departure: '11:00 AM', arrival: '12:00 PM', status: 'Scheduled' },
    { id: 5, route: 'Crosstown', bus: 'BUS-005', driver: 'David Garcia', date: '3/16/2026', departure: '05:00 PM', arrival: '06:30 PM', status: 'Completed' },
];

const StatCard = ({ title, value, colorClass = 'text-black' }) => (
    <div className='w-full p-5 rounded-lg flex flex-col gap-10 border border-gray-200 bg-white'>
        <p className='text-gray-600'>{title}</p>
        <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
    </div>
);

const TabButton = ({ label, current, onClick }) => (
    <button
        onClick={() => onClick(label)}
        className={`border p-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            current === label
            ? 'bg-black text-white'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
    >
        {label}
    </button>
);

const ScheduleRow = ({ schedule }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Scheduled':
                return 'bg-blue-100 text-blue-800';
            case 'In Progress':
                return 'bg-yellow-100 text-yellow-800';
            case 'Completed':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="border-b border-gray-200 text-sm text-gray-700 last:border-b-0">
            {/* Mobile Card View */}
            <div className="p-4 md:hidden">
                <div className="flex justify-between items-start mb-3">
                    <p className="font-bold text-gray-800 text-base">{schedule.route}</p>
                    <span className={`flex-shrink-0 ml-4 px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(schedule.status)}`}>
                        {schedule.status}
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="text-gray-500">Bus</div>
                    <div className="font-medium text-gray-800">{schedule.bus}</div>

                    <div className="text-gray-500">Driver</div>
                    <div className="font-medium text-gray-800">{schedule.driver}</div>

                    <div className="text-gray-500">Date</div>
                    <div className="font-medium text-gray-800 flex items-center gap-1">
                        <SlCalender className="text-gray-400" /> {schedule.date}
                    </div>

                    <div className="text-gray-500">Departure</div>
                    <div className="font-medium text-gray-800">{schedule.departure}</div>

                    <div className="text-gray-500">Arrival</div>
                    <div className="font-medium text-gray-800">{schedule.arrival}</div>
                </div>
                <div className="mt-4">
                    <p className='text-blue-600 cursor-pointer hover:underline font-medium'>Details</p>
                </div>
            </div>

            {/* Desktop Table Row View */}
            <div className='hidden md:grid md:grid-cols-8 md:gap-5 w-full items-center py-3'>
                <p className='font-medium'>{schedule.route}</p>
                <p>{schedule.bus}</p>
                <p>{schedule.driver}</p>
                <div className='flex items-center gap-2'>
                    <SlCalender className="text-gray-500" />
                    <p>{schedule.date}</p>
                </div>
                <p>{schedule.departure}</p>
                <p>{schedule.arrival}</p>
                <p>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(schedule.status)}`}>
                        {schedule.status}
                    </span>
                </p>
                <p className='text-blue-600 cursor-pointer hover:underline'>Details</p>
            </div>
        </div>
    );
};

const Page = () => {
    const [activeTab, setActiveTab] = useState('All');

    const stats = useMemo(() => ({
        total: schedulesData.length,
        scheduled: schedulesData.filter(s => s.status === 'Scheduled').length,
        inProgress: schedulesData.filter(s => s.status === 'In Progress').length,
        completed: schedulesData.filter(s => s.status === 'Completed').length,
    }), []);

    const filteredSchedules = useMemo(() => {
        if (activeTab === 'All') return schedulesData;
        return schedulesData.filter(schedule => schedule.status === activeTab);
    }, [activeTab]);

    const tabs = ['All', 'Scheduled', 'In Progress', 'Completed'];

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar/>
      <main className='p-5 h-full w-full overflow-y-auto'>
        <div className='flex justify-between items-start'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>Schedules</h1>
                <p className='text-gray-500'>Manage trip schedules and assignments</p>
            </div>
            <Link href='/schedules/add' className='bg-black h-9 text-white p-2 flex items-center rounded-lg hover:bg-gray-800 transition-colors'>
                <div className='flex gap-1 items-center px-2'>
                    <span>+</span>
                    <span>Add Schedule</span>
                </div>
            </Link>
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <StatCard title="Total Schedules" value={stats.total} />
            <StatCard title="Scheduled" value={stats.scheduled} colorClass="text-blue-500" />
            <StatCard title="Completed" value={stats.completed} colorClass="text-green-500" />
            <StatCard title="In Progress" value={stats.inProgress} colorClass="text-yellow-500" />
        </div>

        <div className='mt-10'>
            <div className='flex gap-3'>
                {tabs.map(tab => (
                    <TabButton key={tab} label={tab} current={activeTab} onClick={setActiveTab} />
                ))}
            </div>
        </div>

        <div className='mt-8 bg-white rounded-lg shadow'>
            <div className='p-5'>
                <div className='hidden md:grid md:grid-cols-8 md:gap-5 w-full font-bold text-sm text-gray-500 border-b pb-3'>
                    <p>Route</p>
                    <p>Bus</p>
                    <p>Driver</p>
                    <p>Date</p>
                    <p>Departure</p>
                    <p>Arrival</p>
                    <p>Status</p>
                    <p>Actions</p>
                </div>

                <div className='mt-2'>
                    {filteredSchedules.length > 0 ? (
                        filteredSchedules.map((schedule) => (
                            <ScheduleRow key={schedule.id} schedule={schedule} />
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500">
                            No schedules found for this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Page
