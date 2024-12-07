import PostList from "@/components/postList";
import { Suspense } from "react";

 

export default async function Home() {
  // Fetch posts data 


  // Render the list of posts
  return (
    <main className="px-5 pt-32 text-center">
      <h1 className="text-4xl md:text-5xl mb-5 font-bold">All Posts</h1>
      <Suspense fallback="Loading......">
 <PostList />
 </Suspense>
    </main>
  );
}
