'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login() {
  const router = useRouter();
  const [toggleEye, setToggleEye] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!email || !password) {
        return toast.error('All the fields are required.');
      }

      if (!email.includes('@')) {
        return toast.error('Please enter a valid email.');
      }
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        return toast.error('Invalid email or password provided.');
      }
      setEmail('');
      setPassword('');
      toast.success('User Logged In');
      router.refresh();
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          router.push('/cart');
        }, 3000);
        resolve();
      });
      setEmail('');
      setPassword('');
      Promise.resolve();
      return result;
    } catch (e) {
      return console.log(e instanceof Error && e?.message);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   await signIn('google', {
  //     callbackUrl: '/cart',
  //   });
  // };
  return (
    <section className="flex items-center justify-center h-screen bg-gray-900/30">
      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-200 mb-8">Login</h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            name="email"
            // type="email"
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
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            name="password"
            type={toggleEye ? 'text' : 'password'}
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
          className="w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-950 text-white font-bold"
        >
          Login
        </button>
        <button
          type="button"
          disabled
          // onClick={handleGoogleSignIn}
          className="w-full mt-3 btn btn-outline cursor-not-allowed btn-base-300"
        >
          Login with Google
        </button>
        <div className="flex items-center justify-between mt-4 text-gray-300">
          Not a user yet ?
          <Link href="/signup">
            <p className="text-blue-400 hover:text-blue-300 ml-1">
              Sign up here
            </p>
          </Link>
        </div>
      </form>
      <Toaster />
    </section>
  );
}
