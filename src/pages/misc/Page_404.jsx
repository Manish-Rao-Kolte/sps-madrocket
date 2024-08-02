import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import notFoundImage from "../../assets/images/not_found.png";

const Page404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-center bg-white'>
      <div className='container mx-auto px-6 py-16 text-center'>
        <img
          src={notFoundImage}
          alt='Page not found'
          className='mx-auto mb-8'
        />
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-2xl text-gray-600 mb-8'>
          The page <span className='font-semibold'>{location.pathname}</span>{" "}
          does not exist.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            onClick={goHome}
          >
            Go to Home
          </button>
          <button
            className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600'
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
