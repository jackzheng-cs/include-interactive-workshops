import styles from "./page.module.scss";
import { team } from "../../data/pokemonData";
import Link from "next/link";

export default function SolutionPage() {
  const fireTeam = team.filter((pokemon) => pokemon.type === "Fire");
  const generation1 = team.filter((pokemon) => pokemon.generation === 1);

  return (
    <main className={styles.container}>
      <h1>Solution</h1>

      <section className={styles.section}>
        <h2>.Map Method</h2>

        <div className={styles.pokemonCards}>
          {team.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
              <h3>{pokemon.name}</h3>
              <p>Type: {pokemon.type}</p>
              <p>Generation: {pokemon.generation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>.Filter Method</h2>

        <div className={styles.pokemonCards}>
          {/* {fireTeam.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
              <h3>{pokemon.name}</h3>
              <p>Type: {pokemon.type}</p>
            </div>
          ))} */}

          {generation1.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
              <h3>{pokemon.name}</h3>
              <p>Generation: {pokemon.generation}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.buttonGroup}>
        <Link href="/pokemonTeam">
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
    </main>
  );
}
