const AdoptionForm = () => {
    return (
      <form className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Adoption Application</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Why do you want to adopt this pet?</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    );
  };
  
  export default AdoptionForm;
  