import { useNavigate } from "react-router";

import MapComp from "../components/MapComp";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white cursor-pointer"
        >
          ورود / ثبت نام
        </button>

        <button
          onClick={() => navigate("/shipping")}
          className="px-4 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white cursor-pointer"
        >
          حساب کاربری
        </button>
      </div>

      <div className="w-full h-[calc(100vh-6rem)] mt-4 relative rounded-2xl">
        <MapComp />
      </div>
    </div>
  );
}

export default Home;
