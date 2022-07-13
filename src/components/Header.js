import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className="py-3 mb-12 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="font-bold text-3xl">
            Dream<span className="text-violet-700">House</span>
          </h2>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Login
          </Link>
          <Link
            className=" bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
            to="/"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
