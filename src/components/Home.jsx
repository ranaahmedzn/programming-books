import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 px-3 md:px-8 items-center min-h-[calc(100vh-70px)]">
      <div>
        <span class="px-4 py-1 text-xs font-bold rounded-full text-black bg-yellow-400 ">
          ON SALE!
        </span>
        <h1 className="text-4xl my-3 font-bold">
          A reader lives a <br /> thousand lives
          <span className="text-rose-500"> before he dies</span>
        </h1>
        <p className="my-3 text-lg w-[80%]">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <Link to="/books">
          <button
            type="button"
            className="flex gap-2 py-3 px-8 bg-rose-500 hover:bg-rose-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
          >
            Visit Store
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>

      {/* Lottie animation  */}
      <div>
        <div className="w-full lg:w-3/4 lg:ml-auto">
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
