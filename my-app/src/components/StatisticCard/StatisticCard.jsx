import React from 'react'
import styles from './StatisticCard.module.css'

export default function StaticCard({number, desc}) {
    return (
        <div className={styles.card}>
            <h1>{number}</h1>
            <p>{desc}</p>
        </div>
    )
}
