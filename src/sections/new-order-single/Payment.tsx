import { useState } from "react";
import {
  FaBox,
  FaCreditCard,
  FaMoneyBill,
  FaMoneyBills,
} from "react-icons/fa6";
import { IoReceipt } from "react-icons/io5";

const paymentMethods = [
  { title: "پرداخت اینترنتی", Logo: FaCreditCard },
  { title: "پرداخت در محل", Logo: FaMoneyBill },
];

function Payment() {
  const [method, setMethod] = useState<number>();

  return (
    <>
      <p className="text-gray-400 mb-4">روش پرداخت را انتخاب کنید:</p>

      <section className="p-4 bg-white rounded-2xl mb-6 md:max-w-[calc(100vw-28.5rem)] md:w-[919.733px] min-w-sm space-y-4">
        {paymentMethods.map(({ title, Logo }, index) => (
          <div
            key={index}
            onClick={() => setMethod(index)}
            className={`border rounded-lg p-4 flex items-center gap-4 h-16 cursor-pointer transition-colors ${
              method === index ? "border-blue-600" : "border-gray-200"
            }`}
          >
            <Logo size={24} />

            <h3>{title}</h3>
          </div>
        ))}

        <div className="h-0.25 w-full my-10 bg-gray-100" />

        <div>
          <h3 className="flex items-center gap-2 mb-6">
            <FaBox size={20} />
            تعداد کل مرسولات:
          </h3>
          <h3 className="flex items-center gap-2 mb-6">
            <FaMoneyBills size={20} />
            هزینه جمع‌آوری
          </h3>

          <div className="h-0.25 w-full my-6 bg-gray-100" />

          <h3 className="flex items-center gap-2">
            <IoReceipt size={20} />
            هزینه نهایی:
          </h3>
        </div>
      </section>
    </>
  );
}

export default Payment;
