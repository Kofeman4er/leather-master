'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, ShieldCheck, Bike, Hammer, SprayCan, Package } from "lucide-react"; 
import { Medal, Scissors, Feather, BookImage, SquareScissors, Paperclip } from "lucide-react";



const bikeServices = [
  { title: 'Bike Repairs', description: 'Professional bike repairs, maintenance, and modifications.', icon: <Wrench size={40} /> },
  { title: 'Custom Leather Work', description: 'Handmade leather seats, saddlebags, and biker accessories.', icon: <ShieldCheck size={40} /> },
  { title: 'Plastic Gear Welding', description: 'Durable plastic welding for helmets, guards, and accessories.', icon: <Bike size={40} /> },
  { title: 'Custom Paint Jobs', description: 'Personalized bike painting with premium quality.', icon: <SprayCan size={40} /> },
  { title: 'Performance Tuning', description: 'Enhance your bike’s performance with expert tuning.', icon: <Hammer size={40} /> },
  { title: 'Bike Accessories', description: 'Custom-designed gear and accessories for bikers.', icon: <Package size={40} /> }
];

const horseServices = [
  { title: 'Custom Saddles', description: 'Comfortable, handcrafted saddles made to fit.', icon: <Medal size={40} /> },
  { title: 'Horse Blankets', description: 'Weather-resistant blankets for year-round protection.', icon: <Scissors size={40} /> },
  { title: 'Custom Tack & Bridles', description: 'Leather tack and bridles tailored to your horse.', icon: <BookImage size={40} /> },
  { title: 'Equipment Repairs', description: 'Fast repairs for saddles, reins, and riding gear.', icon: <SquareScissors size={40} /> },
  { title: 'Feather-Light Riding Gear', description: 'Lightweight, durable riding equipment.', icon: <Feather size={40} /> },
  { title: 'Custom Stirrups', description: 'Specialized stirrups for comfort and stability.', icon: <Paperclip size={40} /> }
];

export default function Services() {
  return (
    <section className="w-full py-16 bg-gray-200 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-12">
          Our Services
        </h2>

        {/* Bike Riders Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-black mb-8 text-center">
            For Bike Riders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikeServices.map((service, index) => (
              <Card
                key={index}
                className="cursor-default bg-white text-black border border-gray-300 transition-colors duration-300 hover:bg-[#EAC696] shadow-md"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="text-black flex justify-center mb-2">{service.icon}</div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">{service.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Horse Riders Section */}
        <div>
          <h3 className="text-3xl font-semibold text-black mb-8 text-center">
            For Horse Riders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {horseServices.map((service, index) => (
              <Card
                key={index}
                className="cursor-default bg-white text-black border border-gray-300 transition-colors duration-300 hover:bg-[#EAC696] shadow-md"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="text-black flex justify-center mb-2 ">{service.icon}</div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-2 text-center">{service.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
