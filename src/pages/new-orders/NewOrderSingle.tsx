import { useState } from "react";
import { FaBox, FaClock, FaShippingFast, FaWallet } from "react-icons/fa";

import OrderInfo from "../../sections/new-order-single/OrderInfo";
import Payment from "../../sections/new-order-single/Payment";
import ShippingService from "../../sections/new-order-single/ShippingService";
import Timing from "../../sections/new-order-single/Timing";

const steps = [OrderInfo, ShippingService, Timing, Payment];

function NewOrderSingle() {
  const [step, setStep] = useState(1);

  function handleNextStep() {
    if (step < 4) {
      setStep(step + 1);
    }
    return;
  }
  function handlePrevStep() {
    if (step > 1) {
      setStep(step - 1);
    }
    return;
  }

  return (
    <section className="mt-12">
      <div className="justify-center flex items-center gap-2">
        <div
          className={`relative transition-colors ${
            step >= 1 ? "text-blue-600" : "text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaBox size={20} />
            <span
              className={`md:w-30 min-w-10 h-[1px] transition-colors ${
                step >= 2 ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          </div>

          <span className="absolute -top-8 translate-x-2/5 whitespace-nowrap hidden md:block">
            اطلاعات سفارش
          </span>
        </div>

        <div
          className={`relative transition-colors ${
            step >= 2 ? "text-blue-600" : "text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaShippingFast size={20} />
            <span
              className={`md:w-30 min-w-10 h-[1px] transition-colors ${
                step >= 3 ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          </div>

          <span className="absolute -top-8 translate-x-2/5 whitespace-nowrap hidden md:block">
            انتخاب سرویس‌دهنده
          </span>
        </div>

        <div
          className={`relative transition-colors ${
            step >= 3 ? "text-blue-600" : "text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaClock size={20} />
            <span
              className={`md:w-30 min-w-10 h-[1px] transition-colors ${
                step >= 4 ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          </div>

          <span className="absolute -top-8 translate-x-2/5 whitespace-nowrap hidden md:block">
            زمان‌بندی ارسال
          </span>
        </div>

        <div
          className={`relative transition-colors ${
            step == 4 ? "text-blue-600" : "text-gray-300"
          }`}
        >
          <div>
            <FaWallet size={20} />
          </div>

          <span className="absolute -top-8 right-1/2 translate-x-1/2 whitespace-nowrap hidden md:block">
            پرداخت
          </span>
        </div>
      </div>

      <div className="mt-6">
        {steps.map(
          (Step, index) =>
            step == index + 1 && <Step key={index} nextStep={handleNextStep} />
        )}
      </div>

      <div className="flex items-center justify-around mt-6">
        <button
          onClick={handlePrevStep}
          className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white cursor-pointer transition-colors"
        >
          قبلی
        </button>

        <button
          onClick={handleNextStep}
          className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white cursor-pointer transition-colors"
        >
          بعدی
        </button>
      </div>
    </section>
  );
}

export default NewOrderSingle;
