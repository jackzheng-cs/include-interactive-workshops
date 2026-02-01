"use client";

import { useState } from "react";
import styles from "./jokes.module.scss";

/**
 * PRACTICE: Joke Generator
 * ---------------------------------------
 * Your goal:
 *  - Use try/catch for safe fetch logic
 *  - Fetch random jokes from the Joke API
 *  - Handle failed requests with an error message
 *
 * API:
 *  https://official-joke-api.appspot.com/random_joke
 */

export default function JokesPracticePage() {
  const [rawData, setRawData] = useState(null);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");

  async function fetchJoke() {
    /**
     * TODO:
     * 1. Wrap everything in try/catch
     *
     * 2. Fetch the API:
     *      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
     *
     * 3. If response.ok is false → throw an error
     *
     * 4. Convert JSON:
     *      const data = await res.json();
     *
     * 5. Save raw data:
     * 		setRawData(data);
     *
     * 6. Format the joke:
     *      setJoke(`${data.setup} — ${data.punchline}`)
     *
     * 7. On failure: setError("Failed to load joke 😭")
     */
    // Write your code below 👇
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>😂 Joke Generator (Practice)</h1>

        <button className={styles.button} onClick={fetchJoke}>
          Get Joke
        </button>

        {rawData && (
          <pre className={styles.json}>{JSON.stringify(rawData, null, 2)}</pre>
        )}

        {!!joke && !error && <p className={styles.joke}>{joke}</p>}
        {!!error && <p className={styles.error}>{error}</p>}
      </section>
    </main>
  );
}
