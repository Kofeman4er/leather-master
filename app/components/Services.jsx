'use client';

import { Hammer, ShieldCheck, Bike, Wrench, Scissors, Package } from 'lucide-react';

const services = [
  {
    title: 'Custom Leatherwork (Horse Gear)',
    description: 'Handcrafted saddles, bridles, and gear built for durability and comfort.',
    icon: ShieldCheck
  },
  {
    title: 'Biker Equipment',
    description: 'Leather jackets, saddlebags, and bike accessories tailored for riders.',
    icon: Bike
  },
  {
    title: 'Plastic Welding',
    description: 'Precise and durable welding repairs for plastic gear, accessories, and panels.',
    icon: Hammer
  },
  {
    title: 'Textile Manufacturing',
    description: 'Custom textile products including covers, gear, and horse blankets.',
    icon: Scissors
  },
  {
    title: 'Gear Repairs',
    description: 'Restoration and strengthening of damaged leather, textile, or plastic components.',
    icon: Wrench
  },
  {
    title: 'Packaging & Prototyping',
    description: 'Small-batch custom packaging and material testing services.',
    icon: Package
  }
];

export default function Services() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-500 hover:text-black transition">
              <div className="flex items-center justify-center mb-4">
                <service.icon size={40} className="text-orange-400 " />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-md">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
