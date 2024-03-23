'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu, GiCrossedSabres } from 'react-icons/gi';
import UserAvatar from './UserAvatar';

export default function Navbar() {
  const path = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const { data } = useSession();
  return (
    <nav className="sticky top-0 z-40 bg-base-100 p-3 shadow-white shadow">
      <div className="flex items-center flex-wrap justify-between">
        <div className="flex items-center gap-3">
          <span className="block md:hidden">
            <GiHamburgerMenu
              onClick={() => setToggleSidebar((prev) => !prev)}
              className="cursor-pointer"
              size={25}
              color="white"
            />
          </span>
          <h1 className="text-white font-semibold text-[2rem]">
            <Link href="/">BharatMart</Link>
          </h1>
        </div>

        {/* Sidebar */}
        {toggleSidebar && (
          <div className="transition min-h-[99vh] w-44 fixed z-40 top-0 left-0 bg-base-200 text-white">
            <div className="p-5">
              <GiCrossedSabres
                onClick={() => setToggleSidebar((prev) => !prev)}
                className="mt-2 float-right cursor-pointer hover:text-red-500"
                size={20}
              />
              <h1 className="text-white font-semibold text-[1.5rem] mb-10">
                <Link href="/">BharatMart</Link>
              </h1>
            </div>
            <ul className="grid gap-5 text-[.95rem] sm:text-[1.5rem]">
              <li
                className={`p-5 ${path === '/' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/" className="p-2">
                  Home
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/men' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/men" className="p-2">
                  Men
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/women' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/women" className="p-2">
                  Women
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/kids' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/kids" className="p-2">
                  Kids
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/about' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/about" className="p-2">
                  About
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/contact' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/contact" className="p-2">
                  Contact
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/privacy' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/privacy" className="p-2">
                  Privacy Policy
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/terms' && 'border-l-8 border-green-300 bg-black'}`}
              >
                <Link href="/terms" className="p-2">
                  Tems of Use
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Large Screen Nav Items */}
        <ul className="hidden md:flex items-center gap-5">
          <li
            className={`${path === '/' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${path === '/men' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/men">Men</Link>
          </li>
          <li
            className={`${path === '/women' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/women">Women</Link>
          </li>
          <li
            className={`${path === '/kids' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/kids">Kids</Link>
          </li>
          <li
            className={`${path === '/about' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${path === '/contact' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
            className={`${path === '/privacy' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li
            className={`${path === '/terms' && 'border-b-4 border-green-300 p-5'}`}
          >
            <Link href="/terms">Tems of Use</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          {data && <UserAvatar />}
          {!data && (
            <button
              onClick={() => signIn()}
              type="button"
              className="btn btn-outline btn-md btn-base-100 rounded-md text-lg"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
