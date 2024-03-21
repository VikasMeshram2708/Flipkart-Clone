'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu, GiCrossedSabres } from 'react-icons/gi';

export default function Navbar() {
  const path = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <nav className="bg-baseb shadow-slate-800 shadow-lg p-3 relative">
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
            <Link href="/">Flipkart</Link>
          </h1>
        </div>

        {/* Sidebar */}
        {toggleSidebar && (
          <div className="transition min-h-[99vh] w-44 absolute top-0 left-0 bg-slate-900 text-white">
            <div className="p-5">
              <GiCrossedSabres
                onClick={() => setToggleSidebar((prev) => !prev)}
                className="mt-2 float-right cursor-pointer hover:text-red-500"
                size={20}
              />
              <h1 className="text-white font-semibold text-[1.5rem] mb-10">
                <Link href="/">Flipkart</Link>
              </h1>
            </div>
            <ul className="grid gap-5 text-[.95rem] sm:text-[1.5rem]">
              <li
                className={`p-5 ${path === '/' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/" className="p-2">
                  Home
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/men' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/men" className="p-2">
                  Men
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/women' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/women" className="p-2">
                  Women
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/kids' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/kids" className="p-2">
                  Kids
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/about' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/about" className="p-2">
                  About
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/contact' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/contact" className="p-2">
                  Contact
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/privacy' && 'border-l-8 border-blue-800 bg-slate-950'}`}
              >
                <Link href="/privacy" className="p-2">
                  Privacy Policy
                </Link>
              </li>
              <li
                className={`p-5 ${path === '/terms' && 'border-l-8 border-blue-800 bg-slate-950'}`}
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Men</Link>
          </li>
          <li>
            <Link href="/">Women</Link>
          </li>
          <li>
            <Link href="/">Kids</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Tems of Use</Link>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="btn btn-outline btn-md btn-base-100 rounded-md text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
