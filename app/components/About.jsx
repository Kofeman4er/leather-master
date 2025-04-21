'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id='about'>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src="https://picsum.photos/id/40/800/500"
            alt="Workshop"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">About Me</h2>
          <p className="text-gray-300 text-lg mb-4">
            With over two decades of experience, I specialize in creating high-quality, durable, and custom gear for both horse riders and bikers. My passion lies in combining traditional leatherwork techniques with modern materials to deliver truly personal and functional results.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            From handcrafted saddles to rugged biker jackets, plastic welding repairs to textile manufacturing — every project is treated with precision, pride, and craftsmanship built on years of dedication.
          </p>
          <p className="text-gray-300 text-lg">
            Whether you're a rider, builder, or enthusiast, I'm here to provide gear that not only meets your needs but exceeds your expectations.
          </p>
        </div>
      </div>
    </section>
  );
}