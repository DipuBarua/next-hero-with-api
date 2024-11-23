"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log('session:', session);

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
        {
            title: "Dashboard",
            path: "/dashboard"
        },
    ]

    const handler = () => {
        router.push("/api/auth/signin")
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


                    <div className=' flex'>
                        {/* sign up  */}
                        <Link href={'/api/auth/signup'}>
                            <button className=" text-2xl text-white font-bold p-1 mx-2 bg-blue-500 border-2 border-white bg-opacity-40">SignUp</button>
                        </Link>

                        {
                            session?.status !== "authenticated" ?
                                <div>

                                    <button onClick={handler} className=" text-2xl text-white p-1 bg-green-500 border-2 border-white bg-opacity-40">LogIn</button>
                                </div>
                                :
                                <button onClick={() => signOut()} className=" text-2xl text-orange-600 p-1 border-2 border-red-600 bg-orange-50">LogOut</button>
                        }
                    </div>

                </ul>

                <div className=' border-l-4 px-2'>
                    <Image className=' rounded-full h-1/2 px-2'
                        alt={session?.data?.user?.name}
                        src={session?.data?.user?.image}
                        height={30}
                        width={50} />

                    <h1>{session?.data?.user?.name}</h1>
                    <h1>{session?.data?.user?.type}</h1>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;