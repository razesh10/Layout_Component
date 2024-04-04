"use client";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <button onClick={() => router.push("/dashboard")}>Go to dashboard</button>
    </main>
  );
}
