"use client";

import styles from "./page.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Workshop 5 — API Practice Portal</h1>

      <p className={styles.subtitle}>
        A clean place to practice async/await, fetch, error handling,
        and query parameters.
      </p>

      <div className={styles.cards}>
        <Link href="/practice" className={styles.card}>
          <h2 className={styles.cardTitle}>Practice Exercises</h2>
          <p className={styles.cardDescription}>
            Hands-on TODO-driven API challenges.
          </p>
        </Link>

        <Link href="/solutions" className={styles.card}>
          <h2 className={styles.cardTitle}>Solution Library</h2>
          <p className={styles.cardDescription}>
            Final commented implementations.
          </p>
        </Link>
      </div>
    </main>
  );
}
