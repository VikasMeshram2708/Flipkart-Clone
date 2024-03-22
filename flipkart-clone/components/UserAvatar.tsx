'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function UserAvatar() {
  const { data } = useSession();
  return (
    <div className="dropdown dropdown-end border-2 border-green-300 rounded-full">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="relative w-10 rounded-full">
          <Image
            fill
            alt={data?.user?.name as string}
            src={data?.user?.image as string}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <p className="justify-between">
            Profile
            <span className="badge">New</span>
          </p>
        </li>
        <li>
          <p>Settings</p>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-outline btn-error rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
