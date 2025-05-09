import { useState } from "react";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack, IoIosEye, IoIosEyeOff } from "react-icons/io";

import logo from "../../assets/1000016235-removebg-preview.png";

function Login() {
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  function handleEmailFocus() {
    setEmailFocused(true);
  }

  function handleEmailBlur() {
    setEmailFocused(false);
  }

  function handlePassFocus() {
    setPassFocused(true);
  }

  function handlePassBlur() {
    setPassFocused(false);
  }

  function toggleShowPass() {
    setShowPass(!showPass);
  }

  return (
    <div className="px-4 min-w-sm h-[calc(100vh-2rem)] flex flex-col justify-between overflow-y-scroll">
      <div>
        <div className="h-50 flex items-center justify-center">
          <img src={logo} alt="logo" width={200} />
        </div>

        <div>
          <p className="mb-2.5">به باردو خوش آمدید!</p>
          <p className="text-gray-400 mb-5">
            اگر در باردو حساب کاربری دارید، وارد شوید:
          </p>
        </div>

        <form>
          <div className="relative mb-5 h-10">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-[1px] pt-3 rounded-lg w-full h-full transition-colors"
            />
            <label
              htmlFor="email"
              className={`absolute right-4 top-3 cursor-text text-gray-400 transform transition-transform ${
                emailFocused
                  ? "scale-75 -translate-y-3 translate-x-1/8 !text-blue-600"
                  : email &&
                    email.length > 0 &&
                    "scale-75 -translate-y-3 translate-x-1/8"
              }`}
            >
              شماره موبایل یا پست الکترونیک
            </label>
          </div>

          <div className="relative h-10 mb-2.5">
            <input
              type={showPass ? "text" : "password"}
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onFocus={handlePassFocus}
              onBlur={handlePassBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-[1px] pt-3 rounded-lg w-full h-full transition-colors"
            />
            <label
              htmlFor="pass"
              className={`absolute right-4 top-3 cursor-text text-gray-400 transform transition-transform ${
                passFocused
                  ? "scale-75 -translate-y-3 translate-x-1/8 !text-blue-600"
                  : pass &&
                    pass.length > 0 &&
                    "scale-75 -translate-y-3 translate-x-1/8"
              }`}
            >
              کلمه عبور
            </label>
            <button
              type="button"
              onClick={toggleShowPass}
              className="absolute top-1/2 -translate-y-1/2 left-1.5 text-gray-800 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              {showPass ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
            </button>
          </div>

          <div className="h-10 mb-3">
            <button className="h-full w-full px-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors cursor-pointer">
              ورود
            </button>
          </div>
        </form>

        <div className="h-10 mb-4">
          <button className="h-full w-full px-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center gap-2">
            <FcGoogle size={24} />
            ورود یا ثبت نام با حساب گوگل
          </button>
        </div>

        <div className="h-10 mb-5">
          <button
            onClick={() => navigate("../verify-code")}
            className="h-full w-full px-2.5 rounded-lg text-blue-700 cursor-pointer flex items-center justify-center gap-4"
          >
            ورود با رمز یکبار مصرف
            <IoIosArrowBack size={21} />
          </button>
        </div>

        <div className="my-5 w-full border-b border-gray-200" />

        <div className="mb-2.5">
          <p className="text-gray-400">
            اگر در باردو حساب کاربری ندارید، ثبت نام کنید:
          </p>
        </div>

        <div className="h-10">
          <button
            onClick={() => navigate("../signup")}
            className="h-full w-full px-2.5 rounded-lg text-blue-700 border border-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            ایجاد حساب کاربری
          </button>
        </div>
      </div>

      <div className="my-2.5">
        <p className="text-[10px] text-center text-gray-400">
          ورود شما به باردو به معنای پذیرش{" "}
          <span className="text-blue-600">شرایط و قوانین و حریم خصوصی</span> آن
          است.
        </p>
      </div>
    </div>
  );
}

export default Login;
