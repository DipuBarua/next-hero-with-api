import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const getTime = async () => {
    //in every click, will get update.
    const res = await fetch("http://localhost:3000/time", { cache: "no-store" });

    //after every 5sec, will get update
    // const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } });

    const data = await res.json();
    return data.currentTime;
}


const AboutPage = async () => {
    const session = await getServerSession(authOptions)//we can only use session hook in client side. In server side we have to use-- getServerSession(auth).   
    console.log([session]);

    const localTime = await getTime();
    return (
        <div className=' min-h-screen'>
            <p>about page.....</p>
            <h1 className=' py-5 text-2xl text-red-400 font-black'>Local Time: {localTime}</h1>
        </div>
    );
};

export default AboutPage;