import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function Cart() {
  const session = await getServerSession(authOptions);
  return (
    <section className="min-h-screen max-w-[90%] mx-auto">
      <h1>Cart</h1>
      {session && (
        <p className="text-white b">{JSON.stringify(session?.user?.name)}</p>
      )}
      {!session && <p>No Users Found.</p>}
    </section>
  );
}
