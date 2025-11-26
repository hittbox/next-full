# 🛠 프로젝트 설정 개요

## ✅ 셋팅되어있는 것

- **빌드 도구:** Next.js

- **패키지 매니저:** pnpm 10.23.0

- **스타일 관련 라이브러리:** tailwindcss v4.1

---

## 🧩 앞으로 셋팅해야 할 것

### 1. 네트워크 (API 통신)

- **axios** 기반 HTTP 클라이언트 설정

  - baseURL, timeout, 인터셉터 등 공통 설정 추가
  - 토큰 기반 인증 처리 구조 추가

- **React Query**를 사용한 서버 상태 관리

  - API 캐싱, invalidate, 로딩/에러 핸들링 표준화
  - `useQuery`, `useMutation` 기반 데이터 패칭 구조 확립

---

### 2. 상태 관리

- **전역 상태:** Zustand 또는 Redux

  - 간단한 글로벌 UI 상태 관리
  - React Query와 역할 분리 (서버 상태 vs 클라이언트 상태)

---
