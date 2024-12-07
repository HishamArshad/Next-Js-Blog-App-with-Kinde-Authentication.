import prisma from '@/lib/db';
import Link from 'next/link';
import React from 'react'

const PostList = async  () => {
  const posts = await prisma.post.findMany()
  return (
    <ul className="space-y-4">
    {posts.map((post) => (
      <li key={post.id} className="text-lg text-blue-600 hover:underline">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ))}
  </ul>
  )
}

export default PostList