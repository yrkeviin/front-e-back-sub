import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.allFooter}>
                <div className={styles.logo}>
                    <img src="/images/logo4.png" alt="" />
                </div>

                <div className={styles.items}>
                    <h1>ABOUT US</h1>
                    <p>COMPANY</p>
                    <p>PARTNERSHIPS</p>
                    <p>NEWS</p>
                </div>
                <div className={styles.items2}>
                    <h1>PROJECTS</h1>
                    <p>BENEFITS</p>
                    <p>APPLY NOW</p>
                </div>
                <div className={styles.items3}>
                    <h1>MEMBERS</h1>
                    <p>JOIN NOW</p>
                    <p>SIGN IN</p>
                </div>
                <div className={styles.items4}>
                    <h1>PLATAFORM</h1>
                    <p>OVERVIEW</p>
                    <p>SUPPORT</p>
                </div>
            </div>

            <div className={styles.separator}></div>
        </div>
    )
}
