import styles from './Header.module.css';
import olloLogo from './../assets/ollo.svg';
import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

export function Header() {
    const [classOn, setClassOn] = useState(false);

    return (
        <header className={styles.header}>
            <img src={olloLogo} alt="Logo Ollo" />
            <div className={styles.container}>
                <div className={classOn ? styles.menuSectionOn : styles.menuSection} onClick={classOn ? () => setClassOn(false) : () => setClassOn(!classOn)}>
                    <section className={styles.navMobile} >
                        <article className={styles.menuToggle}>
                            {classOn ? <X size={46} color="#ffffff" weight="bold" onClick={() => setClassOn(false)} /> : <List size={46} color="#ffffff" weight="fill" onClick={() => setClassOn(!classOn)} />}
                        </article>
                    </section>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#operation">Como funciona</a></li>
                            <li><a href="#talents">Talentos</a></li>
                            <li><a href="#clients">Clientes</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#press">Imprensa</a></li>
                            <li><a href="#faq">Faq</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}