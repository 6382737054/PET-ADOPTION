import { useState } from 'react';

const featuredPets = [

  { id: 1, name: 'Bella', breed: 'Labrador', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Lucy', breed: 'Bulldog', image: '/path/to/image2.jpg' },
  
];

const FeaturedPets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPets.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + featuredPets.length) % featuredPets.length
    );
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Pets</h2>
        <div className="relative max-w-md mx-auto">
          <img
            src={featuredPets[currentIndex].image}
            alt={featuredPets[currentIndex].name}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
