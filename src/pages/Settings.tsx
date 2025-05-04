import { NavLink, Outlet } from "react-router";
import { MdOutlineManageAccounts, MdOutlineWarehouse } from "react-icons/md";
import { GoShieldLock, GoSignOut } from "react-icons/go";
import { RxPerson } from "react-icons/rx";

function Settings() {
  return (
    <div className="p-6 flex gap-6">
      <nav className="p-4 bg-white rounded-2xl w-xs h-[calc(100vh-7.5rem)] sticky top-6 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="mb-4 text-gray-400 text-base">حساب کاربری</h4>
            <div className="flex flex-col gap-4 px-4">
              <NavLink
                to="profile/user"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded-lg transition-colors ${
                    isActive ? "text-blue-700 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <MdOutlineManageAccounts size={24} />
                اطلاعات حساب کاربری
              </NavLink>
              <NavLink
                to="profile/security"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded-lg transition-colors ${
                    isActive ? "text-blue-700 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <GoShieldLock size={24} />
                امنیت حساب کاربری
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-gray-400 text-base">تنظیمات</h4>
            <div className="flex flex-col gap-4 px-4">
              <NavLink
                to="address-book/sender"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded-lg transition-colors ${
                    isActive ? "text-blue-700 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <MdOutlineWarehouse size={24} />
                آدرس فرستنده
              </NavLink>
              <NavLink
                to="address-book/customer"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded-lg transition-colors ${
                    isActive ? "text-blue-700 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <RxPerson size={24} />
                لیست مشتریان
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <button className="flex items-center justify-center gap-2 w-full p-2 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer text-gray-700">
            <GoSignOut size={24} />
            خروج از حساب کاربری
          </button>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
