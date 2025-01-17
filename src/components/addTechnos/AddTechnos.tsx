import { useId } from "react";

type AddTechnosProps = {
  technos: string[];
  setTechnos: React.Dispatch<React.SetStateAction<string[]>>;
};

function AddTechnos({ technos, setTechnos }: AddTechnosProps) {
  //state;

  const technoSelectedId = useId();

  //Comportement;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTechnos(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add the new techno to the list;
    console.log("handleSubmit", technos);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center text-gray-800 my-12">
        Add a Technos !
      </h1>

      {/* Form to add a new techno */}
      <div className="container">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="max-w-3xl min-h-[400px] bg-gray-200 text-gray-800 text-lg mx-auto rounded-md shadow-2xl p-6"
        >
          {/* Techno Name */}
          <div>
            <div>
              <label htmlFor="techno" className="font-semibold">
                Techno Name:
              </label>
            </div>
            <div className="">
              <input
                type="text"
                id="techno"
                name="techno"
                placeholder="Your Technos..."
                value={technos}
                onChange={handleChange}
                className="w-full input input-primary max-w-xs bg-white text-gray-800 text-base"
              />
            </div>
          </div>

          {/* Category and select element */}
          <div className="text-gray-800 my-4">
            <div>
              <label htmlFor="category" className="font-semibold">
                Category:
              </label>
            </div>
            <div>
              <select
                id={technoSelectedId}
                name="technos-category"
                className="w-full select select-primary max-w-xs bg-white text-gray-800 text-base"
              >
                <option value="">Select a category</option>
                <option value="front">Front</option>
                <option value="back">Back</option>
                <option value="fullStack">FullStack</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Textarea element Description*/}
          <div>
            <div>
              <label htmlFor="description" className="font-semibold">
                Description:
              </label>
            </div>
            <div>
              <textarea
                id="description"
                name="description"
                placeholder="Your description..."
                cols={50}
                rows={5}
                className="w-full textarea textarea-primary bg-white text-gray-800 text-base"
              ></textarea>
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold my-4 py-2 px-4 rounded-md"
            >
              Add Techno
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
  );
}

export default AddTechnos;
