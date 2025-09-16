import styles from "./page.module.css";
import Header from "../components/Header/Header"
import Cards from "../components/Cards/Card"
import CardDj from "../components/DjCard/DjCard"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
          <h1>SUBMUNDO 808</h1>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <Cards
          title="Card 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Cards
          title="Card 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          
          <Cards
          title="Card 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className={styles.slogan}>
          <h1>OS MELHORES</h1>
          <h1>EVENTOS ESTÃO <span>AQUI</span>!</h1>
        </div>

        <div className={styles.djCards}>
          <CardDj
          index="/images/mu540.jpg"
          />

          <CardDj
          index="/images/kenanekel.jpg"
          />

          <CardDj
          index="/images/gpzl.jpg"
          />
        </div>
    </div>
  );
}
