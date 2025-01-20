const TechnosLists = ({ technos, handleDelete }) => {
  return (
    <div className="max-w-2xl min-h-[300px] bg-gray-200 text-gray-800 mx-auto my-12 p-10 rounded-md shadow-2xl">
      <h1 className="text-3xl text-center font-bold py-6">All Technos !</h1>
      <div>
        {technos.map((techno) => (
          <div key={techno.technoid} className="p-4 border-red-600 text-center">
            <h2 className="">{techno.technoname}</h2>
            <h3>Category</h3>
            <p className="">{techno.technocategory}</p>
            <h3>Description</h3>
            <p className="">{techno.technodescription}</p>
            {/* Add a delete button here to remove the techno from the list */}
            <div>
              <button
                type="submit"
                onClick={() => handleDelete(technoid)}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold my-4 py-2 px-4 rounded-md"
              >
                Delete Techno
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnosLists;
