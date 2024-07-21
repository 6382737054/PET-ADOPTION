import { useState } from 'react';

const PetGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <img
        src={images[currentIndex]}
        alt="Pet"
        className="w-full h-80 object-cover rounded-lg shadow-lg"
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
  );
};

export default PetGallery;
