import React from 'react';

const Community = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
      <p className="text-lg text-gray-700 mb-8">
        Connect with other pet lovers, share your pet stories, and participate in community events.
      </p>
      <img 
        src="https://images.unsplash.com/photo-1506748686214e9df14f15f5c7c" 
        alt="Community" 
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Join Now</button>
    </div>
  );
};

export default Community;
