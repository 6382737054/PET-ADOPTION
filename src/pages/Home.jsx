import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/pets.jpg" // Local image path
            alt="Hero"
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 text-center py-24 px-6 lg:py-32 lg:px-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Find Your New Best Friend</h1>
          <p className="text-lg lg:text-2xl mb-6">Discover loving pets ready for a new home. Give them a forever family!</p>
          <Link to="/pets" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">Explore Pets</Link>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Pets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/bella.jpg" // Local image path
                alt="Bella"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Bella</h3>
                <p className="text-gray-600 mb-2">Golden Retriever, 3 years old</p>
                <p className="text-gray-700">Friendly and energetic, loves to play and go for walks.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/max.jpg" // Local image path
                alt="Max"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Max</h3>
                <p className="text-gray-600 mb-2">Bulldog, 2 years old</p>
                <p className="text-gray-700">Calm and affectionate, enjoys lounging and being around people.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/luna.jpg" // Local image path
                alt="Luna"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Luna</h3>
                <p className="text-gray-600 mb-2">Siamese Cat, 1 year old</p>
                <p className="text-gray-700">Playful and curious with striking blue eyes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">Connect with other pet lovers, share stories, and participate in community events.</p>
        <Link to="/community" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">Join Now</Link>
      </section>

      {/* Single Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Pet Adoption Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
