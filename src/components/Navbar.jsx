"use client";

import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-lg font-bold text-white">
          MySite
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-gray-300 hover:text-white">
              Profile
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={logout}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
