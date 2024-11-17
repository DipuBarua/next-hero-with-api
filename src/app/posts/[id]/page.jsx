import React from 'react';


// SEO - Dynamic 
export const generateMetadata = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: {
            absolute: `${postData.title}`,
        },
        description: postData.body,
        keywords: postData.body.split(' '),
    };
}
//note: in dynamic metadata seo function name(by default) will be: generateMetadata()

const getDetailsPost = async (Id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${Id}`);
    const data = await res.json();
    return data;
}

const PostDetailsPage = async ({ params }) => {
    console.log(params.id);
    const { title, body } = await getDetailsPost(params.id)
    return (
        <div className=' text-xl p-2 bg-slate-300 space-y-2'>
            post details of: {params.id}
            <h2 className=' text-green-500 font-bold'>Title: {title}</h2>
            <h2>Description: {body}</h2>
        </div>
    );
};

export default PostDetailsPage;