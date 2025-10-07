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
                
                const artistasFinal = artistasData.length > 0 ? artistasData : [
                    { id: 1, name: "DJ Caio Prince", genre: "Techno", bio: "DJ Caio Prince é um talento emergente no cenário techno, trazendo sons frescos e inovadores.", photo: "https://boilerroom.tv/cdn-cgi/image/width=3150,height=1653,fit=cover,format=auto/https://videos.boilerroom.tv/assets/dj-caio-prince-clean-cjjbisutez.jpg" },
                    { id: 2, name: "DJ GBR", genre: "Funk", bio: "DJ GBR é uma lenda do funk, conhecido por seus sets vibrantes e cheios de energia.", photo: "https://videos.boilerroom.tv/assets/dj-gbr-clean-uqrlbonprk.jpg" },
                    { id: 3, name: "MC PH", genre: "Trap", bio: "MC PH é um dos nomes mais quentes do trap, conhecido por suas letras afiadas e batidas contagiantes.", photo: "https://videos.boilerroom.tv/assets/mc-ph-clean-fdmivrerwm.jpg" },
                    { id: 4, name: "DJ Blakes", genre: "Bass", bio: "DJ Blakes é conhecido por suas batidas pesadas e sets energéticos que agitam qualquer pista de dança.", photo: "https://videos.boilerroom.tv/assets/dj-blakes-clean-stejnjknrd.jpg" }
                ];
                
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
                setArtistas(artistasFinal);
                
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
                setError(err.message);
                
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
                    { id: 1, name: "DJ Caio Prince", genre: "Techno", bio: "DJ Caio Prince é um talento emergente no cenário techno, trazendo sons frescos e inovadores.", photo: "https://boilerroom.tv/cdn-cgi/image/width=3150,height=1653,fit=cover,format=auto/https://videos.boilerroom.tv/assets/dj-caio-prince-clean-cjjbisutez.jpg" },
                    { id: 2, name: "DJ GBR", genre: "Funk", bio: "DJ GBR é uma lenda do funk, conhecido por seus sets vibrantes e cheios de energia.", photo: "https://videos.boilerroom.tv/assets/dj-gbr-clean-uqrlbonprk.jpg" },
                    { id: 3, name: "MC PH", genre: "Trap", bio: "MC PH é um dos nomes mais quentes do trap, conhecido por suas letras afiadas e batidas contagiantes.", photo: "https://videos.boilerroom.tv/assets/mc-ph-clean-fdmivrerwm.jpg" },
                    { id: 4, name: "DJ Blakes", genre: "Bass", bio: "DJ Blakes é conhecido por suas batidas pesadas e sets energéticos que agitam qualquer pista de dança.", photo: "https://videos.boilerroom.tv/assets/dj-blakes-clean-stejnjknrd.jpg" },
                    { id: 5, name: "Nogueira", genre: "Techno", bio: "Nogueira é um mestre do techno, trazendo sons profundos e hipnóticos para o público.", photo: "https://videos.boilerroom.tv/assets/nogueira-clean-bxyihrvohh.jpg" },
                    { id: 6, name: "Mu540", genre: "Alternative", bio: "Mu540 é um artista que mistura diversos gêneros para criar uma experiência sonora alternativa.", photo: "https://videos.boilerroom.tv/assets/mu540-clean-vohptcewyl.jpg" }
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

    const getMapUrl = (location) => {
        const encodedLocation = encodeURIComponent(location);
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw901SwHHqg&q=${encodedLocation}`;
    };

    const getDirectionsUrl = (location) => {
        const encodedLocation = encodeURIComponent(location);
        return `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;
    };

    const handleDirections = () => {
        const directionsUrl = getDirectionsUrl(evento.location);
        window.open(directionsUrl, '_blank');
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
                        
                        {artistas && artistas.length > 0 ? (
                            <div className={styles.artistsSection}>
                                <h3>Line-up de Artistas</h3>
                                <div className={styles.artistsList}>
                                    {artistas.map((artista) => (
                                        <div key={artista.id} className={styles.artistCard}>
                                            <div className={styles.artistImage}>
                                                <img 
                                                    src={artista.photo} 
                                                    alt={artista.name}
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
                        ) : (
                            <div className={styles.artistsSection}>
                                <h3>Line-up de Artistas</h3>
                                <p className={styles.noArtists}>
                                    Artistas serão anunciados em breve!
                                </p>
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
                                    <div>
                                        <strong>Horário</strong>
                                        <p>{formatTime(evento.startTime)} - {formatTime(evento.endTime)}</p>
                                    </div>
                                </div>
                                
                                <div className={styles.detail}>
                                    <div>
                                        <strong>Local</strong>
                                        <p>{evento.location}</p>
                                    </div>
                                </div>
                                
                                {evento.ageRating && (
                                    <div className={styles.detail}>
                                        <div>
                                            <strong>Classificação</strong>
                                            <p>{evento.ageRating}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {evento.capacity && (
                                    <div className={styles.detail}>
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
                        <div className={styles.mapContainer}>
                            <iframe
                                className={styles.mapFrame}
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(evento.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Mapa - ${evento.location}`}
                            />
                            <div className={styles.mapOverlay}>
                                <div className={styles.locationInfo}>
                                    <span>{evento.location}</span>
                                </div>
                            </div>
                        </div>
                        <button 
                            className={styles.directionsBtn}
                            onClick={handleDirections}
                        >
                            🗺️ Como Chegar
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}