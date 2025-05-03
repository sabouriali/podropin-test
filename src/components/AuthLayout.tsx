import { Outlet } from "react-router";

import pic from "../assets/auth-342c7766.svg";

function AuthLayout() {
  return (
    <div className="flex items-start justify-center gap-4 p-4">
      <Outlet />

      <div className="bg-[#f6f7f9] w-full h-[calc(100vh-2rem)] rounded-2xl items-center justify-center hidden md:flex">
        <img src={pic} alt="pic" />
      </div>
    </div>
  );
}

export default AuthLayout;
