import React from "react";

const Footer = () => {
  return (
    <nav class="bg-grey-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">

          <div class="flex space-x-4">

            <div class="hidden md:flex items-center space-x-1">
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Careers</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <a href="" class="py-5 px-3">© 2021 LingoTalk Language Learning</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Footer;
