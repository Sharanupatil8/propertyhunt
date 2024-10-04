import {
  FaBath,
  FaBed,
  FaCheck,
  FaMapMarker,
  FaRulerCombined,
  FaEnvelope,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

function PropertyDetails({ property }) {
  return (
    <main className="  px-4">
      {/* Property Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
        <div className="text-gray-500 flex items-center mb-6">
          <FaMapMarker className="text-orange-700 mr-2" />
          <p className="text-orange-700">{`${property.location.street}, ${property.location.city}, ${property.location.state} ${property.location.zipcode}`}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {property.images.map((img, index) => (
            <div key={index} className="relative w-full md:w-1/3 h-60">
              <Image
                src={`/images/properties/${img}`}
                alt={`Property image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rates Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-8">
          <div className="flex items-center justify-start mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold">
              <FaTimes className="fa fa-xmark text-red-700" />
            </div>
          </div>
          <div className="flex items-center justify-start mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              ${property.rates.weekly}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              ${property.rates.monthly}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-2xl font-bold mb-6">Description & Details</h3>
        <div className="flex justify-start gap-4 text-blue-500 mb-4 text-xl">
          <p>
            <FaBed className="inline mr-1" /> {property.beds}
            <span className="hidden sm:inline"> Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-1" /> {property.baths}
            <span className="hidden sm:inline"> Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-1" />
            {property.square_feet}{" "}
            <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>

      {/* Amenities Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-2xl font-bold mb-6">Amenities</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {property.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="inline text-green-600 mr-2 " /> {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Seller Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-2xl font-bold mb-6">Seller Information</h3>
        <p className="text-gray-700 text-lg">
          <strong>Name:</strong> {property.seller_info.name}
        </p>
        <p className="text-gray-700 text-lg flex items-center">
          <FaEnvelope className="mr-2 text-blue-500" />{" "}
          {property.seller_info.email}
        </p>
        <p className="text-gray-700 text-lg flex items-center">
          <FaPhone className="mr-2 text-blue-500" />{" "}
          {property.seller_info.phone}
        </p>
      </div>
    </main>
  );
}

export default PropertyDetails;
