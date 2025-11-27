/*
	전역 인스턴스 생성
*/

import axios from "axios";

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})