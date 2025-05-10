import { FaBox, FaMoneyBills } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoHome, IoPerson, IoReceipt } from "react-icons/io5";

interface NewOrderAsideProps {
  step: number;
  nextStep: () => void;
}

function NewOrderAside({ step, nextStep }: NewOrderAsideProps) {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full md:hidden h-18 bg-white border-t border-gray-100 flex items-center gap-6 px-6">
        {step === 1 && (
          <>
            <button className="h-10 w-2/3 rounded-lg text-blue-700 border border-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
              ذخیره
            </button>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              انتخاب سرویس‌دهنده
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="w-2/3">
              <p className="mb-1">هزینه نهایی:</p>
              <p>{0} ریال</p>
            </div>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              انتخاب زمان ارسال
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="w-2/3">
              <p className="mb-1">هزینه نهایی:</p>
              <p>{0} ریال</p>
            </div>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              پرداخت
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <div className="w-2/3">
              <p className="mb-1">هزینه نهایی:</p>
              <p>{0} ریال</p>
            </div>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              انتقال به درگاه پرداخت
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}
      </div>

      <div className="hidden md:block sticky top-6 p-4 w-1/3 min-w-xs h-fit bg-white rounded-2xl mt-9">
        {step === 1 && (
          <>
            <h3 className="flex items-center gap-2 mb-6">
              <IoHome size={20} />
              فرستنده:
            </h3>
            <h3 className="flex items-center gap-2">
              <IoPerson size={20} />
              گیرنده:
            </h3>

            <div className="h-0.25 w-full my-6 bg-gray-100" />

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors mb-5"
            >
              انتخاب سرویس‌دهنده
              <IoIosArrowBack size={20} />
            </button>
            <button className="h-10 w-full rounded-lg text-blue-700 border border-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
              ذخیره در سفارش‌ها
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="flex items-center gap-2 mb-6">
              <IoHome size={20} />
              فرستنده:
            </h3>
            <h3 className="flex items-center gap-2">
              <FaBox size={20} />
              تعداد کل مرسولات:
            </h3>

            <div className="h-0.25 w-full my-6 bg-gray-100" />

            <h3 className="flex items-center gap-2">
              <FaShippingFast size={20} />
              سرویس‌دهنده:
            </h3>

            <div className="h-0.25 w-full my-6 bg-gray-100" />

            <h3 className="flex items-center gap-2 mb-6">
              <IoReceipt size={20} />
              هزینه نهایی:
            </h3>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              انتخاب زمان ارسال
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="flex items-center gap-2 mb-6">
              <IoHome size={20} />
              فرستنده:
            </h3>
            <h3 className="flex items-center gap-2 mb-6">
              <FaBox size={20} />
              تعداد کل مرسولات:
            </h3>
            <h3 className="flex items-center gap-2 mb-6">
              <FaShippingFast size={20} />
              سرویس‌دهنده:
            </h3>

            <div className="h-0.25 w-full my-6 bg-gray-100" />

            <h3 className="flex items-center gap-2 mb-6">
              <IoReceipt size={20} />
              هزینه نهایی:
            </h3>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              مشاهده فاکتور و پرداخت
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h3 className="flex items-center gap-2 mb-6">
              <FaBox size={20} />
              تعداد کل مرسولات:
            </h3>
            <h3 className="flex items-center gap-2 mb-6">
              <FaMoneyBills size={20} />
              هزینه جمع‌آوری
            </h3>

            <div className="h-0.25 w-full my-6 bg-gray-100" />

            <h3 className="flex items-center gap-2 mb-6">
              <IoReceipt size={20} />
              هزینه نهایی:
            </h3>

            <button
              onClick={nextStep}
              className="flex items-center gap-4 justify-center cursor-pointer w-full h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              انتقال به درگاه پرداخت
              <IoIosArrowBack size={20} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default NewOrderAside;
