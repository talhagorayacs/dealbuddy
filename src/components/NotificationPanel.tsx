import React from 'react';

const NotificationPanel: React.FC = () => {
  const notifications = [
    {
      id: 1,
      name: 'Reema Jain',
      task: 'Reema Jain assigned you a task to complete the payment',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      id: 2,
      name: 'Alex Walt',
      task: 'Alex Walt assigned you a task to complete the payment',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: 3,
      name: 'William Maz',
      task: 'William Maz assigned you a task to complete the payment',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  ];

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center px-4 py-3 bg-[#405189] rounded-t-lg">
        <h2 className="text-white font-bold text-lg">NOTIFICATIONS</h2>
        <span className="text-sm text-[#405189] bg-white py-1 px-3 rounded-lg">4 new</span>
      </div>

      {/* Tab navigation */}
      <div className="flex justify-between border-b">
        <button className="w-1/2 py-2 font-bold text-[#405189] border-b-4 border-[#405189]">All</button>
        <button className="w-1/2 py-2 text-gray-500">Reminders</button>
      </div>

      {/* Notification items */}
      <div className="p-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start py-3">
            <img
              src={notification.avatar}
              alt={notification.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <p className="font-bold text-[#495057]">{notification.name}</p>
              <p className="text-sm text-gray-500">{notification.task}</p>
              <button className="mt-2 bg-[#01B39C] text-white text-xs px-3 py-1 rounded-lg w-fit">
                View task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
