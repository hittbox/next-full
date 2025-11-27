/*
	게시물 불러오는 간단한 API 호출 함수
*/

import { instance } from "./client";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    const res = await instance.get<Post[]>("/posts");
    return res.data;
}