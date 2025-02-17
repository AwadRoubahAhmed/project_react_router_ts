import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container sticky top-0 z-50 flex">
      <nav className="w-full h-[50px] bg-gray-200 border-b-4 text-slate-800 text-lg font-bold p-2">
        <ul className="flex justify-center items-center space-x-14">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : undefined
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/AddTechnos"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : undefined
              }
            >
              AddTechnos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/TechnosLists"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : undefined
              }
            >
              All Techonos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
