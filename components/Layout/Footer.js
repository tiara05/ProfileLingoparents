import React from "react";

const Footer = () => {
  return (
    <nav className="bg-grey-100 border-t-2 border-gray-200 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
 
          <div className="flex space-x-4">

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Careers</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>

          <div className="md:flex items-center space-x-1 text-center">
            <a href="" className="py-5 px-3">© 2021 LingoTalk Language Learning</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Footer;
