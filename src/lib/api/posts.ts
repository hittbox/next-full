/*
	게시물 불러오는 간단한 API 호출 함수
*/

import { instance } from "./client";
import { type Post } from "./types"

export const getPosts = async (): Promise<Post[]> => {
    const res = await instance.get<Post[]>("/posts");
    return res.data;
}