import { BsCheckLg } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { type LatLngExpression } from "leaflet";

import Map from "../../components/Map";

interface SelectOnMapProps {
  onHandleLocation: (loc: LatLngExpression) => void;
  onSetAddAddress: React.Dispatch<React.SetStateAction<boolean>>;
  onNextStep: () => void;
  location: LatLngExpression | undefined;
}

function SelectOnMap({
  onHandleLocation,
  onSetAddAddress,
  onNextStep,
  location,
}: SelectOnMapProps) {
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
            <p className="text-gray-400">مکان آدرس را روی نقشه مشخص کنید.</p>
          </div>
        </div>

        <button
          disabled={!location}
          onClick={onNextStep}
          className={`flex items-center gap-2 h-10 px-4 py-2 text-white rounded-lg transition-colors ${
            location
              ? "bg-blue-700 hover:bg-blue-800 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <BsCheckLg size={20} />
          تايید
        </button>
      </div>

      <div className="w-full h-96 rounded-lg">
        <Map onLocationChange={onHandleLocation} />
      </div>
    </>
  );
}
export default SelectOnMap;
