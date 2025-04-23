'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './assets/img/logoipsum.svg';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById('main-navbar');
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = `${navHeight}px`;
    return () => {
      document.body.style.paddingTop = '0px';
    };
  }, [navHeight]);

  return (
    <nav id="main-navbar" className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50 border-b border-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <Link href="#header" className="transition-opacity duration-300 hover:opacity-80">
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={40}
              className="rounded cursor-pointer"
            />
          </Link>
          <span className="text-2xl font-bold hidden sm:inline select-none">Riders repair and alterations</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-orange-500">About</Link>
          <Link href="#services" className="hover:text-orange-500">Services</Link>
          <Link href="#works" className="hover:text-orange-500">My Works</Link>
          <Link href="#faq" className="hover:text-orange-500">FAQ</Link>
          <Link href="#contact" className="hover:text-orange-500">Contact</Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)}>
          <div
            className="md:hidden bg-gray-800 p-4 space-y-2 flex flex-col items-center shadow-lg"
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
  );
}
