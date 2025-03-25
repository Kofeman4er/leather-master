'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Custom Gear</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#header" className="hover:text-gray-400">Header</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-2">
          <Link href="/about" className="block hover:text-gray-400">About</Link>
          <Link href="/services" className="block hover:text-gray-400">Services</Link>
          <Link href="/contact" className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
