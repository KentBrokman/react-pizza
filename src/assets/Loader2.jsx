import React from 'react'
import styles from './Loader2.module.scss'

export const Loader2 = () => {
    return (
        <div className={styles.example}>
            <div className={styles.block}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    )
}