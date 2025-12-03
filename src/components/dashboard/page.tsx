'use client';

import { useEffect, useState } from "react";
import PostPreviewSection from "./post-preview/PostPreviewSection";
import { getPosts } from "../../lib/api/posts";
import type { Post } from "../../lib/api/types";

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function loadPosts() {
    try {
      setLoading(true);
      setError(null);

      const data = await getPosts(); // category 없이 전체 조회
      setPosts(data);
    } catch (err: any) {
      console.error(err);
      setError("게시글을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header */}
      <div className="text-center px-12 py-4 bg-white shadow rounded-3xl font-bold text-4xl">
        Dashboard
      </div>

      <div className="h-10" />

      <div className="w-[25%] min-w-[360px]">
        {/* Loading State */}
        {loading && (
          <div className="w-full py-6 text-center text-gray-500">
            불러오는 중...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="w-full py-6 text-center text-red-500">
            {error}
          </div>
        )}

        {/* Posts */}
        {!loading && !error && (
          <PostPreviewSection posts={posts} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
