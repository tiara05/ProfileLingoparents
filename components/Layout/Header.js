import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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

              <div className={
                "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none w-full" +
                (navbarOpen ? " block" : " hidden")
              }
              id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                  <li className="flex items-center">
                    <a
                      className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="#"
                    >
                      <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Dashboard
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="#"
                    >
                      <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Course
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="#"
                    >
                      <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Event
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="#"
                    >
                      <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                      Insight
                    </a>
                  </li>
                </ul>  
              </div>
              
            </div>

           
            <div className="hidden md:flex items-center space-x-1">
              <a href="/profile/" className="py-2 px-3 bg-yellow-400 text-xs uppercase font-bold hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Profile</a>
              
            </div>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <a href="/profile/" className="py-2 px-3 bg-yellow-400 text-xs uppercase font-bold hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Profile</a>
              </button>
            
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
