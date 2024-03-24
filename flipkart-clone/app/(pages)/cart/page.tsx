'use client';

import { useSession } from 'next-auth/react';

export default function Cart() {
  const { data, status } = useSession();
  return (
    <section className="min-h-screen max-w-[90%] mx-auto">
      <h1>Cart</h1>
      {status === 'authenticated' && (
        <p className="text-white b">{JSON.stringify(data.user?.name)}</p>
      )}
      {status === 'unauthenticated' && <p>No Users Found.</p>}
    </section>
  );
}
