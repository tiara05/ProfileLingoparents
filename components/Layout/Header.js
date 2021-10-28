import React, { useState, useEffect } from "react";
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <nav className="bg-white-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">

            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Image src="/assets/logo.png" alt="site logo" width={240} height={40} />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Course</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Event</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Insight</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">Login</a>
              <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Profile</a>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
