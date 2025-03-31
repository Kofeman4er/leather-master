'use client';

import Image from 'next/image';
import placeholder from './assets/img/placeholder1.jpg'

const previousWorks = [
  { title: 'Custom Leather Saddle', description: 'Handcrafted saddle for maximum comfort.', image: 'https://i.pravatar.cc/100?img=1' },
  { title: 'Biker Jacket Customization', description: 'Unique leatherwork for biker jackets.', image: 'https://i.pravatar.cc/100?img=2'},
  { title: 'Plastic Welding Repair', description: 'Durable repair for bike and horse gear.', image: 'https://i.pravatar.cc/100?img=3'},
  { title: 'Bike Seat Modification', description: 'Enhanced bike seat for long rides.', image: 'https://i.pravatar.cc/100?img=4'},
  { title: 'Stable Equipment Upgrade', description: 'Custom stable gear solutions.', image: 'https://i.pravatar.cc/100?img=5'},
  { title: 'Personalized Riding Gear', description: 'Tailor-made gear for riders.', image: 'https://i.pravatar.cc/100?img=6'}
];

export default function PreviousWorks() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Previous Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previousWorks.map((work, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
              <div className="relative w-full h-48 mb-4">
                <Image src={placeholder} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-300">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
