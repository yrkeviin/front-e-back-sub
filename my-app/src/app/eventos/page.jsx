"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';   

export default function page() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchEventos = async () => {
            const response = await fetch(`${apiUrl}/eventos`);
            const data = await response.json();
            setEventos(data);
        }
        fetchEventos();
    }, [apiUrl]);

    return (
        <div>
            {eventos.map((evento) => (
                <div key={evento.id}>
                    <h3>{evento.name}</h3>
                    <p>{evento.description}</p>
                    <Link href={`/eventos/${evento.id}`}>Ver mais</Link>
                </div>

            ))}
        </div>
    );
}
