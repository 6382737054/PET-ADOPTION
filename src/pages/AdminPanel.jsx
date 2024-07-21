import React from 'react';

const AdminPanel = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Manage Pets</h3>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-4">Add New Pet</button>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">Remove Pet</button>
      </div>
    </div>
  );
};

export default AdminPanel;
