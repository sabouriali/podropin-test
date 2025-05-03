import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ISize {
  title: string;
  length: string;
  width: string;
  height: string;
}

const allowedContent = [
  "پوشاک",
  "اداری مالی",
  "لوازم الکترونیکی",
  "صنایع دستی",
  "آرایشی بهداشتی",
  "کارت بانکی",
  "فرهنگی آموزشی سرگرمی",
  "مواد غذایی",
  "عطاری",
  "ابزارآلات",
  "ورزش و سفر",
  "سایر",
];

const sizes = [
  { title: "پاکت A3", length: "45", width: "23", height: "1" },
  { title: "پاکت A4", length: "31", width: "23", height: "1" },
  { title: "بسته سایز ۱", length: "15", width: "10", height: "10" },
  { title: "بسته سایز ۲", length: "20", width: "15", height: "10" },
  { title: "بسته سایز ۳", length: "20", width: "20", height: "15" },
  { title: "بسته سایز ۴", length: "30", width: "20", height: "20" },
  { title: "بسته سایز ۵", length: "35", width: "25", height: "20" },
  { title: "بسته سایز ۶", length: "45", width: "25", height: "20" },
  { title: "بسته سایز ۷", length: "40", width: "30", height: "25" },
  { title: "بسته سایز ۸", length: "45", width: "40", height: "30" },
  { title: "بسته سایز ۹", length: "55", width: "45", height: "35" },
];

