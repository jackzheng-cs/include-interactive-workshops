"use client";

import { useState } from "react";
import styles from "./shows.module.scss";

/**
 * SOLUTION — TV Show Search
 * ---------------------------------------------
 * This example demonstrates:
 *  - React controlled inputs
 *  - Building dynamic URLs using query parameters
 *  - Fetching arrays from APIs
 *  - Rendering lists using map()
 */

export default function ShowsSolutionPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function searchShows() {
    try {
      // 1️⃣ Build the API URL using the user's search text
      const url = `https://api.tvmaze.com/search/shows?q=${query}`;

      // 2️⃣ Fetch the array of results
      const response = await fetch(url);
      if (!response.ok) throw new Error("API error");

      // 3️⃣ Convert to JSON
      const data = await response.json();

      // 4️⃣ Save to state
      setResults(data);
    } catch (err) {
      console.error("Failed to fetch show results:", err);
      setResults([]);
    }
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>TV Show Search — Solution</h1>

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            placeholder="Search TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className={styles.button} onClick={searchShows}>
            Search
          </button>
        </div>

        <div className={styles.results}>
          {results.map((item, index) => (
            <p key={index} className={styles.show}>
              {item.show.name}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
