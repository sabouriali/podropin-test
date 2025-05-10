import { FaArrowRightLong } from "react-icons/fa6";

import SenderInfo from "./order-info/SenderInfo";
import ReceiverInfo from "./order-info/ReceiverInfo";
import PackageInfo from "./order-info/PackageInfo";
import Description from "./order-info/Description";
import { useNavigate } from "react-router";

function OrderInfo() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-6 mb-4">
        <button
          className="cursor-pointer"
          onClick={() => navigate("/shipping")}
        >
          <FaArrowRightLong />
        </button>
        <p className="text-gray-400">لطفا اطلاعات سفارش را وارد کنید.</p>
      </div>

      <div>
        <SenderInfo />

        <ReceiverInfo />

        <PackageInfo />

        <Description />
      </div>
    </>
  );
}

export default OrderInfo;
