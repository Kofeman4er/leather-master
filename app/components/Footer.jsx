'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from './assets/img/logoipsum.svg';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start sm:items-center">
                {/* Column 0 - Logo */}
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Column 1 */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">About</h3>
                    <p className="text-sm">
                        Crafting high-quality, custom equipment for horse riders and bikers. Experienced in leatherwork, welding, and textile manufacturing.
                    </p>
                </div>


                {/* Column 2 */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
                        <li><Link href="/services" className="hover:text-orange-400">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                    <p className="text-sm">Email: info@customcraftsman.com</p>
                    <p className="text-sm">Phone: +1 (234) 567-8901</p>
                    <p className="text-sm">Location: Alberta, Canada</p>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook className="text-gray-300 hover:text-orange-400" size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram className="text-gray-300 hover:text-orange-400" size={24} />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                            <Youtube className="text-gray-300 hover:text-orange-400" size={24} />
                        </Link>
                        <Link href="mailto:info@customcraftsman.com" aria-label="Email">
                            <Mail className="text-gray-300 hover:text-orange-400" size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Custom Craftsman. All rights reserved.
            </div>
        </footer>
    );
}