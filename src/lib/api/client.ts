/*
	전역 인스턴스 생성
*/

import axios from "axios";

export const instance = axios.create({
    baseURL: "https://lxpjwcrfuqkthbnrljqy.supabase.co/functions/v1/api",
    timeout: 5000,
})