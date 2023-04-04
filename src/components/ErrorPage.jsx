import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;
  console.log(error)

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center bg-rose-200 border-2 border-rose-500 py-10 px-5 rounded-xl">
        <h1 className="text-8xl font-extrabold mb-3">{status}</h1>
        <h2 className="text-4xl font-bold mb-3">{statusText}</h2>
        <h3 className="text-3xl font-bold mb-5">{data}</h3>
        <Link to='/'>
          <button
              type="button"
              className="py-3 px-8 bg-rose-500 hover:bg-rose-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
            > Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
