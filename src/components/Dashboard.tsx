import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi'; // Only importing FiFilter from react-icons
import dealbuddy from '../assets/dealbuddy.svg'; 
import Header from './Header'; 
import NotificationPanel from './NotificationPanel'; // Import the NotificationPanel component
import people from '../assets/people.svg';
import activeTasks from '../assets/activeTasks.svg';
import activeTransactions from '../assets/activeTransactions.svg';
import ExampleTable from './Table'; 
import dashboardIcon from '../assets/dashboard.svg';
import transactionsIcon from '../assets/transactions.svg';
import vendorsIcon from '../assets/vendors.svg';
import subscriptionIcon from '../assets/subscription.svg';
import stepsIcon from '../assets/steps.svg';

const Dashboard: React.FC = () => {

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotificationPanel = () => {
    setIsNotificationOpen(!isNotificationOpen); // Toggle notification panel visibility
  };

  return (
    <div className="h-screen flex bg-[#F3F6F9] relative">
      <div className="w-64 bg-[#405189] text-[#ffffff80] font-poppins flex flex-col">
        <div className="flex flex-col items-center justify-center py-1">
          <img src={dealbuddy} alt="DealBuddy Logo" className="py-4 z-10" />
        </div>
        <span className="text-sm font-normal pl-5 pt-8 opacity-60">Menu</span>

        <div className="mt-6 pl-5">
          <ul className="space-y-4">
            <li className="flex items-center pl-6 py-2 hover:bg-blue-700 cursor-pointer">
              <img src={dashboardIcon} alt="Dashboard Icon" className="h- w-" />
              <span className="ml-3 text-[#ffffff80]">Dashboards</span>
            </li>
            <li className="flex items-center pl-6 py-2 hover:bg-blue-700 cursor-pointer">
              <img src={transactionsIcon} alt="Transactions Icon" className="h- w-" />
              <span className="ml-3 text-[#ffffff80]">Transactions</span>
            </li>
            <li className="flex items-center pl-6 py-2 hover:bg-blue-700 cursor-pointer">
              <img src={vendorsIcon} alt="Vendors Icon" className="h- w-" />
              <span className="ml-3 text-[#ffffff80]">Vendors</span>
            </li>
            <li className="flex items-center pl-6 py-2 hover:bg-blue-700 cursor-pointer">
              <img src={subscriptionIcon} alt="Subscription Icon" className="h- w-" />
              <span className="ml-3 text-[#ffffff80]">Subscription</span>
            </li>
            <li className="flex items-center pl-6 py-2 hover:bg-blue-700 cursor-pointer">
              <img src={stepsIcon} alt="Steps Icon" className="h- w-" />
              <span className="ml-3 text-[#ffffff80]">Steps</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <Header onNotificationClick={toggleNotificationPanel} />

        <div className="flex flex-col pt-2 pl-12 bg-gray-100">
          <h2 className="font-poppins text-[14.77px] text-[#495057]">Overview</h2>

          <button className="flex items-center bg-[#405189] text-white py-1 px-4 rounded-lg mt-2 self-start">
            <FiFilter className="mr-2" /> {/* Using FiFilter from react-icons */}
            This month
          </button>

          <div className="flex space-x-8 mt-6">
            <div className="flex flex-col bg-white shadow-md rounded-lg w-72 h-24 p-2 justify-between">
              <div className="flex items-start">
                <div className="bg-[#40518926] rounded-xl h-[42px] w-[42px] flex items-center justify-center mr-4">
                  <img src={activeTransactions} alt="Active Transactions Icon" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-md text-[#495057]">Active Transactions</span>
                  <h3 className="text-4xl font-bold text-[#405189]">9</h3>
                </div>
              </div>
              <span className="text-sm text-[#01B39C] mt-1 pl-12">Until this month</span>
            </div>

            <div className="flex flex-col bg-white shadow-md rounded-lg w-72 h-24 p-2 justify-between">
              <div className="flex items-start">
                <div className="bg-[#40518926] rounded-xl h-[42px] w-[42px] flex items-center justify-center mr-4">
                  <img src={people} alt="Closed Transactions Icon" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-md text-[#495057]">Closed Transactions</span>
                  <h3 className="text-4xl font-bold text-[#405189]">14</h3>
                </div>
              </div>
              <span className="text-sm text-[#01B39C] mt-1 pl-12">Until this month</span>
            </div>

            <div className="flex flex-col bg-white shadow-md rounded-lg w-72 h-24 p-2 justify-between">
              <div className="flex items-start">
                <div className="bg-[#40518926] rounded-xl h-[42px] w-[42px] flex items-center justify-center mr-4">
                  <img src={activeTasks} alt="Tasks Icon" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-md text-[#495057]">Tasks Assigned</span>
                  <h3 className="text-4xl font-bold text-[#405189]">2</h3>
                </div>
              </div>
              <span className="text-sm text-[#01B39C] mt-1 pl-12">Today</span>
            </div>
          </div>

          <div className="mt-4">
            <ExampleTable data={[]} />
          </div>
        </div>

        <div className="flex-grow p-4 bg-gray-100"></div>

        {/* Notification Panel */}
        {isNotificationOpen && (
          <div className="absolute top-[70px] right-4 z-50">
            <NotificationPanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
