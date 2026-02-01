"use client";

import Link from "next/link";
import styles from "./practice.module.scss";

export default function PracticeHubPage() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.title}>Workshop 5 — Practice Exercises</h1>
        <p className={styles.subtitle}>
          Choose a topic below to practice a specific API concept. Each exercise
          has its own dedicated page with instructions and TODO areas.
        </p>

        <div className={styles.cards}>
          <Link href="/practice/jokes" className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>Joke Generator</h2>
              <p className={styles.cardDescription}>
                Practice try/catch + error handling
              </p>
            </div>
          </Link>

          <Link href="/practice/pokemon" className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>Pokémon Fetcher</h2>
              <p className={styles.cardDescription}>
                Practice GET requests + async/await
              </p>
            </div>
          </Link>

          <Link href="/practice/shows" className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>TV Show Search</h2>
              <p className={styles.cardDescription}>
                Practice query parameters (?q=…)
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
