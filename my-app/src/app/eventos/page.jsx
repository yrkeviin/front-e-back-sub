"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";

export default function EventosPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [eventos, setEventos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('todos');

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await fetch(`${apiUrl}/eventos`);
                if (!response.ok) throw new Error("Erro ao buscar eventos");
                const data = await response.json();
                setEventos(data);
            } catch (err) {
                setEventos([]);
            }
        };
        fetchEventos();
    }, [apiUrl]);

    const categories = ['todos', 'próximos', 'passados', 'destaque'];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className={styles.container}>
            <Header />
            
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <h1>EVENTOS</h1>
                    <h3>Onde o funk encontra sua essência</h3>
                </div>
            </div>

            <div className={styles.featuredSection}>
                <div className={styles.sectionTitle}>
                    <h2>EM DESTAQUE</h2>
                    <span>Os eventos que não podem faltar</span>
                </div>
                
                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="https://f.i.uol.com.br/fotografia/2025/08/12/1755038710689bc3f6162f0_1755038710_3x2_rt.jpg" alt="Evento em Destaque" />
                        <div className={styles.featuredOverlay}>
                            <div className={styles.featuredBadge}>PRÓXIMO EVENTO</div>
                        </div>
                    </div>
                    <div className={styles.featuredContent}>
                        <h3>SUBMUNDO 808 - EDIÇÃO ESPECIAL</h3>
                        <div className={styles.eventDetails}>
                            <div className={styles.eventDate}>
                                <span className={styles.dateNumber}>15</span>
                                <div className={styles.dateInfo}>
                                    <span>NOV</span>
                                    <span>2025</span>
                                </div>
                            </div>
                            <div className={styles.eventInfo}>
                                <p><strong>Local:</strong> Complexo Cultural - São Paulo</p>
                                <p><strong>Horário:</strong> 22h às 6h</p>
                                <p>Uma noite épica com os melhores DJs da cena funk nacional. Prepare-se para uma experiência única com sound system de alta qualidade e uma produção impecável.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.eventsSection}>
                <div className={styles.sectionTitle}>
                    <h2>TODOS OS EVENTOS</h2>
                    <span>Confira nossa agenda completa</span>
                </div>

                <div className={styles.eventosCards}>
                    {eventos.length === 0 ? (
                        <div className={styles.noEvents}>
                            <img src="/images/no-events.svg" alt="Nenhum evento" />
                            <h3>Nenhum evento encontrado</h3>
                            <p>Novos eventos serão anunciados em breve!</p>
                        </div>
                    ) : (
                        eventos.map((evento, index) => (
                            <div key={evento.id || index} className={styles.eventoCard}>
                                <div className={styles.cardImage}>
                                    <img 
                                        src={evento.image || `/images/evento-${(index % 4) + 1}.jpg`} 
                                        alt={evento.name} 
                                    />
                                    <div className={styles.cardOverlay}>
                                        <div className={styles.dateTag}>
                                            {formatDate(evento.date)}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.cardContent}>
                                    <h3>{evento.name}</h3>
                                    <div className={styles.cardDetails}>
                                        <div className={styles.cardLocation}>
                                            <span>📍</span>
                                            <span>{evento.location}</span>
                                        </div>
                                        <p className={styles.cardDescription}>
                                            {evento.description}
                                        </p>
                                    </div>
                                    
                                    <div className={styles.cardActions}>
                                        <button className={styles.infoBtn}>Mais Info</button>
                                        <button className={styles.ticketBtn}>Ingressos</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContent}>
                    <h2>NÃO PERCA NENHUM EVENTO</h2>
                    <p>Cadastre-se e receba informações sobre os próximos eventos em primeira mão!</p>
                    <div className={styles.newsletterForm}>
                        <input 
                            type="email" 
                            placeholder="Digite seu melhor e-mail"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeBtn}>CADASTRAR</button>
                    </div>
                </div>
                <div className={styles.newsletterImage}>
                    <img src="/images/newsletter-bg.jpg" alt="Newsletter" />
                </div>
            </div>

            <Footer />
        </div>
    );
}