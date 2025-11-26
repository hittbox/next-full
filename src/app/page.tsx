/*
  # Root path 페이지의 적절한 형태 공부해서 수정
*/

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="text-3xl font-bold underline">Hello World!</div>
    </div>
  );
}
