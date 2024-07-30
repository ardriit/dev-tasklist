'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NewBooking: React.FC = () => {

    const [bookingData, setBookingData]=useState({
        service: '',
        doctor_name: '',
        start_time: '',
        end_time: '',
        date: '',
    })
 
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

 
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),

      });
      console.log("res", response)

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      setSuccess('Booking created successfully!');
      
      setTimeout(() => {
        router.push('/');
      }, 3000); 
   
  };

  return (
    <div className=" relative flex flex-col items-center my-10 border-2 w-1/2 mx-auto p-5 rounded-xl shadow-xl">
      <Link href="/"
                className="bg-blue-400 hover:bg-blue-700 text-white font-extrabold text-3xl py-1 px-4 rounded focus:outline-none focus:shadow-outline
                            absolute left-4 ">
               &#x2190;
             </Link>
      <h1 className='text-black font-bold text-2xl mb-6  '>Create a New Booking</h1>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service
          </label>
          <input
            type="text"
            id="service"
            value={bookingData.service}
            onChange={(e) => setBookingData({
                ...bookingData,
                service: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorName">
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            value={bookingData.doctor_name}
            onChange={(e) => setBookingData({
                ...bookingData,
                doctor_name: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            value={bookingData.start_time}
            onChange={(e) => setBookingData({
                ...bookingData,
                start_time: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime">
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            value={bookingData.end_time}
            onChange={(e) => setBookingData({
                ...bookingData,
                end_time: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={bookingData.date}
            onChange={(e) => setBookingData({
                ...bookingData,
                date: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
       <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        > Create Booking
        </button>
        
      </form>
    </div>
  );
};

export default NewBooking;
