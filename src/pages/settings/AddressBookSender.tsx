import { useState } from "react";
import { type LatLngExpression } from "leaflet";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineWarehouse } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import SelectOnMap from "../../sections/add-address-sender/SelectOnMap";
import AddDetails from "../../sections/add-address-sender/AddDetails";

function AddressBookSender() {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [location, setLocation] = useState<LatLngExpression>();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [addressName, setAddressName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [plate, setPlate] = useState("");
  const [unit, setUnit] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [def, setDef] = useState(false);
  const [step, setStep] = useState(1);

  function handleSearchFocus() {
    setSearchFocused(true);
  }
  function handleSearchBlur() {
    setSearchFocused(false);
  }

  function handleLocation(loc: LatLngExpression) {
    setLocation(loc);
  }

  function handleStep() {
    if (step < 2) {
      setStep(step + 1);
    }
    return;
  }

  return (
    <>
      {addAddress ? (
        <div className="p-4 rounded-2xl bg-white w-3xl h-fit">
          {step == 1 ? (
            <SelectOnMap
              onHandleLocation={handleLocation}
              onSetAddAddress={setAddAddress}
              onNextStep={handleStep}
              location={location}
            />
          ) : (
            <AddDetails
              fname={fname}
              lname={lname}
              phone={phone}
              addressName={addressName}
              province={province}
              city={city}
              address={address}
              plate={plate}
              unit={unit}
              zipCode={zipCode}
              def={def}
              location={location!}
              onSetAddAddress={setAddAddress}
              onSetFname={setFname}
              onSetLname={setLname}
              onSetPhone={setPhone}
              onSetAddressName={setAddressName}
              onSetProvince={setProvince}
              onSetCity={setCity}
              onSetAddress={setAddress}
              onSetPlate={setPlate}
              onSetUnit={setUnit}
              onSetZipCode={setZipCode}
              onSetDef={setDef}
            />
          )}
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-white w-3xl min-h-[calc(100vh-7.5rem)]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-base font-medium">آدرس فرستنده</h2>
            <button
              onClick={() => setAddAddress(true)}
              className="flex items-center gap-2 cursor-pointer h-10 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <BsPlusLg size={20} />
              افزودن آدرس
            </button>
          </div>

          <div className="relative h-12 md:w-1/2 mb-4">
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="h-full w-full border border-gray-200 rounded-lg outline-none p-[13px_48px_1px_14px] focus:border-blue-600 transition-colors"
            />
            <label
              htmlFor="search"
              className={`text-gray-400 cursor-text absolute top-1/2 -translate-y-1/2 right-12 transition ${
                searchFocused
                  ? "scale-75 -translate-y-6 translate-x-1/8 !text-blue-600"
                  : search.length > 0 &&
                    "scale-75 -translate-y-6 translate-x-1/8"
              }`}
            >
              جستجو
            </label>
            <RiSearch2Line
              size={20}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-3.5"
            />
          </div>

          {/* چون آدرس نداریم */}
          <div className="h-[calc(100vh-18rem)] flex flex-col items-center justify-center gap-8">
            <MdOutlineWarehouse size={48} className="text-gray-400" />

            <div className="text-center">
              <p>آدرس فرستنده</p>
              <p className="text-gray-400 font-normal mt-2">
                شما هنوز آدرسی ثبت نکرده‌اید.
              </p>
            </div>

            <button
              onClick={() => setAddAddress(true)}
              className="flex items-center justify-center gap-2 cursor-pointer h-10 w-xs px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <BsPlusLg size={20} />
              افزودن آدرس
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AddressBookSender;
