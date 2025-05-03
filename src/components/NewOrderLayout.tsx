import { NavLink, Outlet } from "react-router";

function NewOrderLayout() {
  return (
    <div className="text-gray-700 pb-24 md:pb-6 p-6  md:bg-gray-100">
      <div className="flex items-center w-sm rounded-full h-10 mx-auto md:mt-0">
        <NavLink
          to="./single"
          className={({ isActive }) =>
            `w-full h-full cursor-pointer bg-white hover:bg-blue-50 transition-colors rounded-r-full border p-2 text-center ${
              isActive
                ? "text-blue-700 border-blue-700"
                : "border-gray-200 border-l-0"
            }`
          }
        >
          تکی
        </NavLink>
        <NavLink
          to="./bulk"
          className={({ isActive }) =>
            `w-full h-full cursor-pointer bg-white hover:bg-blue-50 transition-colors rounded-l-full border p-2 text-center ${
              isActive
                ? "text-blue-700 border-blue-700"
                : "border-gray-200 border-r-0"
            }`
          }
        >
          جمله
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default NewOrderLayout;
