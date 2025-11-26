/*
  # Root path 페이지의 적절한 형태 공부해서 수정
*/

"use client";

import { useEffect, useState } from "react";
import { getPosts, type Post } from "@/lib/api/posts";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (e) {
        setError("게시물을 불러오는 데 실패했습니다.");
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="flex flex-col w-full h-screen justify-start items-center">
      <h1 className="text-3xl font-semibold mt-10">Posts</h1>
      <div className="flex flex-col gap-3 px-5 mt-10">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-md p-3">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
