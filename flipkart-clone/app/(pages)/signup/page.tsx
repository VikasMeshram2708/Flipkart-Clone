'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
/* eslint-disable jsx-a11y/label-has-associated-control */
export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleEye, setToggleEye] = useState(false);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!name.trim()) {
        return toast.error('Name is requried');
      }
      if (!email.trim()) {
        return toast.error('Email is required');
      }
      if (email[0].startsWith('@')) {
        return toast.error('Please enter a proper Gmail type email');
      }
      if (!email.includes('@')) {
        return toast.error('Invalid Email');
      }
      if (!email.endsWith('gmail.com')) {
        return toast.error('Only Gmail type emails are allowed.');
      }
      if (!password.trim()) {
        return toast.error('Message is required');
      }

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        return toast.error(result?.message);
      }
      // console.log(result);
      setName('');
      setEmail('');
      setPassword('');
      router.refresh();
      router.push('api/auth/signin');
      return toast.success(result?.message);
    } catch (error) {
      return console.log(error instanceof Error && error?.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-900/30">
      <form
        onSubmit={handleSignUp}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-200 mb-8">Sign Up</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
            value={email}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
            type={toggleEye ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
          Sign Up
        </button>
        <div className="flex items-center justify-between mt-4 text-gray-300">
          Already a User ?
          <Link href="/login">
            <p className="text-blue-400 hover:text-blue-300 ml-1">Login</p>
          </Link>
        </div>
      </form>
      <Toaster />
    </section>
  );
}
