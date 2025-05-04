import { IoHome, IoPerson } from "react-icons/io5";

import SenderInfo from "./order-info/SenderInfo";
import ReceiverInfo from "./order-info/ReceiverInfo";
import PackageInfo from "./order-info/PackageInfo";
import Description from "./order-info/Description";
import { IoIosArrowBack } from "react-icons/io";

interface OrderInfoProps {
  nextStep: () => void;
}

function OrderInfo({ nextStep }: OrderInfoProps) {
  return (
    <>
      <p className="text-gray-400 mb-4">لطفا اطلاعات سفارش را وارد کنید.</p>

      <div className="flex gap-6 justify-center">
        <div>
          <SenderInfo />

          <ReceiverInfo />

          <PackageInfo />

          <Description />
        </div>

        <div className="fixed bottom-0 left-0 w-full md:hidden h-18 bg-white border-t border-gray-100 flex items-center gap-6 px-6">
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
        </div>

        <div className="hidden md:block sticky top-6 p-4 w-sm h-fit bg-white rounded-2xl">
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
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
