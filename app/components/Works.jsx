'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const works = [
  {
    title: 'Handcrafted Saddle',
    images: [
      'https://picsum.photos/id/1018/800/500',
      'https://picsum.photos/id/1015/800/500'
    ],
    description: 'A fully custom saddle made from premium leather with floral tooling.',
  },
  {
    title: 'Biker Jacket Detailing',
    images: [
      'https://picsum.photos/id/1016/800/500',
      'https://picsum.photos/id/1011/800/500'
    ],
    description: 'Custom biker jacket with unique leatherwork and patch engraving.',
  },
  {
    title: 'Plastic Welding Repair',
    images: [
      'https://picsum.photos/id/1025/800/500'
    ],
    description: 'Reinforced plastic repair for helmet and bike fairing.',
  },
  {
    title: 'Textile Saddle Cover',
    images: [
      'https://picsum.photos/id/1024/800/500'
    ],
    description: 'Waterproof textile cover designed for durability and fit.',
  }
];

export default function PreviousWorks() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (expandedIndex !== null) {
      setCarouselIndex(0);
    }
  }, [expandedIndex]);

  const handleClose = () => {
    setExpandedIndex(null);
  };

  const handleNext = () => {
    if (!works[expandedIndex]) return;
    setCarouselIndex((prev) => (prev + 1) % works[expandedIndex].images.length);
  };

  const handlePrev = () => {
    if (!works[expandedIndex]) return;
    setCarouselIndex((prev) =>
      prev === 0 ? works[expandedIndex].images.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6" id = "works">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12">Previous Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <div
              key={index}
              onClick={() => setExpandedIndex(index)}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={work.images[0]}
                  alt={work.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-orange-400">{work.title}</h3>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded View */}
        {expandedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-6 overflow-auto transition-all duration-500 ease-in-out">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 bg-gray-800 p-2 rounded-full hover:bg-orange-500"
            >
              <X size={24} />
            </button>
            <div className="max-w-4xl w-full">
              <h3 className="text-3xl font-bold text-orange-400 mb-6 text-center">
                {works[expandedIndex].title}
              </h3>
              <div className="relative w-full h-96 mb-6">
                <Image
                  key={carouselIndex}
                  src={works[expandedIndex].images[carouselIndex]}
                  alt={`Image ${carouselIndex + 1}`}
                  fill
                  className="rounded-lg object-cover transition duration-500"
                />
                {works[expandedIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-orange-500 p-2 rounded-full"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-orange-500 p-2 rounded-full"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>
              <p className="text-gray-300 text-lg text-center">
                {works[expandedIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}