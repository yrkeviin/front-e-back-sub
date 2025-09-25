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
          title="O BAILE É DE VERDADE"
          text="Aqui o bagulho é louco e sem neurose. Esquece área VIP, camarote e fitinha. Na Submundo808, o rolê é pra todo mundo, na mesma sintonia. É o funk pulsando na caixa, a galera no passinho e o DJ mandando a braba no meio da pista. Pode vir que é sucesso!"
          />

          <Cards
          title="RESPEITA, 808!"
          text="Cansado de rolê que não representa? A Submundo808 chegou pra fortalecer a cultura da favela e botar o grave pra tremer. É mais que uma festa, é um movimento. Aqui, a gente celebra o som que vem da rua e a arte dos nossos DJs. Chega junto pra fazer parte dessa família."
          />
          
          <Cards
          title="SÓ VEM!"
          text="A regra é clara: se joga na pista e deixa o corpo falar. No nosso baile, o grave bate forte, a energia explode e a noite é pequena pra tanto hit. Cola com a gente pra curtir o verdadeiro pancadão, onde a única preocupação é mandar o passinho até o sol raiar. Partiu?"
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
