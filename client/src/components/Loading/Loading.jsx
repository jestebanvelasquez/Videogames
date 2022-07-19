import React from 'react'
import styles from './Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>

            <div class={styles.loading}>
                <div class={styles.circle}></div>
                <div class={styles.circle}></div>
                <div class={styles.circle}></div>
                <div class={styles.shadow}></div>
                <div class={styles.shadow}></div>
                <div class={styles.shadow}></div>
            </div>

        </div>
    )
}


