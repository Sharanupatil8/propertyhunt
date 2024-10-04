"use client";
import { set } from "mongoose";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Link from "next/link";
import { toast } from "react-toastify";

function UserListing({ userId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userListing, setUserListing] = useState([]);

  useEffect(() => {
    async function fetchUserListing() {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/user/${userId}`
      );
      const data = await res.json();

      setUserListing(data);
      setIsLoading(false);
    }
    if (userId) {
      fetchUserListing();
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  async function handleDeleteProperty(propertyId) {
    const confirmed = window.confirm("Are u sure you want to delete");
    if (!confirmed) {
      return;
    }

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        // remove the property
        const updatedProperties = userListing.filter(
          (listing) => listing._id !== propertyId
        );
        setUserListing(updatedProperties);
        toast.success("Listing deleted successfully");
      } else {
        toast.error("failed to delete, try again");
      }
    } catch (error) {
      toast.error("failed to delete, try again");
    }
  }

  if (!userListing.length) {
    return (
      <h3 className="text-lg font-medium text-gray-800">No Listings Found</h3>
    );
  }

  return (
    <>
      {userListing?.map((listing) => {
        return (
          <div
            key={listing._id}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <Link href={`properties/${listing._id}`}>
              <Image
                className="h-40 w-full rounded-lg object-cover"
                src={`/images/properties/${listing.images[0]}`}
                alt="Property 1"
                width={0}
                height={0}
                sizes="100vw"
              />
            </Link>
            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {listing.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {listing.location.street}, {listing.location.city},{" "}
                  {listing.location.state}, {listing.location.zipcode},
                </p>
              </div>
              <div className="mt-4 space-x-2">
                <a
                  href="/properties/add"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </a>
                <button
                  onClick={() => handleDeleteProperty(listing._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserListing;
