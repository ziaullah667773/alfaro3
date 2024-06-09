"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import { menuList } from "./header/SubMenu";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const MobNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle clicking outside the navbar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const navbarElement = document.querySelector(".mob_navbar");
      if (navbarElement && !navbarElement.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden md:hidden  fixed  w-full bg-transperent left-[46%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-10 py-2 ">
      <div className="flex justify-between items-center text-[28px] py-2 ">
        <div className="">
          <IoMenuOutline onClick={toggleMenu} />
        </div>

        {/* <div className='relative'>
                    <FiHeart />
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                        0
                    </div>
                </div> */}
        <div className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-4xl text-extrabold font-serif text-center pb-4 sm:pb-0 text-blackish">
          <Link href="/">Alfaro</Link>
        </div>
       <div>
      <div className="flex justify-around items-center ">

      <div className="relative pr-1" onClick={() => setShowProfile(!showProfile)}>
          <BiUser />
          <div
            className={`absolute bg-white z-[2] rounded-xl shadow-lg text-xl ${
              showProfile ? "" : "hidden"
            }`}
          >
            <Link href="/sign">SignIn</Link>
          </div>
        </div>

      <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        
      </div>
       </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute  left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg">
          {/* Cross button to close the menu */}
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <div className="w-full sm:w-[300px] md:w-[70%]  relative">
            <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full focus:ring-2  focus:outline-none"
              type="text"
              placeholder="search..."
            />

            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"
              size={20}
            />
          </div>
          {menuList.map((item, idx) => (
            <Link
              href={item.url}
              key={idx}
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
