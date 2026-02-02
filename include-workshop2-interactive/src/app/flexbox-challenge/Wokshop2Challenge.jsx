/*
───────────────────────────────────────────────
🎉 Welcome to the Flexbox Challenge! 🎉
───────────────────────────────────────────────
Before diving in, make sure your development environment is ready.
    1) Open your terminal and navigate to the project directory
        that contains the `package.json` file.
    2) Run the following command to install all dependencies:
            npm install
    3) Once installed, start your development server:
            npm run dev
    4) Open your browser and go to:
            http://localhost:3000

This challenge is meant to be done with your partner.
Take a few minutes with your partner to:
    1) Read through every comment and instruction carefully
    2) Talk about what each section is asking for
    3) Experiment and help each other before asking for hints

Your goals:
    1) Create neccesary html/css selectors. to have your parent containers
       and children content.
    1) Arrange and align your elements using Flexbox
    2) Make the layout responsive with a media query
    3) Have fun customizing and adding your own flair!

Remember — the goal isn’t just to finish,
it’s to understand *why* things work the way they do.
So take your time, think it through, and build something cool together!

NOTE: It may help to think of the box model while doing this...

Good luck and have fun
───────────────────────────────────────────────
*/

import styles from "./page.module.scss";

export default function Workshop2Challenege() {
  const characters = [
    { name: "Akame", image: "/characters/Akame.jpg" },
    { name: "C2", image: "/characters/c2.jpg" },
    { name: "Gojo", image: "/characters/gojo.jpg" },
    { name: "Gutz", image: "/characters/gutz.jpg" },
    { name: "Mikasa", image: "/characters/mikasa.jpg" },
    { name: "Kakashi", image: "/characters/kakashi.jpg" },
    { name: "Zero Two", image: "/characters/zerotwo.jpg" },
    { name: "Lelouch", image: "/characters/lelouch.jpg" },
    { name: "Luffy", image: "/characters/luffy.jpg" },
    { name: "Hatsune Miku", image: "/characters/hatsune_miku.jpg" },
    { name: "Naruto", image: "/characters/naruto.jpg" },
    { name: "Tanjiro", image: "/characters/tanjiro.jpg" },
    { name: "Violet", image: "/characters/violet.jpg" },
    { name: "Megumi", image: "/characters/megumi.jpg" },
    { name: "Alucard", image: "/characters/alucard.jpg" },
    { name: "Kaguya", image: "/characters/kaguya.jpg" },
    { name: "Ken", image: "/characters/ken.jpg" },
    { name: "Griffith", image: "/characters/dog_water.jpg" },
    // Don't see your favorite in the list? Go grab your favorite character :3
    // Example:
    // { name: "Your Character", image: "/characters/your_image.jpg" },
  ];

  return (
    <main className={styles.container}>
      <section className={styles.instructions}>
        <h1>Workshop 2 Challenge</h1>
        <p>
          You will utilize what youve learned to practice HTML, CSS, and
          Flexbox.
        </p>

        <p>
          You will build a simple layout to rank your favorite anime characters!
          Use <code>display: flex</code>, <code>justify-content</code>, and{" "}
          <code>align-items</code>
          &nbsp;to correctly align and space your elements.
        </p>

        <p>
          <strong>Bonus:</strong> Make it responsive using a <code>@media</code>{" "}
          query so the layout adjusts on smaller screens.
        </p>

        <p>
          <strong>Bonus 2:</strong> Add your own favorite to the list and check
          out how the <code>.map()</code> function renders each character card!
        </p>
      </section>

      {/* --- Main Week 2 Challenge --- */}
      <section className={styles.ranking_container}>
        <div className={styles.title_container}>
          {/*
            TODO 0: Add a title for your challenge (e.g., “Our Flexbox Favorites”)
            TODO 1: Add your name(s) below the title
            Example:
                <h2>Our Flexbox Favorites</h2>
                <h4>By: Jasper and Jack</h4>
          */}
              <h2>Challenge Here!</h2>
        </div>

        {/*
          TODO 2: Add styling to the div below so you have two columns. 
            This will be the parent container
            for your “Favorite” and “Disliked” sections.
          Hint: This parent div will probably need `display: flex` in CSS.
        */}
        <div className={styles.characterList}>
          {/*
            TODO 3: Create your “Favorite” section here.
            - Label it clearly with a <h3> or <h4>.
            - Add a few favorite characters using <img /> tags.
            - Experiment with Flexbox to form a pyramid layout.
          */}

          <div className={styles.favorites}>

          </div>


          {/*
            TODO 4: Create your “Disliked” section here.
            - Label it clearly with a <h3> or <h4>.
            - Add a few disliked characters using <img /> tags.
            - Practice Flexbox alignment to form a *reverse pyramid*.
          */}

		    <div className={styles.dislikes}>

          </div>
        </div>
      </section>

      <section className={styles.selection}>
        <h3>All Characters</h3>
        <p>
          Below is a list of all available characters. Each one has their name
          above and their image below.
        </p>

        <div className={styles.options}>
          {characters.map((char) => (
            <div key={char.name} className={styles.characterCard}>
              <h4>{char.name}</h4>
              <img src={char.image} alt={char.name} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