function PackageInfo() {
  const [weight, setWeight] = useState("");
  const [cost, setCost] = useState("");
  const [contentInfo, setContentInfo] = useState("");
  const [content, setContent] = useState("");
  const [size, setSize] = useState<ISize>();
  const [weightFocused, setWeightFocused] = useState(false);
  const [costFocused, setCostFocused] = useState(false);
  const [contentInfoFocused, setContentInfoFocused] = useState(false);
  const [openContent, setOpenContent] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  function handleWeightFocus() {
    setWeightFocused(true);
  }
  function handleWeightBlur() {
    setWeightFocused(false);
  }

  function handleCostFocus() {
    setCostFocused(true);
  }
  function handleCostBlur() {
    setCostFocused(false);
  }

  function handleContentInfoFocus() {
    setContentInfoFocused(true);
  }
  function handleContentInfoBlur() {
    setContentInfoFocused(false);
  }

  function toggleContent() {
    setOpenContent(!openContent);
  }
  function closeContent() {
    setOpenContent(false);
  }

  function toggleSize() {
    setOpenSize(!openSize);
  }
  function closeSize() {
    setOpenSize(false);
  }

  function handleSelectContent(content: string) {
    setContent(content);
    closeContent();
  }

  function handleSelectSize(size: ISize) {
    setSize(size);
    closeSize();
  }

  return (
    <section className="p-4 bg-white rounded-2xl mb-6">
      <h3 className="mb-6">اطلاعات بسته</h3>
      <p className="text-gray-400 text-xs mb-4">
        لطفا قبل از وارد کردن اطلاعات بسته،{" "}
        <button className="text-blue-600 text-sm cursor-pointer">
          ممنوعات پستی
        </button>{" "}
        را به دقت مطالعه کنید.
      </p>

      <form className="grid md:grid-cols-4 gap-5">
        <div>
          <div className="relative h-10 mb-1">
            <input
              type="number"
              id="weight"
              name="weight"
              value={parseInt(weight)}
              onChange={(e) => setWeight(e.target.value)}
              onFocus={handleWeightFocus}
              onBlur={handleWeightBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
            />
            <label
              htmlFor="weight"
              className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                weightFocused
                  ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                  : weight.length > 0 &&
                    "scale-75 -translate-y-2.5 translate-x-1/8"
              }`}
            >
              وزن بسته
            </label>
            <span className="absolute text-gray-400 left-2 top-1/2 -translate-y-1/2 pr-2 border-r border-gray-200 h-7 content-center">
              گرم
            </span>
          </div>

          <p className="text-xs">در صورت مغایرت وزن، بسته مرجوع می‌شود.</p>
        </div>

        <div>
          <div className="relative h-10 mb-1">
            <input
              type="number"
              id="cost"
              name="cost"
              value={parseInt(cost)}
              onChange={(e) => setCost(e.target.value)}
              onFocus={handleCostFocus}
              onBlur={handleCostBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
            />
            <label
              htmlFor="cost"
              className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                costFocused
                  ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                  : cost.length > 0 &&
                    "scale-75 -translate-y-2.5 translate-x-1/8"
              }`}
            >
              ارزش مرسوله
            </label>
            <span className="absolute text-gray-400 left-2 top-1/2 -translate-y-1/2 pr-2 border-r border-gray-200 h-7 content-center">
              ریال
            </span>
          </div>

          <p className="text-xs">مبنای محاسبه بیمه، قیمت فوق است.</p>
        </div>

        <div className="relative h-10">
          <button
            type="button"
            onClick={toggleContent}
            className="h-full w-full rounded-lg text-gray-400 border border-gray-200 cursor-pointer flex items-center justify-between px-4"
          >
            <span className={`transition-colors ${content && "text-gray-700"}`}>
              {content.length > 0 ? content : "محتویات"}
            </span>
            <IoIosArrowDown
              size={20}
              className={`transition-transform ${
                openContent && "rotate-z-180"
              }`}
            />
          </button>

          <div
            className={`absolute top-12 border border-gray-300 bg-white rounded-lg w-70 h-40 p-2 overflow-y-scroll shadow-lg z-10 transition ${
              openContent
                ? "opacity-100 visible"
                : "opacity-0 -translate-y-4 invisible"
            }`}
          >
            {allowedContent.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectContent(item)}
                className="w-full text-right h-10 hover:bg-gray-100 transition-colors px-2 rounded-lg cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="relative h-10 mb-1">
            <input
              type="text"
              id="contentInfo"
              name="contentInfo"
              value={contentInfo}
              onChange={(e) => setContentInfo(e.target.value)}
              onFocus={handleContentInfoFocus}
              onBlur={handleContentInfoBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
            />
            <label
              htmlFor="contentInfo"
              className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                contentInfoFocused
                  ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                  : contentInfo.length > 0 &&
                    "scale-75 -translate-y-2.5 translate-x-1/8"
              }`}
            >
              جزییات بسته
            </label>
          </div>

          <p className="text-xs">نام محصول موجود در بسته را وارد کنید.</p>
        </div>

        <div className="relative h-10">
          <button
            type="button"
            onClick={toggleSize}
            className="h-full w-full rounded-lg text-gray-400 border border-gray-200 cursor-pointer flex items-center justify-between px-4"
          >
            <span className={`transition-colors ${size && "text-gray-700"}`}>
              {size ? size.title : "سایز"}
            </span>
            <IoIosArrowDown
              size={20}
              className={`transition-transform ${openSize && "rotate-z-180"}`}
            />
          </button>

          <div
            className={`absolute top-12 border border-gray-300 bg-white rounded-lg w-70 h-40 p-2 overflow-y-scroll shadow-lg z-10 transition ${
              openSize
                ? "opacity-100 visible"
                : "opacity-0 -translate-y-4 invisible"
            }`}
          >
            {sizes.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectSize(item)}
                className="w-full text-right h-10 hover:bg-gray-100 transition-colors px-2 rounded-lg cursor-pointer"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            value={size?.length}
            disabled
            className="border border-gray-200 px-4 pb-0.25 pt-3 rounded-lg w-full h-full text-gray-400"
          />
          <label
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition-transform ${
              size && "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            طول
          </label>
          <span className="absolute text-gray-400 left-2 top-1/2 -translate-y-1/2 pr-2 border-r border-gray-200 h-7 content-center">
            سانتی‌متر
          </span>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            value={size?.width}
            disabled
            className="border border-gray-200 px-4 pb-0.25 pt-3 rounded-lg w-full h-full text-gray-400"
          />
          <label
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition-transform ${
              size && "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            عرض
          </label>
          <span className="absolute text-gray-400 left-2 top-1/2 -translate-y-1/2 pr-2 border-r border-gray-200 h-7 content-center">
            سانتی‌متر
          </span>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            value={size?.height}
            disabled
            className="border border-gray-200 px-4 pb-0.25 pt-3 rounded-lg w-full h-full text-gray-400"
          />
          <label
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition-transform ${
              size && "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            ارتفاع
          </label>
          <span className="absolute text-gray-400 left-2 top-1/2 -translate-y-1/2 pr-2 border-r border-gray-200 h-7 content-center">
            سانتی‌متر
          </span>
        </div>
      </form>
    </section>
  );
}

export default PackageInfo;
