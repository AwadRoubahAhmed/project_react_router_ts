import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AddTechnos from "./components/addTechnos/AddTechnos";
import TechnosLists from "./components/TechnosLists/TechnosLists";
import Menu from "./menu/Menu";
import { useState } from "react";
import { TechnoType } from "./typescript/CheckTypes";

function App() {
  const [technos, setTechnos] = useState([]);

  // technos
  // [
  //   { name: "React", category: "Front", description: "Learn React" },
  //   { name: "Node", category: "Back", description: "Learn Node" },
  // ];

  const handleAddTechno = (techno: TechnoType) => {
    console.log("handleAddTechnos", techno);
    //setTechnos([...technos, newTechno])
   
  };
  return (
    <div className="bg-white min-h-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AddTechnos"
          element={<AddTechnos handleAddTechno={handleAddTechno} a={10} />}
        />
        <Route path="/TechnosLists" element={<TechnosLists />} />
      </Routes>
    </div>
  );
}

export default App;
