import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.landing}>
      <h1 className={styles.title}>Workshop #4 — Color Picker Code-Along</h1>
      <p className={styles.subtitle}>
        Welcome! Choose what you’d like to explore:
      </p>

      <div className={styles.buttons}>
        <Link
          href="/colorpicker"
          className={`${styles.button} ${styles.primary}`}
        >
          Start the Code-Along
        </Link>
        <Link
          href="/colorpicker/solution"
          className={`${styles.button} ${styles.success}`}
        >
          View the Solution
        </Link>
      </div>

      <p className={styles.note}>
        The Code-Along page contains starter comments for you to fill in, while
        the Solution page shows the final working version.
      </p>
    </main>
  );
}
