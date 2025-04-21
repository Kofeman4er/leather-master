'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './assets/img/logoipsum.svg';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Image
              href="/"
              src={Logo}
              alt="Logo"
              width={120}
              height={40}
              className="rounded"
            />
            
              <span className="text-2xl font-bold cursor-pointer">Riders repair and alterations</span>
            
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-orange-500">About</Link>
            <Link href="#services" className="hover:text-orange-500">Services</Link>
            <Link href="#works" className="hover:text-orange-500">My Works</Link>
            <Link href="#faq" className="hover:text-orange-500">FAQ</Link>
            <Link href="#contact" className="hover:text-orange-500">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div onClick={() => setIsOpen(false)}>
            <div
              className="md:hidden bg-gray-800 p-4 space-y-2 flex flex-col items-center rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-500">About</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Services</Link>
              <Link href="#works" onClick={() => setIsOpen(false)} className="hover:text-orange-500">My Works</Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="hover:text-orange-500">FAQ</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}