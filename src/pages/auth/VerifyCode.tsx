import { useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

import pic from "../../assets/auth-342c7766.svg";

function VerifyCode() {
  const [mobile, setMobile] = useState<string>();
  const [mobileFocused, setMobileFocused] = useState(false);

  const navigate = useNavigate();

  function handleMobileFocus() {
    setMobileFocused(true);
  }

  function handleMobileBlur() {
    setMobileFocused(false);
  }

  return (
    <div className="flex items-start justify-center gap-4 p-4">
      <div className="px-4 min-w-sm pt-16">
        <p className="mb-2.5">ورود با شماره موبایل</p>

        <p className="text-gray-400 mb-5">
          برای ورود شماره موبایل خود را وارد کنید:
        </p>

        <div className="h-10 relative mb-5">
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onFocus={handleMobileFocus}
            onBlur={handleMobileBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-[1px] pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="mobile"
            className={`absolute right-4 top-3 cursor-text text-gray-400 transform transition-transform ${
              mobileFocused
                ? "scale-75 -translate-y-3 translate-x-1/8 !text-blue-600"
                : mobile &&
                  mobile.length > 0 &&
                  "scale-75 -translate-y-3 translate-x-1/8"
            }`}
          >
            شماره موبایل
          </label>
        </div>

        <div className="h-10 mb-2.5">
          <button className="h-full w-full px-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors cursor-pointer">
            ارسال کد تایید
          </button>
        </div>

        <div className="h-10">
          <button
            onClick={() => navigate("../login")}
            className="h-full w-full px-2.5 rounded-lg text-blue-700 cursor-pointer flex items-center justify-center gap-4"
          >
            <IoIosArrowForward size={21} />
            بازگشت
          </button>
        </div>
      </div>

      <div className="bg-[#f6f7f9] w-full h-[calc(100vh-2rem)] rounded-2xl items-center justify-center hidden md:flex">
        <img src={pic} alt="pic" />
      </div>
    </div>
  );
}

export default VerifyCode;
