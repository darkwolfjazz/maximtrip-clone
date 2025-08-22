import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-3 bg-white">
      <div className="flex items-center gap-30 w-full px-6 py-3">
        <div className="flex-shrink-0">
          <img src="/images/logo.png" alt="maximtrip" className="h-12" />
        </div>
        <div className="flex-1">
          <div className="relative w-full max-w-xl">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder='Search "Kashmir Tour Packages'
              className=" text-2xl w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 flex-shrink-0 gap-12">
          <div className="hidden sm:flex items-center space-x-4 text-gray-700">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-md font-medium">+91- 9797996205</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="text-md font-medium">holiday@maximtrip.in</span>
          </div>
          <button className="rounded-full bg-red-500 p-3 text-white shadow hover:bg-red-600 transition">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
