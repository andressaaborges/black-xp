import styles from './Footer.module.css';
import logo from './../assets/black-xp-logo.svg';
import { DiscordLogo, Envelope, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

export function Footer() {

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.containerSecond}>
                <div className={styles.sectionButtons}>
                    <h2>Agora me conta...<br />Topa participar dessa aventura conosco?</h2>
                    <button className={styles.buttonBackground}>
                        <a href="/" target="_blank">
                            Quero participar presencial!
                        </a>
                    </button>

                    <button className={styles.buttonHasBorder}>
                        <a href="/" target="_blank">
                            Quero participar online!
                        </a>
                    </button>
                </div>
                <div className={styles.form}>
                    <img src={logo} alt="Logo Black XP" title="Logo Black XP" />
                    <h3>Ficou com alguma dúvida? Fala com a gente!</h3>
                    <div className={styles.contact}>
                        <p>Acesse as nossas redes.</p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/blackgamejam" target="_blank"><InstagramLogo size={30} /></a>
                            <a href="tata@aimotech.com.br" target="_blank"><Envelope size={30} /></a>
                            <a href="https://discord.gg/Z9bSaTmh" target="_blank"><DiscordLogo size={30} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}