"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkBookmarkStatus = async () => {
      try {
        const res = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });

        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkBookmarkStatus();
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark a property");
      return;
    }

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center w-full py-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></div>
      </div>
    );

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-full py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg ${
        isBookmarked
          ? "bg-green-500 hover:bg-red-600"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-bold`}
      style={{
        boxShadow: isBookmarked
          ? "0 8px 15px rgba(255, 99, 99, 0.3)"
          : "0 8px 15px rgba(72, 187, 255, 0.3)",
      }}
    >
      {isBookmarked ? (
        <>
          <FaBookmark className="mr-2 transition-transform duration-200 ease-in-out transform rotate-0 hover:rotate-180" />
          Remove Bookmark
        </>
      ) : (
        <>
          <FaRegBookmark className="mr-2 transition-transform duration-200 ease-in-out transform rotate-0 hover:rotate-180" />
          Bookmark Property
        </>
      )}
    </button>
  );
};

export default BookmarkButton;
