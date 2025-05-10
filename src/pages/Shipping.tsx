import { useState } from "react";
import { useNavigate } from "react-router";
import { BsPlusLg } from "react-icons/bs";

import empty from "../assets/empty-states-b05486d3.svg";

function Shipping() {
  const [selectedTab, setSelectedTab] = useState<
    "new" | "licensed" | "sent" | "canceled" | "all"
  >("all");

  const navigate = useNavigate();

  function handleTab(tab: typeof selectedTab) {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
    return;
  }

  return (
    <section className="text-gray-700 md:p-4 md:container mx-auto">
      <div className="h-17.5 content-center">
        <h1 className="text-base font-semibold text-center md:text-right">
          سفارش‌ها
        </h1>
      </div>

      <div className="bg-white rounded-2xl md:p-6 mx-auto">
        <div className="flex items-center overflow-x-scroll border-b border-gray-200 no-scrollbar">
          <button
            onClick={() => handleTab("all")}
            className={`h-10 px-6 cursor-pointer border-b-2 whitespace-nowrap transition-colors ${
              selectedTab === "all"
                ? "text-blue-600 border-blue-600"
                : "border-transparent"
            }`}
          >
            همه سفارش‌ها
          </button>
          <button
            onClick={() => handleTab("new")}
            className={`h-10 px-6 cursor-pointer border-b-2 whitespace-nowrap transition-colors ${
              selectedTab === "new"
                ? "text-blue-600 border-blue-600"
                : "border-transparent"
            }`}
          >
            سفارش‌های جدید
          </button>
          <button
            onClick={() => handleTab("licensed")}
            className={`h-10 px-6 cursor-pointer border-b-2 transition-colors ${
              selectedTab === "licensed"
                ? "text-blue-600 border-blue-600"
                : "border-transparent"
            }`}
          >
            بارنامه‌دار
          </button>
          <button
            onClick={() => handleTab("sent")}
            className={`h-10 px-6 cursor-pointer border-b-2 whitespace-nowrap transition-colors ${
              selectedTab === "sent"
                ? "text-blue-600 border-blue-600"
                : "border-transparent"
            }`}
          >
            ارسال شده
          </button>
          <button
            onClick={() => handleTab("canceled")}
            className={`h-10 px-6 cursor-pointer border-b-2 whitespace-nowrap transition-colors ${
              selectedTab === "canceled"
                ? "text-blue-600 border-blue-600"
                : "border-transparent"
            }`}
          >
            لغو شده
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={empty} alt="empty" className="mb-2" />
          <p className="text-black mb-1.25">شما سفارش ثبت شده‌ای ندارید!</p>
          <p className="text-gray-400 mb-6">
            همین حالا می توانید سفارش‌های خود را ثبت کنید.
          </p>
          <div className="w-85">
            <button
              onClick={() => navigate("../new-order/single")}
              className="flex items-center justify-center gap-2 px-2.5 w-full  h-10 rounded-lg bg-blue-700 hover:bg-blue-800 text-white cursor-pointer transition-colors"
            >
              <BsPlusLg />
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shipping;
