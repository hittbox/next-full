/*
  # Root path 페이지의 적절한 형태 공부해서 수정
*/

'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  })

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
