import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { fetchProperties } from "@/utils/requests";

async function HomeProperties() {
  const properties = await fetchProperties();
  const recetProperties = properties
    .sort(() => Math.random() - Math.random())
    .splice(0, 6);
  return (
    <section className="px-4 py-6 mt-6 md:mt-12">
      <div className="container-xl lg:container mx-auto px-4 md:px-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-8">
          {recetProperties === 0 ? (
            <p>No Recent Properties</p>
          ) : (
            recetProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </div>

      <div className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-gray-700 text-white text-center font-medium py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </div>
    </section>
  );
}

export default HomeProperties;
