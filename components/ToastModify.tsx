// components/ClientWrapper.tsx
"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ClientWrapper = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        className="z-[9999]"
        toastClassName={() =>
          "bg-gray-900 border border-gray-700 rounded-lg shadow-lg px-4 py-3 text-white font-bold text-lg " +
          "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        }
      />
    </>
  );
};
