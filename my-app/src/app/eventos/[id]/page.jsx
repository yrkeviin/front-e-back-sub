"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styles from "./page.module.css";

export default function EventoDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const [evento, setEvento] = useState(null);
    const [artistas, setArtistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Buscar evento e artistas em paralelo
                const [eventoResponse, artistasResponse] = await Promise.all([
                    fetch(`${apiUrl}/eventos/${id}`),
                    fetch(`${apiUrl}/artistas`)
                ]);
                
                if (!eventoResponse.ok) {
                    throw new Error("Evento não encontrado");
                }
                
                const eventoData = await eventoResponse.json();
                const artistasData = artistasResponse.ok ? await artistasResponse.json() : [];
                
                console.log("Evento carregado:", eventoData);
                console.log("Artistas carregados:", artistasData);
                
                setEvento({
                    ...eventoData,
                    price: "R$ 40,00",
                    capacity: 2000,
                    category: eventoData.genre || "Evento",
                    startTime: "22:00",
                    endTime: "06:00",
                    ageRating: "18+",
                    features: ["Sound System Premium", "Open Bar até 2h", "Área VIP", "Estacionamento Grátis"]
                });
                setArtistas(artistasData);
                
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
                setError(err.message);
                
                // Fallback com dados mock
                setEvento({
                    id: id,
                    name: "SUBMUNDO 808 - EDIÇÃO ESPECIAL",
                    date: "2025-11-15T22:00:00Z",
                    location: "Complexo Cultural - São Paulo",
                    description: "Uma noite épica com os melhores DJs da cena funk nacional. Prepare-se para uma experiência única com sound system de alta qualidade e uma produção impecável que vai balançar a noite toda.",
                    photo: "https://f.i.uol.com.br/fotografia/2025/08/12/1755038710689bc3f6162f0_1755038710_3x2_rt.jpg",
                    price: "R$ 40,00",
                    capacity: 2000,
                    category: "Funk",
                    startTime: "22:00",
                    endTime: "06:00",
                    ageRating: "18+",
                    features: ["Sound System Premium", "Open Bar até 2h", "Área VIP", "Estacionamento Grátis"]
                });
                setArtistas([
                    { id: 1, name: "DJ Caio Prince", genre: "Techno", photo: "https://boilerroom.tv/cdn-cgi/image/width=3150,height=1653,fit=cover,format=auto/https://videos.boilerroom.tv/assets/dj-caio-prince-clean-cjjbisutez.jpg" },
                    { id: 2, name: "DJ GBR", genre: "Funk", photo: "https://videos.boilerroom.tv/assets/dj-gbr-clean-uqrlbonprk.jpg" },
                    { id: 3, name: "MC PH", genre: "Trap", photo: "https://videos.boilerroom.tv/assets/mc-ph-clean-fdmivrerwm.jpg" }
                ]);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id, apiUrl]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleDateString('pt-BR', { month: 'short' }),
            year: date.getFullYear(),
            weekDay: date.toLocaleDateString('pt-BR', { weekday: 'long' })
        };
    };

    const formatTime = (timeString) => {
        return timeString ? timeString.slice(0, 5) : '';
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.loading}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Carregando evento...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (error && !evento) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.error}>
                    <h2>Evento não encontrado</h2>
                    <p>O evento que você está procurando não existe ou foi removido.</p>
                    <button 
                        className={styles.backBtn}
                        onClick={() => router.push('/eventos')}
                    >
                        Voltar aos Eventos
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    const dateInfo = formatDate(evento.date);

    return (
        <div className={styles.container}>
            <Header />
            
            <div className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <img src={evento.photo} alt={evento.name} />
                    <div className={styles.heroOverlay}>
                        <div className={styles.backButton}>
                            <button onClick={() => router.back()}>
                                ← Voltar
                            </button>
                        </div>
                        <div className={styles.heroContent}>
                            <div className={styles.eventBadge}>{evento.category}</div>
                            <h1>{evento.name}</h1>
                            <div className={styles.heroDetails}>
                                <span>{evento.location}</span>
                                <span>•</span>
                                <span>{dateInfo.weekDay}, {dateInfo.day} de {dateInfo.month}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contentSection}>
                <div className={styles.mainContent}>
                    <div className={styles.eventInfo}>
                        <h2>Sobre o Evento</h2>
                        <p>{evento.description}</p>
                        
                        {artistas && artistas.length > 0 && (
                            <div className={styles.artistsSection}>
                                <h3>Line-up de Artistas</h3>
                                <div className={styles.artistsList}>
                                    {artistas.map((artista) => (
                                        <div key={artista.id} className={styles.artistCard}>
                                            <div className={styles.artistImage}>
                                                <img 
                                                    src={artista.photo || '/images/default-artist.jpg'} 
                                                    alt={artista.name}
                                                    onError={(e) => {
                                                        e.target.src = '/images/default-artist.jpg';
                                                    }}
                                                />
                                                <div className={styles.artistGenre}>{artista.genre}</div>
                                            </div>
                                            <div className={styles.artistInfo}>
                                                <h4>{artista.name}</h4>
                                                {artista.bio && (
                                                    <p className={styles.artistBio}>{artista.bio}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {evento.features && evento.features.length > 0 && (
                            <div className={styles.featuresSection}>
                                <h3>O que está incluso</h3>
                                <ul className={styles.featuresList}>
                                    {evento.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.ticketCard}>
                        <div className={styles.ticketHeader}>
                            <h3>Informações do Evento</h3>
                        </div>
                        
                        <div className={styles.ticketDetails}>
                            <div className={styles.dateBox}>
                                <div className={styles.dateNumber}>{dateInfo.day}</div>
                                <div className={styles.dateText}>
                                    <span>{dateInfo.month}</span>
                                    <span>{dateInfo.year}</span>
                                </div>
                            </div>
                            
                            <div className={styles.eventDetails}>
                                <div className={styles.detail}>
                                    <span className={styles.detailIcon}>🕐</span>
                                    <div>
                                        <strong>Horário</strong>
                                        <p>{formatTime(evento.startTime)} - {formatTime(evento.endTime)}</p>
                                    </div>
                                </div>
                                
                                <div className={styles.detail}>
                                    <span className={styles.detailIcon}>📍</span>
                                    <div>
                                        <strong>Local</strong>
                                        <p>{evento.location}</p>
                                    </div>
                                </div>
                                
                                {evento.ageRating && (
                                    <div className={styles.detail}>
                                        <span className={styles.detailIcon}>🔞</span>
                                        <div>
                                            <strong>Classificação</strong>
                                            <p>{evento.ageRating}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {evento.capacity && (
                                    <div className={styles.detail}>
                                        <span className={styles.detailIcon}>👥</span>
                                        <div>
                                            <strong>Capacidade</strong>
                                            <p>{evento.capacity} pessoas</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className={styles.ticketActions}>
                            <button className={styles.shareBtn}>
                                Compartilhar
                            </button>
                        </div>
                    </div>
                    
                    <div className={styles.locationCard}>
                        <h3>Localização</h3>
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapIcon}>🗺️</div>
                            <p>Mapa do local</p>
                            <small>{evento.location}</small>
                        </div>
                        <button className={styles.directionsBtn}>
                            Como Chegar
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}