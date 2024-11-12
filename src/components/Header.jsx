import styles from './Header.module.css';
import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

export function Header() {
    const [classOn, setClassOn] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={classOn ? styles.menuSectionOn : styles.menuSection} onClick={classOn ? () => setClassOn(false) : () => setClassOn(!classOn)}>
                    <section className={styles.navMobile} >
                        <article className={styles.menuToggle}>
                            {classOn ? <X size={46} color="#ffffff" weight="bold" onClick={() => setClassOn(false)} /> : <List size={46} onClick={() => setClassOn(!classOn)} />}
                        </article>
                    </section>
                    <nav>
                        <ul>
                            <li><a href="#what">O que é</a></li>
                            <li><a href="#operation">Funcionamento</a></li>
                            <li><a href="#workshops">Workshops</a></li>
                            <li><a href="#registration">Inscrição</a></li>
                            <li><a href="#organization">Organização</a></li>
                            <li><a href="#location">Local</a></li>
                            <li><a href="#partness">Patrocinadores</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}