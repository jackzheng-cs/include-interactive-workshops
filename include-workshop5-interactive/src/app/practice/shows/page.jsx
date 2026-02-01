"use client";

import { useState } from "react";
import styles from "./shows.module.scss";

/**
 * PRACTICE: TV Show Search
 * ---------------------------------------
 * Your goal:
 *  - Read the user's search text
 *  - Build a dynamic URL with ?q=<query>
 *  - Fetch TV show results
 *  - Display the show names
 *
 * API:
 *  https://api.tvmaze.com/search/shows?q=<QUERY>
 */

export default function ShowsPracticePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function searchShows() {
    /**
     * TODO:
     * 1. Build a URL:
     *      `https://api.tvmaze.com/search/shows?q=${query}`
     *
     * 2. Fetch the data with fetch()
     *
     * 3. Convert to JSON (array)
     *
     * 4. Save with setResults(data)
     */
    // Write your code below 👇
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>📺 TV Show Search (Practice)</h1>

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            placeholder="Search shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className={styles.button} onClick={searchShows}>
            Search
          </button>
        </div>

        <div className={styles.results}>
          {results.map((item, idx) => (
            <p key={idx} className={styles.show}>
              {item.show.name}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
