import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white cursor-pointer"
        >
          ورود / ثبت نام
        </button>
      </div>
    </>
  );
}

export default Home;
