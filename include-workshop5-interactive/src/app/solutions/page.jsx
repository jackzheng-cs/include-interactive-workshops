"use client";

import Link from "next/link";
import styles from "./solutions.module.scss";

export default function SolutionsHubPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Workshop 5 — Solutions</h1>
      <p className={styles.subtitle}>
        Below are the fully implemented solutions for each API practice
        exercise. Compare these with your own work to understand best practices
        and correct implementation patterns.
      </p>

      <Link href="/solutions/jokes" className={styles.card}>
        <div>
          <h2 className={styles.cardTitle}>Joke Generator Solution</h2>
          <p className={styles.cardDescription}>
            Completed try/catch + error handling
          </p>
        </div>
      </Link>

      <div className={styles.cards}>
        <Link href="/solutions/pokemon" className={styles.card}>
          <div>
            <h2 className={styles.cardTitle}>Pokémon Fetcher Solution</h2>
            <p className={styles.cardDescription}>
              Completed GET request using async/await
            </p>
          </div>
        </Link>

        <Link href="/solutions/shows" className={styles.card}>
          <div>
            <h2 className={styles.cardTitle}>TV Show Search Solution</h2>
            <p className={styles.cardDescription}>
              Completed query parameter implementation (?q=…)
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
