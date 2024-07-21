import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 text-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pet Adoption</h1>
        <nav>
          <Link to="/" className="mr-4 hover:text-blue-600 transition">Home</Link>
          <Link to="/pets" className="mr-4 hover:text-blue-600 transition">Pets</Link>
          <Link to="/profile" className="mr-4 hover:text-blue-600 transition">Profile</Link>
          <Link to="/login" className="mr-4 hover:text-blue-600 transition">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
