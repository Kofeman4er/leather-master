'use client';

import React from 'react'
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Logo from './assets/img/logoipsum.svg';

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='text-center text-white'>
                <Image
                    src={Logo}
                    alt=""
                    width={50}
                    height={50}
                    className="w-36 mx-auto mb-2 text-white"
                />

                <div className='w-max flex items-center gap-2 mx-auto text-white'>
                    <Mail alt='' className='w-6  color="white' />
                    test@test.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-white'>
                <p>© 2025 Bike&Horse. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 text-white'>
                    <li><a target="_blank" href="">Instagram</a></li>
                    <li><a target="_blank" href="">Telegram</a></li>
                    <li><a target="_blank" href="">Twitter</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer