"use client";

import styles from "./page.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <h1>CONTATO</h1>
        </div>
      </div>

      <div className={styles.slogan}>
        <h1>FALA COM</h1>
        <h1>A <span>GENTE!</span></h1>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.companyInfo}>
          <h2>SUBMUNDO 808 EVENTOS</h2>
          <p>Cola aqui pra tirar suas dúvidas, fechar parcerias ou mandar aquela ideia massa. A Submundo808 tá sempre de olho!</p>
        </div>

        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>📧</div>
            <h3>EMAIL</h3>
            <a href="mailto:contato@submundo808.com">contato@submundo808.com</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>📱</div>
            <h3>TELEFONE</h3>
            <a href="tel:+5511999999999">+55 11 99999-9999</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>📷</div>
            <h3>INSTAGRAM</h3>
            <a href="https://instagram.com/submundo808" target="_blank" rel="noopener noreferrer">@submundo808</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>💼</div>
            <h3>LINKEDIN</h3>
            <a href="https://linkedin.com/company/submundo808" target="_blank" rel="noopener noreferrer">Submundo 808</a>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>MANDA TEU RECADO</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="SEU NOME" required />
            </div>

            <div className={styles.formGroup}>
              <input type="email" placeholder="SEU EMAIL" required />
            </div>

            <div className={styles.formGroup}>
              <input type="tel" placeholder="SEU TELEFONE" />
            </div>

            <div className={styles.formGroup}>
              <textarea placeholder="SUA MENSAGEM" rows="6" required></textarea>
            </div>

            <button type="submit">ENVIAR MENSAGEM</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}