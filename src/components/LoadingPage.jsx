import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
      <p className="text-6xl font-bold">L </p>
      <div className="w-10 h-10 border-8 border-rose-500 border-dashed rounded-full animate-spin"></div>
      <p className="text-6xl font-bold">ading..</p>
    </div>
  );
};

export default LoadingPage;
