import SenderInfo from "./order-info/SenderInfo";
import ReceiverInfo from "./order-info/ReceiverInfo";
import PackageInfo from "./order-info/PackageInfo";
import Description from "./order-info/Description";

function OrderInfo() {
  return (
    <>
      <p className="text-gray-400 mb-4">لطفا اطلاعات سفارش را وارد کنید.</p>

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
