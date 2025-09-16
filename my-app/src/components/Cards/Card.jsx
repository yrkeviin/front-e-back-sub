import React from 'react'
import styles from './Card.module.css'

export default function Card({title, text}) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>

            <p>{text}</p>
        </div>
    )
}
