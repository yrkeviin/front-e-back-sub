import React from 'react'
import styles from './DjCard.module.css'

export default function DjCard({index}) {
    return (
        <div className={styles.cardDj}>
            <img src={index} alt="" />
        </div>
    )
}
