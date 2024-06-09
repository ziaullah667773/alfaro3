"use client";

import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SubMenu from "./SubMenu";
import Link from "next/link";
import { useCart } from "app/context/CartContext"; // Import useCart hook

const Header = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const { cartItemCount } = useCart(); // Get cart item count from context
  let timeoutId: NodeJS.Timeout; // Use NodeJS.Timeout type

  const handleMouseEnter = () => {
    setShowProfile(true);
    // Clear any existing timeout
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown menu after 500 milliseconds
    timeoutId = setTimeout(() => {
      setShowProfile(false);
    }, 500);
  };

  return (
    <>
      <div className="border-b h-20 border-gray-200 py-6 text-black items-center">
        <div className="hidden container mx-auto sm:flex justify-between items-center">
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl text-extrabold font-serif text-center pb-4 sm:pb-0 text-blackish">
            <Link href="/">Alfaro</Link>
          </div>
          <div className="w-full sm:w-[300px] md:w-[66%] relative">
            <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full focus:ring-2 focus:outline-none"
              type="text"
              placeholder="search..."
            />

            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"
              size={20}
            />
          </div>
          <div className="hidden md:flex justify-around lg:flex gap-4 text-gray-500 text-[30px] cursor-pointer">
            <div className="relative">
              <div
                className="flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <BiUser />
                <div
                  className={`absolute bg-white z-[2] rounded-xl shadow-lg text-xl w-[110px] p-3 flex flex-col justify-center items-center ${
                    showProfile ? "" : "hidden"
                  }`}
                  style={{ top: "calc(100% + 4px)", left: "50%", transform: "translateX(-50%)" }}
                  onMouseEnter={handleMouseEnter} // Add this line
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/signin"
                    className="hover:bg-gray-200 px-2 py-1 text-lg rounded-md"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="hover:bg-gray-200 px-2 py-1 text-lg rounded-md"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <FiHeart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
            <div className="relative">
              <Link href="/cart" legacyBehavior>
                <a>
                  <HiOutlineShoppingBag />
                  <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                    {cartItemCount()}
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SubMenu />
    </>
  );
};

export default Header;
