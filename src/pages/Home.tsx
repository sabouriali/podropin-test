import { useNavigate } from "react-router";

import van from "../assets/9959026.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex items-center gap-4 p-4">
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
      </nav>

      <div className="container mx-auto p-4 mt-8 h-[calc(100vh-6.75rem)]">
        <h1 className="text-5xl">باردو</h1>
        <h2 className="text-[2rem] text-gray-400">
          پلتفرم جامع حمل و نقل سریع
        </h2>

        <div className="flex items-center justify-center">
          <img
            src={van}
            alt="van"
            className="max-h-[calc(100vh-14.625rem)] w-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
