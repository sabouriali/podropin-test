import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";

function ReceiverInfo() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [idCode, setIdCode] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [plate, setPlate] = useState("");
  const [unit, setUnit] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [fnameFocused, setFnameFocused] = useState(false);
  const [lnameFocused, setLnameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [idCodeFocused, setIdCodeFocused] = useState(false);
  const [provinceFocused, setProvinceFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);
  const [plateFocused, setPlateFocused] = useState(false);
  const [unitFocused, setUnitFocused] = useState(false);
  const [zipCodeFocused, setZipCodeFocused] = useState(false);

  function handleFnameFocus() {
    setFnameFocused(true);
  }
  function handleFnameBlur() {
    setFnameFocused(false);
  }

  function handleLnameFocus() {
    setLnameFocused(true);
  }
  function handleLnameBlur() {
    setLnameFocused(false);
  }

  function handlePhoneFocus() {
    setPhoneFocused(true);
  }
  function handlePhoneBlur() {
    setPhoneFocused(false);
  }

  function handleIdCodeFocus() {
    setIdCodeFocused(true);
  }
  function handleIdCodeBlur() {
    setIdCodeFocused(false);
  }

  function handleProvinceFocus() {
    setProvinceFocused(true);
  }
  function handleProvinceBlur() {
    setProvinceFocused(false);
  }

  function handleCityFocus() {
    setCityFocused(true);
  }
  function handleCityBlur() {
    setCityFocused(false);
  }

  function handleAddressFocus() {
    setAddressFocused(true);
  }
  function handleAddressBlur() {
    setAddressFocused(false);
  }

  function handlePlateFocus() {
    setPlateFocused(true);
  }
  function handlePlateBlur() {
    setPlateFocused(false);
  }

  function handleUnitFocus() {
    setUnitFocused(true);
  }
  function handleUnitBlur() {
    setUnitFocused(false);
  }

  function handleZipCodeFocus() {
    setZipCodeFocused(true);
  }
  function handleZipCodeBlur() {
    setZipCodeFocused(false);
  }

  return (
    <section className="p-4 bg-white rounded-2xl mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3>اطلاعات گیرنده</h3>
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
        >
          <IoPersonAdd />
          لیست مشتریان
        </button>
      </div>

      <p className="text-gray-400 text-xs mb-4">
        لطفا اطلاعات گیرنده را به صورت کامل وارد کنید.
      </p>

      <form className="grid md:grid-cols-3 md:grid-rows-5 gap-5">
        <div className="relative h-10">
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            onFocus={handleFnameFocus}
            onBlur={handleFnameBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="fname"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              fnameFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : fname.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            نام
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            onFocus={handleLnameFocus}
            onBlur={handleLnameBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="lname"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              lnameFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : lname.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            نام خانوادگی
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="number"
            id="phone"
            name="phone"
            value={parseInt(phone)}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
          />
          <label
            htmlFor="phone"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              phoneFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : phone.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            شماره موبایل
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="number"
            id="idCode"
            name="idCode"
            value={parseInt(idCode)}
            onChange={(e) => setIdCode(e.target.value)}
            onFocus={handleIdCodeFocus}
            onBlur={handleIdCodeBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
          />
          <label
            htmlFor="idCode"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              idCodeFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : idCode.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            کد ملی گیرنده (اختیاری)
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            id="province"
            name="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            onFocus={handleProvinceFocus}
            onBlur={handleProvinceBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="province"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              provinceFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : province.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            استان
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={handleCityFocus}
            onBlur={handleCityBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
          />
          <label
            htmlFor="city"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              cityFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : city.length > 0 && "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            شهر
          </label>
        </div>

        <div className="md:col-span-3 md:row-span-2">
          <div className="relative mb-1">
            <textarea
              id="address"
              name="address"
              rows={5}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onFocus={handleAddressFocus}
              onBlur={handleAddressBlur}
              className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
            />
            <label
              htmlFor="address"
              className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                addressFocused
                  ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                  : address.length > 0 &&
                    "scale-75 -translate-y-2.5 translate-x-1/8"
              }`}
            >
              آدرس پستی
            </label>
          </div>

          <p className="text-xs text-gray-400">
            آدرس پستی خود را به صورت کامل وارد کنید
          </p>
        </div>

        <div className="relative h-10">
          <input
            type="number"
            id="plate"
            name="plate"
            value={parseInt(plate)}
            onChange={(e) => setPlate(e.target.value)}
            onFocus={handlePlateFocus}
            onBlur={handlePlateBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
          />
          <label
            htmlFor="plate"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              plateFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : plate.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            پلاک
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="number"
            id="unit"
            name="unit"
            value={parseInt(unit)}
            onChange={(e) => setUnit(e.target.value)}
            onFocus={handleUnitFocus}
            onBlur={handleUnitBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
          />
          <label
            htmlFor="unit"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              unitFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : unit.length > 0 && "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            واحد (اختیاری)
          </label>
        </div>

        <div className="relative h-10">
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            value={parseInt(zipCode)}
            onChange={(e) => setZipCode(e.target.value)}
            onFocus={handleZipCodeFocus}
            onBlur={handleZipCodeBlur}
            className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
          />
          <label
            htmlFor="zipCode"
            className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
              zipCodeFocused
                ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                : zipCode.length > 0 &&
                  "scale-75 -translate-y-2.5 translate-x-1/8"
            }`}
          >
            کد پستی
          </label>
        </div>
      </form>
    </section>
  );
}

export default ReceiverInfo;
