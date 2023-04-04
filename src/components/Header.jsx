import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-0 bg-gray-100 h-[70px] px-3 md:px-8">
      <div className="flex h-full justify-between items-center">
        <div className="flex items-center gap-2">
          <BoltIcon className="h-6 w-6 text-rose-500" />
          <h3 className="font-bold text-2xl">NextPage</h3>
        </div>

        <div className="hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            About Us
          </NavLink>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden relative">
          <span>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-rose-500" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6 text-rose-500" />
            )}
          </span>

          <div
            className={`${
              isOpen ? "-right-3" : "left-[300%]"
            } absolute top-[47px] flex flex-col gap-3 bg-gray-100 w-[150px] py-5 duration-500`}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
