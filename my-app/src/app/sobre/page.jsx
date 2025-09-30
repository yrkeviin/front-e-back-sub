"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";

export default function SobreKevinPage() {
    const [activeSection, setActiveSection] = useState('intro');
    const [typedText, setTypedText] = useState('');
    const [currentSkill, setCurrentSkill] = useState(0);

    const fullText = "Kevin Lima";

    const skills = [
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'Node.js', level: 75, icon: '🚀' },
        { name: 'Html', level: 70, icon: '👨🏾‍💻' },
        { name: 'Database', level: 65, icon: '🗄️' },
        { name: 'CSS', level: 78, icon: '🎨' }
    ];

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.heroContainer}>
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.profileImage}>
                            <img src="https://avatars.githubusercontent.com/u/158209483?v=4" alt="Kevin Lima" />
                            <div className={styles.statusDot}></div>
                        </div>
                        <div className={styles.heroText}>
                            <h1 className={styles.typedText}>{typedText}<span className={styles.cursor}>|</span></h1>
                            <p className={styles.tagline}>Criativo • Desenvolvedor • Curioso</p>
                            <div className={styles.heroStats}>
                                <div className={styles.stat}>
                                    <span className={styles.number}>17</span>
                                    <span className={styles.label}>anos</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.number}>2+</span>
                                    <span className={styles.label}>anos codando</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.number}>∞</span>
                                    <span className={styles.label}>festas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.scrollIndicator}>
                        <span>Role para saber mais</span>
                        <div className={styles.arrow}>↓</div>
                    </div>
                </div>
            </div>

            <div className={styles.navContainer}>
                <nav className={styles.sectionNav}>
                    {[
                        { id: 'intro', label: 'Quem Sou', icon: '👨‍💻' },
                        { id: 'skills', label: 'Skills', icon: '⚡' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            className={`${styles.navBtn} ${activeSection === item.id ? styles.active : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <span className={styles.navIcon}>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className={styles.mainContent}>

                {activeSection === 'intro' && (
                    <div className={styles.introSection}>
                        <div className={styles.introCard}>
                            <div className={styles.cardContent}>
                                <h2>OLÁ, EU SOU O <span>KEVIN!</span></h2>
                                <p>
                                    Tenho 17 anos e sou estudante de Desenvolvimento de Sistemas no SENAI Valinhos. 
                                    Sou apaixonado por tecnologia e adoro criar soluções que fazem a diferença!
                                </p>
                                <p>
                                    Quando não estou codando, você me encontra nas melhores festas da região. 
                                    Acredito que a vida é sobre equilibrar trabalho e diversão - e eu faço isso muito bem! 🎉
                                </p>
                                <div className={styles.highlights}>
                                    <div className={styles.highlight}>
                                        <span className={styles.icon}>🎓</span>
                                        <div>
                                            <strong>SENAI Valinhos</strong>
                                            <p>Desenvolvimento de Sistemas</p>
                                        </div>
                                    </div>
                                    <div className={styles.highlight}>
                                        <span className={styles.icon}>📍</span>
                                        <div>
                                            <strong>Valinhos, SP</strong>
                                            <p>Brasil</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardImage}>
                                <img src="/images/kevinProgramando.png" alt="Kevin programando" />
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'skills' && (
                    <div className={styles.skillsSection}>
                        <h2>MINHAS <span>HABILIDADES</span></h2>
                        <p className={styles.skillsIntro}>
                            Sempre aprendendo e evoluindo no mundo da tecnologia!
                        </p>
                        
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <div 
                                    key={skill.name} 
                                    className={`${styles.skillCard} ${index === currentSkill ? styles.highlighted : ''}`}
                                >
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        <h3>{skill.name}</h3>
                                    </div>
                                    <div className={styles.skillBar}>
                                        <div 
                                            className={styles.skillFill}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className={styles.skillPercent}>{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
}