import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
    <div className={styles.header}>
        <ul>
            <li><a href="">Listagem</a></li>
            <li><a href="">Detalhes</a></li>
        </ul>

        <img src="/images/808logo.png" alt="" />

        <ul>
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Contato</a></li>
        </ul>
    </div>
    )
}
