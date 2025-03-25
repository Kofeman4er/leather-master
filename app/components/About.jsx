'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section className="w-full py-16 bg-gray-900 text-white" id='about'>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          We specialize in crafting high-quality, custom equipment for riders and bikers. From
          premium leather gear for horse riders to durable accessories for bikers, our mission is
          to provide both comfort and functionality. Our expertise also extends to plastic welding
          and bike repair, ensuring that we meet all your riding needs.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          With a focus on craftsmanship, attention to detail, and customer satisfaction, we take pride in delivering
          products that stand the test of time.
        </p>
        
      </div>
    </section>
  );
}
