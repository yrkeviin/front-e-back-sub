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
    const sections = ['intro', 'skills', 'hobby', 'projetos'];

    const skills = [
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'Node.js', level: 75, icon: '🚀' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'Database', level: 65, icon: '🗄️' },
        { name: 'UI/UX', level: 78, icon: '🎨' }
    ];

    const hobbies = [
        { 
            title: 'Festas & Eventos',
            description: 'Adoro a energia das festas! Sempre conectado com a cena musical e os melhores eventos.',
            icon: '🎉',
            image: '/images/kevin-festa.jpg'
        },
        { 
            title: 'Tecnologia',
            description: 'Passionate about coding and creating digital solutions that make a difference.',
            icon: '💻',
            image: '/images/kevin-code.jpg'
        },
        { 
            title: 'Música',
            description: 'Do funk ao eletrônico, música é vida! Sempre descobrindo novos sons e artistas.',
            icon: '🎵',
            image: '/images/kevin-music.jpg'
        }
    ];

    const projects = [
        {
            name: 'Submundo 808 Website',
            tech: 'Next.js, React, CSS',
            description: 'Plataforma completa para eventos de funk com sistema de ingressos.',
            status: 'Em Desenvolvimento',
            image: '/images/projeto-submundo.jpg'
        },
        {
            name: 'Party Finder App',
            tech: 'React Native, Firebase',
            description: 'App para descobrir as melhores festas da sua região.',
            status: 'Planejamento',
            image: '/images/projeto-party.jpg'
        },
        {
            name: 'Beat Generator',
            tech: 'Python, TensorFlow',
            description: 'IA que cria beats de funk personalizados.',
            status: 'Conceito',
            image: '/images/projeto-beats.jpg'
        }
    ];

    // Efeito de digitação
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

    // Animação das skills
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            
            {/* Hero Section */}
            <div className={styles.heroContainer}>
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.profileImage}>
                            <img src="https://avatars.githubusercontent.com/u/158209483?v=4" alt="Kevin Lima" />
                            <div className={styles.statusDot}></div>
                        </div>
                        <div className={styles.heroText}>
                            <h1 className={styles.typedText}>{typedText}<span className={styles.cursor}>|</span></h1>
                            <p className={styles.tagline}>Desenvolvedor • Festeiro • Inovador</p>
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

            {/* Navegação */}
            <div className={styles.navContainer}>
                <nav className={styles.sectionNav}>
                    {[
                        { id: 'intro', label: 'Quem Sou', icon: '👨‍💻' },
                        { id: 'skills', label: 'Skills', icon: '⚡' },
                        { id: 'hobby', label: 'Paixões', icon: '🎉' },
                        { id: 'projetos', label: 'Projetos', icon: '🚀' }
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

            {/* Conteúdo Principal */}
            <div className={styles.mainContent}>

                {/* Introdução */}
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
                                <img src="/images/kevin-coding.jpg" alt="Kevin programando" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Skills */}
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

                        <div className={styles.techStack}>
                            <h3>Tech Stack Favorita</h3>
                            <div className={styles.techLogos}>
                                <div className={styles.techLogo}>React</div>
                                <div className={styles.techLogo}>Next.js</div>
                                <div className={styles.techLogo}>Node.js</div>
                                <div className={styles.techLogo}>Python</div>
                                <div className={styles.techLogo}>MongoDB</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Hobbies/Paixões */}
                {activeSection === 'hobby' && (
                    <div className={styles.hobbySection}>
                        <h2>MINHAS <span>PAIXÕES</span></h2>
                        <p className={styles.hobbyIntro}>
                            Além do código, tenho outras paixões que me movem!
                        </p>
                        
                        <div className={styles.hobbiesGrid}>
                            {hobbies.map((hobby, index) => (
                                <div key={index} className={styles.hobbyCard}>
                                    <div className={styles.hobbyImage}>
                                        <img src={hobby.image} alt={hobby.title} />
                                        <div className={styles.hobbyOverlay}>
                                            <span className={styles.hobbyIcon}>{hobby.icon}</span>
                                        </div>
                                    </div>
                                    <div className={styles.hobbyContent}>
                                        <h3>{hobby.title}</h3>
                                        <p>{hobby.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.partyVibes}>
                            <h3>VIBE DAS FESTAS 🎵</h3>
                            <div className={styles.musicGenres}>
                                <span className={styles.genre}>Funk</span>
                                <span className={styles.genre}>Electronic</span>
                                <span className={styles.genre}>Hip Hop</span>
                                <span className={styles.genre}>Pop</span>
                                <span className={styles.genre}>Sertanejo</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Projetos */}
                {activeSection === 'projetos' && (
                    <div className={styles.projectsSection}>
                        <h2>MEUS <span>PROJETOS</span></h2>
                        <p className={styles.projectsIntro}>
                            Transformando ideias em realidade através do código!
                        </p>
                        
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <div className={styles.projectImage}>
                                        <img src={project.image} alt={project.name} />
                                        <div className={styles.projectStatus}>
                                            {project.status}
                                        </div>
                                    </div>
                                    <div className={styles.projectContent}>
                                        <h3>{project.name}</h3>
                                        <div className={styles.projectTech}>{project.tech}</div>
                                        <p>{project.description}</p>
                                        <div className={styles.projectActions}>
                                            <button className={styles.viewBtn}>Ver Mais</button>
                                            <button className={styles.codeBtn}>Código</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Call to Action */}
            <div className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>VAMOS CONVERSAR?</h2>
                    <p>Sempre aberto para novas oportunidades, projetos interessantes ou apenas um papo sobre tecnologia e festas!</p>
                    <div className={styles.ctaButtons}>
                        <a href="mailto:kevin@email.com" className={styles.ctaBtn}>
                            📧 Email
                        </a>
                        <a href="#" className={styles.ctaBtn}>
                            💼 LinkedIn
                        </a>
                        <a href="#" className={styles.ctaBtn}>
                            📱 Instagram
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}