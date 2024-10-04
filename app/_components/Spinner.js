"use client";
import { ClipLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#3b82f6" size={100} aria-label="Loading Spinner" />
    </div>
  );
}

export default Spinner;
