import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AddTechnos from "./components/addTechnos/AddTechnos";
import TechnosLists from "./components/TechnosLists/TechnosLists";
import Menu from "./menu/Menu";
import { useState } from "react";

function App() {
  const [technos, setTechnos] = useState<string[]>([]);

  // const handleAddTechno = (techno: string) => {
  //   console.log("handleAddTechnos", techno);
  //   //setTechnos([...technos, newTechno])
  // };
  return (
    <div className="bg-white min-h-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AddTechnos"
          element={<AddTechnos technos={technos} setTechnos={setTechnos} />}
        />
        <Route path="/TechnosLists" element={<TechnosLists />} />
      </Routes>
    </div>
  );
}

export default App;
