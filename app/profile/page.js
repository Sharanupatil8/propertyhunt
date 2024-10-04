import { getSessionUser } from "@/utils/getSessionUser";
import Image from "next/image";
import UserListing from "../_components/UserListing";

async function Page() {
  const { user } = await getSessionUser();

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start p-8 space-y-6 md:space-y-0 md:space-x-8">
            <div className="md:w-1/4 flex flex-col items-center text-center">
              <h2 className="text-2xl mb-6">Your Profile</h2>
              <div className="bg-gray-50 border border-gray-100 px-5 py-4 md:px-8 md:py-8">
                {user && (
                  <Image
                    className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover mb-4"
                    src={user.image}
                    alt="User"
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                )}
                <h2 className="text-lg font-semibold text-gray-800">
                  {user?.name}
                </h2>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
            </div>
            <div className="md:w-3/4 flex flex-col space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Listings
                </h2>

                <UserListing userId={user.id} />

                {/* Add More Properties */}
                <div className="text-start">
                  <a
                    href="properties/add"
                    className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    Add New Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
