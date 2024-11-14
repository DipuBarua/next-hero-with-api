import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

// SEO 
export const metadata = {
    // title: "Posts..",
    title: {
        absolute: "Posts",
    },
    description: "posts page",
};

const PostsPage = async () => {

    const postData = await getPosts();
    console.log(postData);

    return (
        <div className=' min-h-screen items-center space-y-1'>
            <div className=' grid grid-cols-4 gap-5 border-2'>
                {
                    postData?.slice(0, 21)?.map(({ id, title, body }) => <div key={id} className=' p-2 border-2'>
                        <h1>Title: {title}</h1>
                        <h1>Description: {body}</h1>

                        <button className=' px-2 py-1 bg-gray-400 border-2 border-blue-400'><Link href={`/posts/${id}`}>See Details</Link></button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PostsPage;