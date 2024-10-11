import React, { useState } from 'react';
import { FiSearch, FiSettings, FiMoon, FiBell } from 'react-icons/fi'; // Feather Icons for outlined style
import NotificationPanel from './NotificationPanel'; // Import the notification panel component

const Header: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State for notification panel

  // Function to toggle notification panel visibility
  const toggleNotificationPanel = () => {
    setIsNotificationOpen((prevState) => !prevState); // Toggle the panel
  };

  return (
    <div className="relative w-full">
      {/* Header Container */}
      <div className="flex justify-between items-center px-6 py-2 bg-white shadow-sm w-full">
        {/* Search bar */}
        <div className="flex items-center bg-gray-100 rounded-lg p-3 w-1/2">
          <FiSearch className="text-gray-500 mr-3 text-lg opacity-50" /> {/* Feather Search icon */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Icons and profile */}
        <div className="flex items-center space-x-8">
          {/* Icons */}
          <div className='pr-8 flex items-center space-x-6'>
            <FiSettings className="cursor-pointer text-2xl opacity-50" /> {/* Feather Settings icon */}
            <FiMoon className=" cursor-pointer text-2xl opacity-50" /> {/* Feather Moon icon */}
            <div className="relative">
              <FiBell
                className="cursor-pointer text-2xl opacity-50"
                onClick={toggleNotificationPanel} // Toggle notification panel on click
              />
              <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full" />
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center bg-gray-100 rounded-lg px-6 py-3">
            <img
              src="https://images.pexels.com/photos/16655128/pexels-photo-16655128/free-photo-of-positano-wedding-photographer.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Profile"
              className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <span className="text-sm font-semibold">Reema Jain</span>
              <span className="block text-xs text-gray-500">Seller</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Panel */}
      {isNotificationOpen && (
  <div className="absolute top-[80px] right-[18%] w-[300px] z-50">
    <NotificationPanel />
  </div>
)}

    </div>
  );
};

export default Header;
