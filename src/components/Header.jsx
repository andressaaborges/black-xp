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
                            <li><a href="#home">Início</a></li>
                            <li><a href="#services">História</a></li>
                            <li><a href="#operation">Impacto</a></li>
                            <li><a href="#talents">Pessoas</a></li>
                            <li><a href="#clients">Parceiros</a></li>
                            <li><a href="#testimonials">Núcleos</a></li>
                            <li><a href="#press">Imprensa</a></li>
                            <li><a href="#faq">Ações</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}