'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
  'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
  'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
];

const titles = [
    'Leather for Horses',
    'Leather Equip for Bikers',
    'Plastic Welding',
    'Textile'
  ];
  
  export default function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-black" id='header'>
        <div className="relative w-full max-w-4xl flex items-center justify-center space-x-2">
          <button onClick={prevSlide} className="p-2 bg-black bg-opacity-50 rounded-full">
            <ChevronLeft size={32} className="text-white" />
          </button>
          <div className="flex w-full max-w-4xl gap-2">
            {images.map((src, index) => (
              <div key={index} className={`relative transition-all duration-500 ${index === currentIndex ? 'w-2/4' : 'w-1/6'} h-64 rounded-lg overflow-hidden`}>
                <img
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-lg font-semibold py-2 text-center">
                    {titles[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 bg-black bg-opacity-50 rounded-full">
            <ChevronRight size={32} className="text-white" />
          </button>
        </div>
  
        <div className="relative z-10 max-w-3xl px-6 mt-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">Custom Gear for Riders & Bikers</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">Handcrafted leather equipment tailored just for you.</p>
          <div className="space-x-4">
            <Link href="/services">
              <Button className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 text-lg font-semibold rounded-lg">Explore Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-orange-500 border-orange-500 px-6 py-3 text-lg font-semibold rounded-lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
  
  