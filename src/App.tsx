import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/home/Home";
import AddTechnos from "./components/addTechnos/AddTechnos";
import TechnosLists from "./components/TechnosLists/TechnosLists";
import Menu from "./menu/Menu";
import { useState } from "react";
import { AddTechnoType } from "./typescript/CheckTypes";

function App() {
  //State
  const [technos, setTechnos] = useState<string[]>([]);

  //Comportement
  const handleAddTechno = (techno: AddTechnoType) => {
    console.log("handleAddTechnos", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  };

  const handleDelete = (id) => {
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
