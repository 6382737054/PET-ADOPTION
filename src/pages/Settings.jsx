import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [userSettings, setUserSettings] = useState({
    email: '',
    phone: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load user settings from localStorage or API
    const storedUser = JSON.parse(localStorage.getItem('userSettings')) || {
      email: 'example@example.com',
      phone: '123-456-7890',
      address: '123 Main St'
    };
    setUserSettings(storedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSettings(prevSettings => ({
      ...prevSettings,
      [name]: value
    }));
  };

  const handleSave = () => {
    
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
    alert('Settings saved successfully!');
    navigate('/profile'); 
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h2>
          {isEditing ? (
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userSettings.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userSettings.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userSettings.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg ml-4 hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">Email: {userSettings.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">Phone: {userSettings.phone}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">Address: {userSettings.address}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
