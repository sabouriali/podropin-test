import { NavLink, useNavigate } from "react-router";
import { BsBox, BsFolder } from "react-icons/bs";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";

import logo from "../assets/1000016235-removebg-preview.png";

function UserNav() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed bottom-0 right-0 flex md:hidden items-center justify-around w-full h-18 px-3 py-2 text-xs border-t border-gray-100 z-10 bg-white">
        <NavLink
          to="/shipping"
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1.5 cursor-pointer transition-colors ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          <BsBox size={24} />
          <span>سفارش‌ها</span>
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1.5 cursor-pointer transition-colors ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          <BsFolder size={24} />
          <span>فایل‌ها</span>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1.5 cursor-pointer transition-colors ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          <IoStatsChartOutline size={24} />
          <span>گزارش‌ها</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1.5 cursor-pointer transition-colors ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          <IoSettingsOutline size={24} />
          <span>تنظیمات</span>
        </NavLink>
      </nav>

      <nav className="fixed top-0 right-0 hidden md:flex items-center justify-between w-full h-18 pr-5 pl-10 text-base bg-white z-10">
        <div className="flex items-center gap-6 h-full">
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img src={logo} alt="باردو" className="h-10" />
          </button>
          <NavLink
            to="/shipping"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 h-full border-b-2 cursor-pointer transition-colors ${
                isActive
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-700 border-transparent"
              }`
            }
          >
            <BsBox size={24} />
            <span>سفارش‌ها</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 h-full border-b-2 cursor-pointer transition-colors ${
                isActive
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-700 border-transparent"
              }`
            }
          >
            <IoStatsChartOutline size={24} />
            <span>گزارش‌ها</span>
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 h-full border-b-2 cursor-pointer transition-colors ${
                isActive
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-700 border-transparent"
              }`
            }
          >
            <BsFolder size={24} />
            <span>فایل‌ها</span>
          </NavLink>
        </div>

        <div className="h-full">
          <NavLink
            to="/settings"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 h-full border-b-2 cursor-pointer transition-colors ${
                isActive
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-700 border-transparent"
              }`
            }
          >
            <IoSettingsOutline size={24} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default UserNav;
