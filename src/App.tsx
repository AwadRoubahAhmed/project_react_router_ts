import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/home/Home";
import AddTechnos from "./components/addTechnos/AddTechnos";
import TechnosLists from "./components/TechnosLists/TechnosLists";
import Menu from "./menu/Menu";
import { useEffect, useState } from "react";
import { AddTechnoType } from "./typescript/CheckTypes";
import useLocalStorage from "./Hooks/UseLocalStorage";
function App() {
  //State
  const [technos, setTechnos] = useState<AddTechnoType[]>([]);

  //Local Storage;
  const STORAGE_KEY = "technos";
  const [technosLS, setTechnosLS] = useLocalStorage<AddTechnoType[]>(
    STORAGE_KEY,
    []
  );

  //Comportement

  useEffect(() => {
    console.log("useEffect called with effect set to ", technos);
    setTechnosLS(technos);
  }, [technos]);

  const handleAddTechno = (techno: AddTechnoType) => {
    console.log("handleAddTechnos", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  };

  const handleDelete = (id: string) => {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  };

  return (
    <div className="bg-white min-h-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AddTechnos"
          element={<AddTechnos handleAddTechno={handleAddTechno} />}
        />
        <Route
          path="/TechnosLists"
          element={
            <TechnosLists technos={technos} handleDelete={handleDelete} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
