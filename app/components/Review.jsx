'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"

const reviews = [
    { name: 'John Doe', comment: 'Amazing craftsmanship! My custom saddle is perfect.', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Jane Smith', comment: 'Top-notch leatherwork. Highly recommend!', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Mike Johnson', comment: 'Great bike repair service. My ride feels brand new!', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Emily Davis', comment: 'Beautiful custom gear for my horse. Excellent quality!', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Chris Wilson', comment: 'Fast and reliable service. Will come back again!', image: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Samantha Lee', comment: 'Incredible attention to detail. Love my custom jacket!', image: 'https://i.pravatar.cc/100?img=6' }
];


export default function Reviews() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        
            <Carousel
                id='reviews'
                plugins={[plugin.current]}
                className="flex justify-center bg-gray-900 w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-1 flex w-full">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="flex-shrink-0 bg-gray-900 p-6 rounded-lg w-full pl-1 md:basis-1/2 lg:basis-1/3">
                                <Card className="p-1 w-full h-l">
                                    <CardContent className="flex items-center gap-4 mb-4 w-full">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full select-none"
                                        />
                                        <h3 className="ml-1 text-lg font-semibold select-none">{review.name}</h3>
                                    </CardContent>
                                    <p className="ml-1 select-none text-md text-black-300 flex justify-center">"{review.comment}"</p>
                                </Card>   
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
        


    )
}