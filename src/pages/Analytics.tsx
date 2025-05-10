import { useEffect, useRef, useState } from "react";
import DatePicker, {
  DateObject,
  type DatePickerRef,
} from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import persian from "react-date-object/calendars/persian";
import persianFa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineAddCard, MdOutlineCancel } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import empty from "../assets/empty-states-b05486d3.svg";

const defFromDates = [7, 30, 90, 180, 365];

function Analytics() {
  const [toDate, setToDate] = useState<DateObject | null>();
  const [fromDate, setFromDate] = useState<DateObject | null>();
  const [selectedDef, setSelectedDef] = useState<number>();

  const fromPickerRef = useRef<DatePickerRef>(null);
  const toPickerRef = useRef<DatePickerRef>(null);

  useEffect(() => {
    const now = new DateObject({ calendar: persian, locale: persianFa });
    setToDate(now);
  }, []);

  function handleClickDefs(index: number, days: number) {
    const now = new DateObject({ calendar: persian, locale: persianFa });
    setFromDate(now.subtract(days, "days"));

    setSelectedDef(index);
  }

  function handleClickPickFrom() {
    if (fromPickerRef.current) {
      fromPickerRef.current.openCalendar();
    }
  }

  function handleClickPickTo() {
    if (toPickerRef.current) {
      toPickerRef.current.openCalendar();
    }
  }

  return (
    <section className="text-gray-700 md:p-4 md:container mx-auto">
      <div className="h-17.5 content-center">
        <h1 className="text-base font-semibold text-center md:text-right">
          گزارش‌ها
        </h1>
      </div>

      <div className="bg-gray-100 space-y-4 gap-6 md:space-y-0 md:grid grid-cols-4 grid-rows-14">
        <div className="flex flex-col md:flex-row-reverse justify-between gap-4 bg-white p-4 w-full md:rounded-2xl col-span-4 row-span-1">
          <div className="flex items-center gap-2 overflow-y-scroll no-scrollbar whitespace-nowrap">
            {defFromDates.map((days, index) => (
              <button
                key={index}
                onClick={() => handleClickDefs(index, days)}
                className={`h-12 w-30 px-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedDef === index
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-gray-200 hover:bg-blue-50"
                }`}
              >
                {`${days} روز گذشته`}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="h-12 min-w-50 w-full max-w-60 relative">
              <button
                onClick={handleClickPickFrom}
                className="flex items-center gap-2 w-full h-full border border-gray-200 rounded-lg pr-11 cursor-pointer"
              >
                {fromDate?.format()}
                <span
                  className={`text-gray-400 absolute top-1/2 right-9 bg-white px-1 transition ${
                    fromDate
                      ? "scale-75 -translate-y-8.5 translate-x-9.5"
                      : " -translate-y-1/2"
                  }`}
                >
                  از تاریخ
                </span>
              </button>
              <DatePicker
                animations={[opacity(), transition()]}
                renderButton={(direction: string, handleClick: () => void) => (
                  <button
                    onClick={handleClick}
                    className="p-2 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {direction === "left" ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowBack />
                    )}
                  </button>
                )}
                render={<Icon />}
                calendar={persian}
                locale={persianFa}
                calendarPosition="bottom-right"
                containerClassName="text-gray-400 absolute top-1/2 -translate-y-1/2 right-2"
                ref={fromPickerRef}
                onChange={(e) => setFromDate(e)}
              />
            </div>

            <div className="h-12 min-w-50 w-full max-w-60 relative">
              <button
                onClick={handleClickPickTo}
                className="flex items-center gap-2 w-full h-full border border-gray-200 rounded-lg pr-11 cursor-pointer"
              >
                {toDate?.format()}
                <span
                  className={`text-gray-400 absolute top-1/2 right-9 bg-white px-1 transition ${
                    toDate
                      ? "scale-75 -translate-y-8.5 translate-x-9.5"
                      : " -translate-y-1/2"
                  }`}
                >
                  تا تاریخ
                </span>
              </button>
              <DatePicker
                animations={[opacity(), transition()]}
                renderButton={(direction: string, handleClick: () => void) => (
                  <button
                    onClick={handleClick}
                    className="p-2 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {direction === "left" ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowBack />
                    )}
                  </button>
                )}
                render={<Icon />}
                calendar={persian}
                locale={persianFa}
                calendarPosition="bottom-right"
                containerClassName="text-gray-400 absolute top-1/2 -translate-y-1/2 right-2"
                ref={toPickerRef}
                onChange={(e) => setToDate(e)}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 md:gap-6 col-span-4 row-span-1">
          <div className="bg-white p-4 md:rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 p-2 rounded-full">
                <MdOutlineAddCard size={24} className="text-blue-600" />
              </div>
              <p>جمع هزینه‌های ارسال</p>
            </div>

            <p>۰ ریال</p>
          </div>

          <div className="h-full bg-white p-4 md:rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 p-2 rounded-full">
                <BsBoxSeam size={24} className="text-blue-600" />
              </div>
              <p>تعداد مرسوله‌ها</p>
            </div>

            <p>۰ عدد</p>
          </div>

          <div className="h-full bg-white p-4 md:rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 p-2 rounded-full">
                <IoReceiptOutline size={24} className="text-blue-600" />
              </div>
              <p>میانگین هزینه ارسال</p>
            </div>

            <p>۰ ریال</p>
          </div>

          <div className="h-full bg-white p-4 md:rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 p-2 rounded-full">
                <MdOutlineCancel size={24} className="text-blue-600" />
              </div>
              <p>جمع هزینه‌های لغو شده</p>
            </div>

            <p>۰ ریال</p>
          </div>
        </div>

        <div className="bg-white p-4 md:rounded-2xl col-span-3 row-span-6">
          <h3>تعداد مرسوله‌ها به تفکیک شهر‌</h3>

          <div className="flex flex-col items-center justify-center aspect-square md:aspect-auto h-full">
            <img src={empty} alt="empty" className="mb-2" />
            <p className="text-gray-400">
              اطلاعاتی برای نمایش در این بازه زمانی وجود ندارد.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 md:rounded-2xl col-span-3 row-span-6">
          <h3>تعداد مرسوله‌ها به تفکیک ماه‌</h3>

          <div className="flex flex-col items-center justify-center aspect-square md:aspect-auto h-full">
            <img src={empty} alt="empty" className="mb-2" />
            <p className="text-gray-400">
              اطلاعاتی برای نمایش در این بازه زمانی وجود ندارد.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 md:rounded-2xl col-span-1 row-span-6 row-start-3 col-start-4 flex flex-col justify-between">
          <h3>تعداد مرسوله‌ها به تفکیک شرکت‌های پستی</h3>

          <div className="aspect-square md:aspect-auto text-center content-center">
            ۰ عدد
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(255,132,46)] rounded-full" />
              <p>ماهکس:</p>
              <p>۰ عدد</p>
            </div>

            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(136,61,242)] rounded-full" />
              <p>شرکت ملی پست (پیشتاز):</p>
              <p>۰ عدد</p>
            </div>

            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(0,92,204)] rounded-full" />
              <p>گیت وی:</p>
              <p>۰ عدد</p>
            </div>

            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(255,87,87)] rounded-full" />
              <p>فوروارد:</p>
              <p>۰ عدد</p>
            </div>

            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(0,246,158)] rounded-full" />
              <p>شرکت ملی پست (ویژه):</p>
              <p>۰ عدد</p>
            </div>

            <div className="text-xs flex items-center gap-2">
              <div className="w-4 h-4 bg-[rgb(246,207,0)] rounded-full" />
              <p>پست اقتصادی:</p>
              <p>۰ عدد</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:rounded-2xl col-span-1 row-span-3">
          <h3 className="mb-4">وضعیت‌ها</h3>

          <div className="bg-gray-100 flex items-center p-4 rounded-t-lg justify-around">
            <p>وضعیت‌ها</p>
            <p> تعداد سفارش</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
