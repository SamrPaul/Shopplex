import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
    </div>
  );
};

export default LoadingSpinner;
