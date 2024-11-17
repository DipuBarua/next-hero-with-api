import { redirect } from "next/navigation";

export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    //** Redirect is used to remove one page to another page automatically after being successful user's request. ex: after logIn, reditect users to home page. */
    // if (data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}
