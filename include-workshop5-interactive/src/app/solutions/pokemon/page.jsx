"use client";

import { useState } from "react";
import styles from "./pokemon.module.scss";

/**
 * SOLUTION — Pokémon Fetcher
 * ---------------------------------------------
 * This example demonstrates:
 *  - Generating a random number
 *  - Forming API URLs dynamically
 *  - Using async/await with fetch()
 *  - Parsing JSON responses
 *  - Updating React state
 */

export default function PokemonFetcherSolution() {
  const [pokemon, setPokemon] = useState(null);

  async function fetchPokemon() {
    try {
      // 1️⃣ Generate a random Pokémon ID between 1 and 151
      const id = Math.floor(Math.random() * 151) + 1;

      // 2️⃣ Fetch Pokémon data from the API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      // 3️⃣ Check if request failed
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
      }

      // 4️⃣ Convert the response to usable JSON
      const data = await response.json();

      // 5️⃣ Update state with our new Pokémon
      setPokemon(data);
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
      setPokemon(null);
    }
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>Pokémon Fetcher — Solution</h1>

        <button className={styles.button} onClick={fetchPokemon}>
          Fetch a Random Pokémon
        </button>

        {pokemon && (
          <div className={styles.card}>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className={styles.image}
            />
          </div>
        )}
      </section>
    </main>
  );
}
