import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const pets = [
  {
    id: 1,
    name: 'Bella',
    breed: 'Golden Retriever',
    description: 'Friendly and energetic, loves to play and go for walks.',
    image: '/images/bella.jpg',
    healthInfo: 'Fully vaccinated and spayed.',
    adoptionFee: '$200',
    howToAdopt: 'Contact us through the form below to schedule a visit.',
    reviews: [
      { name: 'Sarah', comment: 'Bella is a wonderful companion!' },
      { name: 'John', comment: 'Loves to play fetch and is very friendly.' },
    ],
  },
  {
    id: 2,
    name: 'Max',
    breed: 'Bulldog',
    description: 'Calm and affectionate, enjoys lounging and being around people.',
    image: '/images/max.jpg',
    healthInfo: 'Up-to-date on vaccinations, neutered.',
    adoptionFee: '$150',
    howToAdopt: 'Fill out the adoption form and we will get back to you.',
    reviews: [
      { name: 'Emily', comment: 'Max is the perfect couch buddy.' },
      { name: 'Chris', comment: 'Very calm and loving dog.' },
    ],
  },
  {
    id: 3,
    name: 'Luna',
    breed: 'Siamese Cat',
    description: 'Playful and curious with striking blue eyes.',
    image: '/images/luna.jpg',
    healthInfo: 'Spayed and current on vaccinations.',
    adoptionFee: '$180',
    howToAdopt: 'Contact us via phone or email for adoption inquiries.',
    reviews: [
      { name: 'Kate', comment: 'Luna is very playful and affectionate.' },
      { name: 'Alex', comment: 'A beautiful cat with a great personality.' },
    ],
  },
  // Add more pets as needed
];

const PetDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const pet = pets.find(pet => pet.id === parseInt(id));

  if (!pet) {
    return <div>Pet not found</div>;
  }

  const image = location.state?.image || pet.image;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img
              src={image}
              alt={pet.name}
              className="w-full h-80 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                e.target.alt = 'Image not available';
              }}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold mb-4">{pet.name}</h1>
            <p className="text-xl font-semibold mb-2">{pet.breed}</p>
            <p className="text-gray-700 mb-4">{pet.description}</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
              <p><strong>Health Info:</strong> {pet.healthInfo}</p>
              <p><strong>Adoption Fee:</strong> {pet.adoptionFee}</p>
              <p><strong>How to Adopt:</strong> {pet.howToAdopt}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
              <ul>
                {pet.reviews.map((review, index) => (
                  <li key={index} className="mb-2">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-600">{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
            <a href="mailto:info@petadoption.com" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">
              Express Interest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
