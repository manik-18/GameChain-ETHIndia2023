import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-cgrey">
      <FaSpinner className="animate-spin text-4xl text-caccent" />
    </div>
  );
};

export default Spinner;