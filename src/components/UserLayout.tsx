import { Outlet } from "react-router";
import UserNav from "./UserNav";

function UserLayout() {
  return (
    <div>
      <UserNav />

      <div className="h-screen overflow-y-scroll bg-white md:bg-gray-100 pb-18 pt-0 md:pt-18 md:pb-0">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
