import styles from './Footer.module.css';
import olloIllustrationBigEyes from './../assets/olloIllustrationBigEyes.svg';
import olloLogo from './../assets/ollo.svg';
import { useState } from 'react';
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.containerFirst}>
                <article>
                    <img src={olloIllustrationBigEyes} alt="Ilustração Ollo" />
                </article>
                <div className={styles.sectionButtons}>
                    <h2>Os melhores talentos estão com a gente.</h2>
                    <a href="https://ollo.is/br/hire/"><button className={styles.buttonBackground}>Quero contratar</button></a>
                    <a href="https://ollo.is/br/in/"><button className={styles.buttonHasBorder}>Quero fazer parte</button></a>
                </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.containerSecond}>
                <div className={styles.form}>
                    <h3>Vem falar com a gente e ficar hiper bem informado. ;{')'}</h3>
                    <form>
                        <input type="email" value={email} placeholder="E-mail" required onChange={(e) => { handleEmailChange(e) }} />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
                <div className={styles.contact}>
                    <img src={olloLogo} alt="Logo Ollo" />
                    <a href="https://ollo.is/privacy-policy-2/" target="_blank"><p>Política de Privacidade Ollo</p></a>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com/ollo.is/" target="_blank"><InstagramLogo size={20} weight="light" /></a>
                        <a href="https://www.linkedin.com/company/ollo-is" target="_blank"><LinkedinLogo size={20} weight="fill" /></a>
                    </div>
                    <a href="mailto:hello@ollo.is" target="_blank"><p>hello@ollo.is</p></a>
                </div>
            </div>
        </footer>
    )
}