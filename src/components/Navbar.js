import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex justify-between items-center w-full h-20 container  mx-auto">
        {/* logo */}
        <div>
          <h2 className="text-2xl font-bold">
            To-<span>Do List</span>
          </h2>
        </div>
        {/* three links -> home, analytics & profile */}
        <div className="flex text-white gap-4 text-lg">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/analytics">Analytics</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
