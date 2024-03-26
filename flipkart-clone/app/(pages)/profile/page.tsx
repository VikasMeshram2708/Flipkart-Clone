'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function ProfilePage() {
  const { data } = useSession();
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-slate-950 overflow-hidden shadow-xl sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-white">
                Profile Information
              </h3>
              {/* @ts-ignore */}
              {/* <p className="mt-1 max-w-2xl text-sm text-white">
                Update your profile details below.
              </p> */}
            </div>
            <div className="border-t border-slate-700">
              <dl>
                <div className="bg-slate-950 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white">Full name</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2">
                    {data?.user?.name}
                  </dd>
                </div>
                <div className="bg-slate-950 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-white">Email</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2">
                    {data?.user?.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
