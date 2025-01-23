import { TechnosListsProps } from "../TechnosLists";

function TechnoItem({ technos, handleDelete }: TechnosListsProps) {
  return (
    <div>
      {technos.map((techno) => (
        <div
          key={techno.technoid}
          className="p-4 my-4 border text-center text-slate-100 shadow-2xl bg-slate-900 rounded-md"
        >
          <h2 className="font-bold text-lg">Techno</h2>
          <h2 className="mb-3">{techno.technoname}</h2>
          <h3 className="font-bold text-lg">Category</h3>
          <p className="mb-3">{techno.technocategory}</p>
          <h3 className="font-bold text-lg">Description</h3>
          <p className="">{techno.technodescription}</p>
          {/* Add a delete button here to remove the techno from the list */}
          <div>
            <button
              type="submit"
              onClick={() => handleDelete(techno.technoid)}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold my-4 py-2 px-4 rounded-md"
            >
              Delete Techno
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechnoItem;
