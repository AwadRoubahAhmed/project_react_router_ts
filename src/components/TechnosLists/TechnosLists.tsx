import { AddTechnoType } from "../../typescript/CheckTypes";
import TechnoItem from "./TechnoItem/TechnoItem";

// Type definitions
export type TechnosListsProps = {
  technos: AddTechnoType[];
  handleDelete: (id: string) => void;
};

const TechnosLists = ({ technos, handleDelete }: TechnosListsProps) => {
  return (
    <div className="max-w-2xl min-h-[300px] bg-gray-300 text-gray-800 mx-auto my-12 p-10 rounded-md shadow-2xl">
      <h1 className="text-3xl text-center font-bold py-6">All Technos !</h1>
      <TechnoItem technos={technos} handleDelete={handleDelete} />
    </div>
  );
};

export default TechnosLists;
