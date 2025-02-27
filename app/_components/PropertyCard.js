import Image from "next/image";
import Link from "next/link";
import {
  FaBath,
  FaBed,
  FaMapMarked,
  FaMapMarkedAlt,
  FaMapMarker,
  FaMoneyBill,
} from "react-icons/fa";

function PropertyCard({ property }) {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/month`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/week`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <div className="rounded-xl shadow-md relative  hover:scale-105 ease-linear  duration-200">
      <Image
        src={`../images/properties/${property.images[0]}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
        sizes="100vw"
        height={0}
        width={0}
        unoptimized
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold text-gray-600">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="flex justify-start gap-4 text-gray-500 mb-4">
          <p className="text-gray-600">
            <FaBed className="inline mr-2" /> {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {property.baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            {property.square_feet}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-start gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="fa-solid fa-location-dot text-lg text-gray-700" />
            <span className="text-orange-700">
              {property.location.city} {property.location.state}{" "}
            </span>
          </div>
          <a
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            details
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
