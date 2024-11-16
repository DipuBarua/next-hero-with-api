import React from 'react';

const getTime = async () => {
    // const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
    //in every click, will get update.
    const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } });//after every 5sec, will get update
    const data = await res.json();
    return data.currentTime;
}
const AboutPage = async () => {
    const localTime = await getTime();
    return (
        <div className=' min-h-screen'>
            <p>about page.....</p>
            <h1 className=' py-5 text-2xl text-red-400 font-black'>Local Time: {localTime}</h1>
        </div>
    );
};

export default AboutPage;