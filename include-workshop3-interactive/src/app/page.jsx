import styles from "./page.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <h1>Welcome to the Workshop 3 Activity!</h1>

      <section className={styles.lesson}>
        <div className={styles.topic}>
          <h2>What we&apos;re going over:</h2>
          <ul>
            <li>
              Use <code>.map()</code> to loop through each element in an array.
            </li>
            <li>
              Use <code>.filter()</code> to create a new array containing
              specific elements only.
            </li>
            <li>Importing data from another file.</li>
          </ul>
        </div>

        <div className={styles.buttonGroup}>
          <Link href="/basics">
            <button className={styles.backButton}>Go to Basics</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
