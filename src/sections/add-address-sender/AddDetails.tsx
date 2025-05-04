import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { type LatLngExpression } from "leaflet";

import Map from "../../components/Map";

interface AddDetailsProps {
  fname: string;
  lname: string;
  phone: string;
  location: LatLngExpression;
  addressName: string;
  province: string;
  city: string;
  address: string;
  plate: string;
  unit: string;
  zipCode: string;
  def: boolean;
  onSetAddAddress: React.Dispatch<React.SetStateAction<boolean>>;
  onSetFname: React.Dispatch<React.SetStateAction<string>>;
  onSetLname: React.Dispatch<React.SetStateAction<string>>;
  onSetPhone: React.Dispatch<React.SetStateAction<string>>;
  onSetAddressName: React.Dispatch<React.SetStateAction<string>>;
  onSetProvince: React.Dispatch<React.SetStateAction<string>>;
  onSetCity: React.Dispatch<React.SetStateAction<string>>;
  onSetAddress: React.Dispatch<React.SetStateAction<string>>;
  onSetPlate: React.Dispatch<React.SetStateAction<string>>;
  onSetUnit: React.Dispatch<React.SetStateAction<string>>;
  onSetZipCode: React.Dispatch<React.SetStateAction<string>>;
  onSetDef: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddDetails({
  fname,
  lname,
  phone,
  location,
  addressName,
  province,
  city,
  address,
  plate,
  unit,
  zipCode,
  def,
  onSetAddAddress,
  onSetFname,
  onSetLname,
  onSetPhone,
  onSetAddressName,
  onSetProvince,
  onSetCity,
  onSetAddress,
  onSetPlate,
  onSetUnit,
  onSetZipCode,
  onSetDef,
}: AddDetailsProps) {
  const [fnameFocused, setFnameFocused] = useState(false);
  const [lnameFocused, setLnameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [addressNameFocused, setAddressNameFocused] = useState(false);
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

  function handleAddressNameFocus() {
    setAddressNameFocused(true);
  }
  function handleAddressNameBlur() {
    setAddressNameFocused(false);
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
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <button
            onClick={() => onSetAddAddress(false)}
            className="cursor-pointer"
          >
            <FaArrowRightLong size={20} />
          </button>

          <div>
            <h2 className="text-base font-medium mb-2">افزودن آدرس فرستنده</h2>
            <p className="text-gray-400">جزییات آدرس فرستنده را کامل کنید.</p>
          </div>
        </div>

        <button
          className={`flex items-center gap-2 h-10 px-4 py-2 text-white rounded-lg transition-colors bg-blue-700 hover:bg-blue-800 cursor-pointer`}
        >
          <BsCheckLg size={20} />
          تايید نهایی
        </button>
      </div>

      <form>
        <div className="mb-8">
          <h3 className="font-medium mb-4">اطلاعات مسئول آدرس</h3>
          <p className="text-gray-400 mb-4">
            هنگام جمع‌آوری مرسولات با مسئول آدرس تماس گرفته خواهد شد.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-10">
              <input
                type="text"
                id="fname"
                name="fname"
                value={fname}
                onChange={(e) => onSetFname(e.target.value)}
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
                onChange={(e) => onSetLname(e.target.value)}
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
                onChange={(e) => onSetPhone(e.target.value)}
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
                شماره تلفن همراه
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">جزییات آدرس</h3>
          <p className="text-gray-400 mb-4">
            لطفا جزییات آدرس را کامل وارد کنید.
          </p>

          <div className="grid grid-cols-4 grid-rows-4 gap-6">
            <div className="col-span-1 row-span-4 rounded-lg w-full h-full">
              <Map location={location} />
            </div>

            <div className="relative h-10">
              <input
                type="text"
                id="addressName"
                name="addressName"
                value={addressName}
                onChange={(e) => onSetAddressName(e.target.value)}
                onFocus={handleAddressNameFocus}
                onBlur={handleAddressNameBlur}
                className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
              />
              <label
                htmlFor="addressName"
                className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                  addressNameFocused
                    ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                    : addressName.length > 0 &&
                      "scale-75 -translate-y-2.5 translate-x-1/8"
                }`}
              >
                نام آدرس
              </label>
            </div>

            <div className="relative h-10">
              <input
                type="text"
                id="province"
                name="province"
                value={province}
                onChange={(e) => onSetProvince(e.target.value)}
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
                onChange={(e) => onSetCity(e.target.value)}
                onFocus={handleCityFocus}
                onBlur={handleCityBlur}
                className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors"
              />
              <label
                htmlFor="city"
                className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                  cityFocused
                    ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                    : city.length > 0 &&
                      "scale-75 -translate-y-2.5 translate-x-1/8"
                }`}
              >
                شهر
              </label>
            </div>

            <div className="relative row-span-2 col-span-3">
              <textarea
                id="address"
                name="address"
                rows={5}
                value={address}
                onChange={(e) => onSetAddress(e.target.value)}
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

            <div className="relative h-10">
              <input
                type="number"
                id="plate"
                name="plate"
                value={parseInt(plate)}
                onChange={(e) => onSetPlate(e.target.value)}
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
                onChange={(e) => onSetUnit(e.target.value)}
                onFocus={handleUnitFocus}
                onBlur={handleUnitBlur}
                className="border border-gray-200 focus:border-blue-600 outline-none px-4 pb-0.25 pt-3 rounded-lg w-full h-full transition-colors no-spinner"
              />
              <label
                htmlFor="unit"
                className={`absolute right-4 top-2.5 cursor-text text-gray-400 transition ${
                  unitFocused
                    ? "scale-75 -translate-y-2.5 translate-x-1/8 !text-blue-600"
                    : unit.length > 0 &&
                      "scale-75 -translate-y-2.5 translate-x-1/8"
                }`}
              >
                واحد
              </label>
            </div>

            <div className="relative h-10">
              <input
                type="number"
                id="zipCode"
                name="zipCode"
                value={parseInt(zipCode)}
                onChange={(e) => onSetZipCode(e.target.value)}
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
          </div>

          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              name="def"
              id="def"
              checked={def}
              onChange={(e) => onSetDef(e.target.checked)}
            />
            <label htmlFor="def">انتخاب به عنوان آدرس پیش‌فرض</label>
          </div>
        </div>
      </form>
    </>
  );
}
export default AddDetails;
