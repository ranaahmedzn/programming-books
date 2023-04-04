import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container mx-auto mt-0 bg-gray-100 h-[70px] px-8">
      <div className="flex h-full justify-between items-center">
        <div className="flex items-center gap-2">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <h3 className="font-bold text-2xl">NextPage</h3>
        </div>

        <div>
          <NavLink
            to='/'
            className={({ isActive}) => isActive ? "active" : "default"}
          >Home</NavLink>
          <NavLink
            to='/books'
            className={({ isActive}) => isActive ? "active" : "default"}
          >Books</NavLink>
          <NavLink
            to='/about'
            className={({ isActive}) => isActive ? "active" : "default"}
          >About Us</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
