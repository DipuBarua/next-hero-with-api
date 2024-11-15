import Image from 'next/image';
import React from 'react';
import { Lobster } from 'next/font/google';

//font -  lobster
const lobster = Lobster({ weight: '400', subsets: ['latin'] })

const GalleryPage = () => {
    return (
        <div className=' bg-black min-h-screen'>
            <h1 className={`${lobster.className} p-12 text-2xl text-orange-600 font-bold`}>Welcome to Our Gallery.</h1>
            <div className=' px-12 pb-12 space-y-7'>
                {
                    [1, 2, 3, 4, 5, 6]?.map(num => <Image key={num} src={`/images/img_${num}.jpg`} alt='' height={1080} width={1920}></Image>)
                }
            </div>
            {/* <Image src="/images/img1.jpg" alt="" height={1080} width={1920} /> */}
            {/* note: if we use next Image tag, image size and loading time will be reduced. */}
        </div>
    );
};

export default GalleryPage;