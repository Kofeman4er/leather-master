'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen" id = "header">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-orange-500">
            Custom Leather & Textile Craftsmanship
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Precision handmade gear for horse riders, bikers, and custom industrial needs. Backed by decades of experience in leatherwork, welding, and textile manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none">
  <Link href="#services" className="w-full sm:w-auto">
    <span className="block text-center bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded text-white font-semibold cursor-pointer w-full">
      Explore Services
    </span>
  </Link>
  <Link href="#contact" className="w-full sm:w-auto">
    <span className="block text-center border border-orange-600 hover:bg-orange-600 transition px-6 py-3 rounded text-white font-semibold cursor-pointer w-full">
      Contact Me
    </span>
  </Link>
</div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="https://picsum.photos/id/146/800/500"
            alt="Leather work example"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-6">Why Choose My Craft?</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          With over 20 years of hands-on experience in saddle making, biker gear, plastic welding, and textiles, I offer a unique blend of tradition, durability, and custom design. Each project is built to last and tailored to fit your lifestyle.
        </p>
      </section>
    </main>
  );
}
