import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
    <div className={styles.header}>
        <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/eventos">Eventos</a></li>
        </ul>

        <img src="/images/808logo.png" alt="" />

        <ul>
            <li><a href="/sobre">Sobre mim</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </div>
    )
}
