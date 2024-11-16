"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        },
    ]

    const handler = () => {
        router.push("/login")
    }

    return (
        <div className=" container mx-auto ">
            <nav className=" bg-slate-400 flex justify-between items-center px-10 py-5">
                <a className=" text-2xl font-bold text-white">Next Hero<span className=" pl-3 text-orange-500 text-3xl">API</span></a>
                <ul className=" flex justify-center items-center gap-4">

                    {links?.map(link => <Link
                        key={link.path}
                        href={link.path}
                        className={`${pathName === link.path && " text-blue-600 underline"}`}
                    >{link.title}</Link>)}


                    <button onClick={handler} className=" text-2xl text-white p-1 border-2 border-orange-400">LogIn</button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;