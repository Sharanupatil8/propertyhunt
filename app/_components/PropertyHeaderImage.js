import Image from "next/image";
import React from "react";

function PropertyHeaderImage({ image }) {
  return (
    <section>
      <div className="container-xl m-auto bg-opacity-55">
        <div className="grid grid-cols-1 relative">
          {/* Image Container */}
          <div className="relative w-full">
            <Image
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[360px] w-full "
              width={0}
              height={0}
              sizes="100vw"
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-700 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHeaderImage;
