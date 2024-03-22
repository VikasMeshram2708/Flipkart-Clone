import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BharatMart CLone - Grab latest deals.',
  description:
    'BharatMart Grab hot deals with daily discount and interesting offers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
