"use client";

import { useState } from "react";
import styles from "./jokes.module.scss";

/**
 * SOLUTION — Joke Generator
 * ---------------------------------------------
 * This example demonstrates:
 *  - Using try/catch for safer API calls
 *  - Checking for .ok on fetch responses
 *  - Formatting returned JSON data
 *  - Showing error messages in React
 */

export default function JokesSolutionPage() {
  const [rawData, setRawData] = useState(null);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");

  async function fetchJoke() {
    try {
      setError(""); // reset error

      // 1️⃣ Fetch the random joke
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      // 2️⃣ Check for failed request
      if (!response.ok) {
        throw new Error("API returned an error");
      }

      // 3️⃣ Convert the JSON data
      const data = await response.json();

      // 4️⃣ Save raw JSON
      setRawData(data);

      // 5️⃣ Format the joke and store it
      setJoke(`${data.setup} – ${data.punchline}`);
    } catch (err) {
      console.error("Error fetching joke:", err);
      setError("Failed to load joke 😭");
    }
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>Joke Generator — Solution</h1>

        <button className={styles.button} onClick={fetchJoke}>
          Get a Joke
        </button>

        {rawData && (
          <pre className={styles.json}>{JSON.stringify(rawData, null, 2)}</pre>
        )}

        {joke && !error && <p className={styles.joke}>{joke}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </section>
    </main>
  );
}
