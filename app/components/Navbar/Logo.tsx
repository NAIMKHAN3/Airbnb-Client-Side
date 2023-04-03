'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <Image
                src='/images/logo.png'
                className='hidden md:block cursor-pointer'
                alt='logo'
                height='100'
                width='100'

            />
        </div>
    );
};

export default Logo;