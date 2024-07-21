const SearchBar = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for pets..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <div className="mt-4 flex justify-between">
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">All Types</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            {/* Add more options */}
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  