const PetCard = ({ pet }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{pet.name}</h3>
          <p className="text-gray-600">{pet.breed}</p>
          <p className="mt-2">
            <a href={`/pets/${pet.id}`} className="text-green-600 hover:underline">
              View Details
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default PetCard;
  