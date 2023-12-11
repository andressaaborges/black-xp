import styles from './Footer.module.css';
import logo from './../assets/black-xp-logo.svg';
import { DiscordLogo, Envelope, InstagramLogo } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export function Footer() {

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.containerSecond}>
                <div className={styles.sectionButtons}>
                    <h2>Agora me conta...<br />Topa participar dessa aventura conosco?</h2>
                    <button className={styles.buttonBackground}>
                        <a href="https://www.sympla.com.br/evento-online/black-xp-game-jam-online/2275832" target="_blank">
                            Quero participar!
                        </a>
                    </button>

                    <button className={styles.buttonHasBorder}>
                        <a href="https://www.instagram.com/blackgamejam" target="_blank">
                            Quero saber mais
                        </a>
                    </button>
                </div>
                <div className={styles.form}>
                    <motion.img
                        src={logo}
                        alt="Logo Black XP"
                        title="Logo Black XP"
                        whileInView={{ rotate: [0, -50, 10, -10, 10, 0], transition: { duration: 2.5 } }}
                    />
                    <h3>Ficou com alguma dúvida? Fala com a gente!</h3>
                    <div className={styles.contact}>
                        <p>Acesse as nossas redes.</p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/blackgamejam" target="_blank"><InstagramLogo size={30} /></a>
                            <a href="mailto:tata@aimotech.com.br" target="_blank"><Envelope size={30} /></a>
                            <a href="https://discord.gg/RVDD77bn" target="_blank"><DiscordLogo size={30} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}