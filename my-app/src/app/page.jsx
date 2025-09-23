import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Card";
import CardDj from "../components/DjCard/DjCard";
import StatisticCard from "../components/StatisticCard/StatisticCard";
import Footer from "../components/Footer/Footer";

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

        <div className={styles.djs}>
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

          <div className={styles.djsText}>
            <h2>OS QUERIDINHOS</h2>
            <p>Os DJs mais queridos da galera!
              Ainda não conhece? Corre lá e confere os sets deles!
            </p>
          </div>
        </div>

        <div className={styles.typeMusic}>
          <div className={styles.imgMusic}>
            <img src="/images/capaG.jpg" alt="" />
          </div>

          <div className={styles.typeText}>
            <div className={styles.typeTitle}>
              <h3>TIPOS</h3>
              <h3>MUSICA</h3>
              <h3>BATIDAS</h3>
            </div>

            <h2>QUE TIPO DE MÚSICA O EVENTO ABRANGE?</h2>
            <p>A Submundo não é apenas uma festa de funk comercial; ela é um ponto de encontro e uma plataforma para a música que nasceu e prospera nos bailes de favela e comunidades urbanas. O evento celebra o funk em sua forma mais autêntica e vibrante, dando voz a artistas que traduzem a realidade da periferia em batidas e letras.</p>

            <div className={styles.typeTextImg}>
              <img className={styles.capaM} src="/images/capaM.jpg" alt="" />
              <img className={styles.capaM2} src="/images/capaM2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.slogan}>
          <h1>ESTATÍSTICAS</h1>
        </div>

        <div className={styles.statistics}>
          <StatisticCard
          number="50+"
          desc="Eventos Realizados"
          />
          <StatisticCard
          number="50K"
          desc="Pessoas"
          />
          <StatisticCard
          number="200+"
          desc="Artistas"
          />
        </div>

        <Footer />
    </div>
  );
}
