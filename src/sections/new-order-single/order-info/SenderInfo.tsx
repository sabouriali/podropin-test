import { useNavigate } from "react-router";
import { BsPlusLg } from "react-icons/bs";

function SenderInfo() {
  const navigate = useNavigate();

  return (
    <section className="p-4 bg-white rounded-2xl mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3>اطلاعات فرستنده</h3>
        <button
          onClick={() => navigate("/settings/address-book/sender")}
          className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
        >
          <BsPlusLg size={20} />
          افزودن آدرس
        </button>
      </div>

      <p className="text-gray-400 text-xs">
        برای ثبت سفارش باید ابتدا یک آدرس فرستنده اضافه کنید.
      </p>
    </section>
  );
}

export default SenderInfo;
