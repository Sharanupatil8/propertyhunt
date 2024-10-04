"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchPropertyById } from "@/utils/requests";
import PropertyHeaderImage from "@/app/_components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft, FaLandmark } from "react-icons/fa";
import PropertyDetails from "@/app/_components/PropertyDetails";
import Spinner from "@/app/_components/Spinner";
import BookmarkButton from "@/app/_components/BookmarkButton";
import ShareButton from "@/app/_components/ShareButton";
import PropertyContactForm from "@/app/_components/PropertyContactForm";

function Page() {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      setLoading(true); // Start loading before fetching
      try {
        const propertyData = await fetchPropertyById(id);
        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setLoading(false); // Stop loading once fetch completes
      }
    };

    fetchPropertyData();
  }, [id]); // Only fetch when id changes

  if (loading) {
    return <Spinner />;
  }

  if (!property & !loading) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-12">
        No property found.
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container  m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container  m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />
                {/* <!-- Sidebar --> */}
                <aside className="space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButton property={property} />

                  {/* <!-- Contact Form --> */}
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Page;
