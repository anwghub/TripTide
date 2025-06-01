import { CalendarDaysIcon, MapIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Searchbox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-12 w-[90%] max-w-6xl mx-auto shadow-lg">
      {/* Location */}
      <div className="flex items-start space-x-4">
        <MapIcon className="w-6 h-6 text-purple-600 mt-1" />
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            placeholder="Where do you want to travel?"
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>
      </div>

      {/* Start Date */}
      <div className="flex items-start space-x-4">
        <CalendarDaysIcon className="w-6 h-6 text-purple-600 mt-1" />
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-1">Start Date</label>
          <input
            type="date"
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="flex items-start space-x-4">
        <CalendarDaysIcon className="w-6 h-6 text-purple-600 mt-1" />
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-1">End Date</label>
          <input
            type="date"
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>
      </div>

      {/* Guest Dropdown */}
      <div className="flex items-start space-x-4">
        <CalendarDaysIcon className="w-6 h-6 text-purple-600 mt-1" />
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-1">Guests</label>
          <select
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          >
            <option value="">Select Guests & Rooms</option>
            <option value="1-1">1 Guest, 1 Room</option>
            <option value="2-1">2 Guests, 1 Room</option>
            <option value="2-2">2 Guests, 2 Rooms</option>
            <option value="3-2">3 Guests, 2 Rooms</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
