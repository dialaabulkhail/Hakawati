import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Countdown from './Countdown'
import { useState } from 'react'

const Footer = () => {
    const [expire, setExpire] = useState(false)
    return (
        <footer className={styles.footer}>

            <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Countdown expire={expire} setExpire={setExpire} />
                <span className={styles.logo}>
                    <Image src="/logo.png" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>

    )
}

export default Footer