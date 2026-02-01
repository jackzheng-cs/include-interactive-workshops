"use client";

import { useState } from "react";
import styles from "./pokemon.module.scss";

/**
 * PRACTICE: Pokémon Fetcher
 * ---------------------------------------
 * Your goal:
 *  - Generate a random ID between 1–151
 *  - Fetch Pokémon data using fetch()
 *  - Convert response to JSON
 *  - Update state with the result
 *
 * API:
 *  https://pokeapi.co/api/v2/pokemon/{id}
 */

export default function PokemonPracticePage() {
  const [pokemon, setPokemon] = useState(null);

  async function fetchPokemon() {
    /**
     * TODO:
     * 1. Create a random Pokémon ID: 1–151
     *    Example:
     *      const id = Math.floor(Math.random() * 151) + 1;
     *
     * 2. Fetch Pokémon data:
     *      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
     *
     * 3. Convert response to JSON:
     *      const data = await response.json();
     *
     * 4. Save using setPokemon(data)
     */
    // Write your code below 👇
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.page}>
        <h1 className={styles.header}>🎯 Pokémon Fetcher (Practice)</h1>

        <button className={styles.button} onClick={fetchPokemon}>
          Get Random Pokémon
        </button>

        {pokemon && (
          <div className={styles.card}>
            <h2>{pokemon.name}</h2>
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
