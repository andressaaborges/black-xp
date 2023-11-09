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
                            <li><a href="#history">História</a></li>
                            <li><a href="#founders">Fundadores</a></li>
                            <li><a href="#impact">Impacto</a></li>
                            <li><a href="#actions">Ações</a></li>
                            <li><a href="#cores">Núcleos</a></li>
                            <li><a href="#inspirations">Pessoas</a></li>
                            <li><a href="#partness">Parceiros</a></li>
                            <li><a href="#press">Imprensa</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}