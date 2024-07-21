import React from 'react';
import { Link } from 'react-router-dom';

const pets = [
  {
    id: 1,
    name: 'Bella',
    breed: 'Golden Retriever',
    description: 'Friendly and energetic, loves to play and go for walks.',
    image: '/images/bella.jpg',
  },
  {
    id: 2,
    name: 'Max',
    breed: 'Bulldog',
    description: 'Calm and affectionate, enjoys lounging and being around people.',
    image: '/images/max.jpg',
  },
  {
    id: 3,
    name: 'Luna',
    breed: 'Siamese Cat',
    description: 'Playful and curious with striking blue eyes.',
    image: '/images/luna.jpg',
  },
  // Add more pets as needed
];

const PetListings = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Available Pets for Adoption</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                  e.target.alt = 'Image not available';
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pet.name}</h3>
                <p className="text-gray-600 mb-4">{pet.breed}</p>
                <p className="text-gray-700 mb-4">{pet.description}</p>
                <Link to={`/pets/${pet.id}`} state={{ image: pet.image }}>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">
                    Adopt {pet.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetListings;
