import {Await, NavLink, useAsyncValue, useLoaderData} from "react-router-dom";
import Spinner from "../components/Spinner";
import {Suspense} from "react";

export default function Blogs() {
    const {posts} = useLoaderData();
    console.log(posts);
    return (
        <>
            <h1>Blog Articles</h1>
            <Suspense fallback={<Spinner/>}>
                <Await resolve={posts}>
                    <PostsList/>
                </Await>
            </Suspense>
        </>
    )
}

function PostsList() {
    const posts = useAsyncValue()
    return <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={post.id}>{post.title}</NavLink>
            </li>
        ))}
    </ul>
}