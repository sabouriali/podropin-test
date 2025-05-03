import { useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [loginWithMobile, setLoginWithMobile] = useState(true);
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
    <div className="px-4 min-w-sm h-[calc(100vh-2rem)] pt-16 flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <p className="mb-3">
            {loginWithMobile
              ? "ثبت نام با شماره موبایل"
              : "ثبت نام با پست الکترونیک"}
          </p>
          <p className="text-gray-400">
            {loginWithMobile
              ? "برای ایجاد حساب کاربری ابتدا شماره موبایل خود را وارد کنید:"
              : "برای ایجاد حساب کاربری ابتدا پست الکترونیک خود را وارد کنید:"}
          </p>
        </div>

        <form className="mb-5">
          <div className="relative h-10 mb-5">
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
              {loginWithMobile ? "شماره موبایل" : "پست الکترونیک"}
            </label>
          </div>

          <div className="h-10 mb-3">
            <button className="h-full w-full px-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors cursor-pointer">
              ارسال کد تایید
            </button>
          </div>
        </form>

        <div className="h-10 mb-5">
          <button
            onClick={() => navigate("../login")}
            className="h-full w-full px-2.5 rounded-lg text-blue-700 cursor-pointer flex items-center justify-center gap-4"
          >
            <IoIosArrowForward size={21} />
            بازگشت
          </button>
        </div>
      </div>

      <div>
        <div className="h-10 mb-4">
          <button className="h-full w-full px-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center gap-2">
            <FcGoogle size={24} />
            ورود یا ثبت نام با حساب گوگل
          </button>
        </div>

        <div className="h-10 my-5">
          <button
            onClick={() => setLoginWithMobile(!loginWithMobile)}
            className="h-full w-full px-2.5 rounded-lg text-blue-700 cursor-pointer flex items-center justify-center gap-4"
          >
            {loginWithMobile
              ? "ثبت نام با پست الکترونیک"
              : "ثبت نام با شماره موبایل"}
            <IoIosArrowBack size={21} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
