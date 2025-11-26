import { instance } from "./client";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getPosts = async () => {
    const res = await instance.get<Post[]>("/posts");
    return res.data;
}