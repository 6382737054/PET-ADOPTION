import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState({
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    // Load user settings from localStorage or API
    const storedUser = JSON.parse(localStorage.getItem('userSettings')) || {
      email: 'example@example.com',
      phone: '123-456-7890',
      address: '123 Main St'
    };
    setUser(storedUser);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img 
              src='/images/profile-placeholder.jpg'  // Reference to the local image in public/images
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">User Profile</h2>
            <p className="text-gray-600 text-lg text-center mb-6">Manage your profile details and settings here.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">{user.address}</p>
            </div>
            <Link 
              to="/settings"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700 transition"
            >
              Edit Profile
            </Link>
          </div>
          <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Adoption History</h3>
            <ul className="list-disc list-inside space-y-2">
              {/* Example items, replace with dynamic content */}
              <li className="text-gray-600">Adopted Bella - 2024-01-15</li>
              <li className="text-gray-600">Adopted Max - 2024-03-22</li>
              <li className="text-gray-600">Adopted Luna - 2024-06-10</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
