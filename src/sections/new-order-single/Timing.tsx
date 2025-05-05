import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBoxesPacking } from "react-icons/fa6";

const allowedPickupTimes = [
  "پنج‌شنبه ۱ خرداد، ۸ تا ۱۱",
  "شنبه ۳ خرداد، ۸ تا ۱۴",
  "یک‌شنبه ۴ خرداد، ۸ تا ۱۴",
  "دوشنبه ۵ خرداد، ۸ تا ۱۴",
  "سه‌شنبه ۶ خرداد، ۸ تا ۱۴",
  "چهارشنبه ۷ خرداد، ۸ تا ۱۴",
];

const allowedDeliverTimes = ["۳ تا ۷ روز کاری"];

interface TimingProps {
  shippingServices: {
    title: string;
    logo: string;
    time: string;
    features: string[];
    score: number;
    cost: number;
  }[];
  shipper: number | undefined;
}

function Timing({ shippingServices, shipper }: TimingProps) {
  const [pickupTime, setPickupTime] = useState("");
  const [deliverTime, setDeliverTime] = useState("");
  const [openPickupTime, setOpenPickupTime] = useState(false);
  const [openDeliverTime, setOpenDeliverTime] = useState(false);

  function togglePickupTime() {
    setOpenPickupTime(!openPickupTime);
  }

  function toggleDeliverTime() {
    setOpenDeliverTime(!openDeliverTime);
  }

  function handleSelectPickupTime(time: string) {
    setPickupTime(time);
    setOpenPickupTime(false);
  }

  function handleSelectDeliverTime(time: string) {
    setDeliverTime(time);
    setOpenDeliverTime(false);
  }

  return (
    <>
      <p className="text-gray-400 mb-4">
        زمان‌بندی ارسال مورد نظر خود را انتخاب کنید:
      </p>

      <section className="p-4 bg-white rounded-2xl mb-6 md:max-w-[calc(100vw-28.5rem)] md:w-[919.733px] min-w-sm space-y-4">
        <div className="rounded-lg flex items-start justify-between h-40">
          <div className="flex items-center gap-4">
            <div className="w-17.5 h-17.5 content-center">
              <img
                src={shippingServices[shipper!].logo}
                alt={shippingServices[shipper!].title}
              />
            </div>

            <div className="h-40 flex flex-col justify-between">
              <h3 className="text-base font-medium">
                {shippingServices[shipper!].title}
              </h3>
              <p className="text-gray-400">
                تحویل: {shippingServices[shipper!].time}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">
                  {shippingServices[shipper!].score}
                </p>
                <div className="relative">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      size={12}
                      className="text-gray-200 inline-block"
                    />
                  ))}
                  <span
                    className="absolute top-0 right-0 h-full overflow-hidden whitespace-nowrap content-center"
                    style={{
                      width: `${shippingServices[shipper!].score * 20}%`,
                    }}
                  >
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={12}
                        className="text-blue-600 inline-block"
                      />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div dir="ltr" className="h-40 flex flex-col justify-between">
            <p className="text-gray-400">هزینه کل</p>

            <div className="flex items-center gap-2 w-fit">
              <p className="text-xs">ریال</p>
              <p className="text-xl font-medium">
                {shippingServices[shipper!].cost}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {shippingServices[shipper!].features.map((feature, ind) => (
                <p
                  key={ind}
                  className="p-2 rounded-full bg-blue-50 text-blue-500"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="h-0.25 w-full my-8 bg-gray-100" />

        <div className="grid md:grid-cols-2 items-center gap-6">
          <div className="flex items-center gap-6">
            <FaBoxesPacking size={24} className="text-gray-600" />

            <div>
              <h3 className="font-medium mb-2">جمع آوری مرسوله</h3>
              <p className="text-gray-400 text-xs">
                توجه داشته باشید که جمع‌آوری سفارشات در تعطیلات رسمی مقدور نیست.
              </p>
            </div>
          </div>

          <div className="relative h-11">
            <button
              onClick={togglePickupTime}
              className="w-full h-full border border-gray-200 rounded-lg flex items-center justify-between px-4 text-gray-400 cursor-pointer"
            >
              <span
                className={`transition-colors ${pickupTime && "text-gray-600"}`}
              >
                {pickupTime ? pickupTime : "زمان جمع‌آوری"}
              </span>
              <IoIosArrowDown
                size={20}
                className={`transition-transform ${
                  openPickupTime && "rotate-z-180"
                }`}
              />
            </button>

            <div
              className={`absolute top-12 border border-gray-300 bg-white rounded-lg w-full h-40 p-2 overflow-y-scroll shadow-lg z-10 transition ${
                openPickupTime
                  ? "opacity-100 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              {allowedPickupTimes.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectPickupTime(item)}
                  className={`w-full text-right h-10 transition-colors px-2 rounded-lg cursor-pointer ${
                    pickupTime === allowedPickupTimes[index]
                      ? "bg-gray-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {pickupTime && (
          <div className="grid md:grid-cols-2 items-center gap-6 mt-8">
            <div className="flex items-center gap-6">
              <FaBoxesPacking size={24} className="text-gray-600" />

              <div>
                <h3 className="font-medium mb-2">زمان تحویل</h3>
                <p className="text-gray-400 text-xs">
                  تحویل کالا به مشتری شما در بازه زمانی پیش‌رو انجام می‌شود.
                </p>
              </div>
            </div>

            <div className="h-11 relative">
              <button
                onClick={toggleDeliverTime}
                className="w-full h-full border border-gray-200 rounded-lg flex items-center justify-between px-4 text-gray-400 cursor-pointer"
              >
                <span
                  className={`transition-colors ${
                    deliverTime && "text-gray-600"
                  }`}
                >
                  {deliverTime ? deliverTime : "زمان تحویل"}
                </span>
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform ${
                    openDeliverTime && "rotate-z-180"
                  }`}
                />
              </button>

              <div
                className={`absolute top-12 border border-gray-300 bg-white rounded-lg w-full h-40 p-2 overflow-y-scroll shadow-lg z-10 transition ${
                  openDeliverTime
                    ? "opacity-100 visible"
                    : "opacity-0 -translate-y-4 invisible"
                }`}
              >
                {allowedDeliverTimes.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectDeliverTime(item)}
                    className={`w-full text-right h-10 transition-colors px-2 rounded-lg cursor-pointer ${
                      deliverTime === allowedDeliverTimes[index]
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Timing;
