/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
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
    if (!message.trim()) {
      return toast.error('Message is required');
    }

    // api request
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result?.message);
      return toast.error(result?.message);
    }

    toast.success(result?.message);
    setName('');
    setEmail('');
    setMessage('');
    await Promise.resolve();
    return result;
  };
  return (
    <section className="max-w-lg mx-auto">
      <form onSubmit={handleContact} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email:
          </label>
          <input
            // type="email"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            rows={5}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
