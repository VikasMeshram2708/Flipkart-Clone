'use client';

import Link from 'next/link';
import { useState } from 'react';

import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
/* eslint-disable jsx-a11y/label-has-associated-control */
export default function SignUp() {
  const [toggleEye, setToggleEye] = useState(false);

  return (
    <section className="flex items-center justify-center h-screen bg-gray-900/30">
      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-gray-200 mb-8">Sign Up</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm text-gray-400 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="absolute right-3 bottom-3">
            {toggleEye ? (
              <IoMdEye
                size={20}
                color="white"
                className="cursor-pointer"
                onClick={() => setToggleEye((prev) => !prev)}
              />
            ) : (
              <IoIosEyeOff
                size={20}
                color="white"
                className="cursor-pointer"
                onClick={() => setToggleEye((prev) => !prev)}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
        <div className="flex items-center justify-between mt-4 text-gray-300">
          Already a User ?
          <Link href="/login">
            <p className="text-blue-400 hover:text-blue-300 ml-1">Login</p>
          </Link>
        </div>
      </form>
    </section>
  );
}
