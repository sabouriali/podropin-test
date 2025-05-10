import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface ShippingServiceProps {
  shippingServices: {
    title: string;
    logo: string;
    time: string;
    features: string[];
    score: number;
    cost: number;
  }[];
  onSetShipper: React.Dispatch<React.SetStateAction<number | undefined>>;
  shipper: number | undefined;
  handleBack: () => void;
}

function ShippingService({
  shippingServices,
  onSetShipper,
  shipper,
  handleBack,
}: ShippingServiceProps) {
  return (
    <>
      <div className="flex items-center gap-6 mb-4 pr-4">
        <button className="cursor-pointer" onClick={handleBack}>
          <FaArrowRightLong />
        </button>
        <p className="text-gray-400">
          سرویس‌دهنده مورد نظر خود را انتخاب کنید:
        </p>
      </div>

      <section className="p-4 bg-white rounded-2xl mb-6 space-y-4">
        {shippingServices.map((service, index) => (
          <div
            key={index}
            onClick={() => onSetShipper(index)}
            className={`border rounded-lg p-4 flex items-start justify-between h-40 cursor-pointer transition-colors ${
              shipper === index ? "border-blue-600" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-17.5 h-17.5 content-center">
                <img src={service.logo} alt={service.title} />
              </div>

              <div className="h-32 flex flex-col justify-between">
                <h3 className="text-base font-medium">{service.title}</h3>
                <p className="text-gray-400">تحویل: {service.time}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400">{service.score}</p>
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
                      style={{ width: `${service.score * 20}%` }}
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

            <div dir="ltr" className="h-32 flex flex-col justify-between">
              <p className="text-gray-400">هزینه کل</p>

              <div className="flex items-center gap-2 w-fit">
                <p className="text-xs">ریال</p>
                <p className="text-xl font-medium">{service.cost}</p>
              </div>

              <div className="flex items-center gap-2">
                {service.features.map((feature, ind) => (
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
        ))}
      </section>
    </>
  );
}

export default ShippingService;
