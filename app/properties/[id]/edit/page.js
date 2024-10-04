import PropertyEditForm from "@/app/_components/PropertyEditForm";
import React from "react";

function page() {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-3xl py-12">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyEditForm />
        </div>
      </div>
    </section>
  );
}

export default page;
