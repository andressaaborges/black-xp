import styles from './Footer.module.css';
import estatutoMoviafro from './../assets/EstatutoMoviafro.pdf';
import olloLogo from './../assets/moviafro.svg';
import { useState } from 'react';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

export function Footer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("api.ollo.is/subscribe_email", {
                method: "POST",
                headers: { "Header": "Authorization", "Bearer": "c21ca361-aec1-41ce-8099-a22fc118d70b" },
                body: JSON.stringify({
                    email: email,
                }),
            });
            const resJson = await res.json();
            if (resJson.status === 200) {
                setEmail("");
                setMessage("Email cadastrado com sucesso!");
            } else {
                setMessage("Ocorreu um erro.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <footer className={styles.footer} id="footer">
            {/* <div className={styles.containerFirst}>
                <article>
                    <img src={olloIllustrationBigEyes} alt="Ilustração Ollo" />
                </article>
                <div className={styles.sectionButtons}>
                    <h2>Estamos criando legados. Seja Moviafro!</h2>

                    <button
                        className={styles.buttonBackground} >
                        Quero fazer parte
                    </button>

                    <button
                        className={styles.buttonHasBorder} >
                        Quero apoiar
                    </button>

                </div>
            </div> */}
            {/* <hr className={styles.line} /> */}
            <div className={styles.containerSecond}>
                <div className={styles.sectionButtons}>
                    <h2>Levantemos uns aos outros.<br />Seja Moviafro!</h2>
                    <button className={styles.buttonBackground}>
                        <a href="https://wa.link/u25dxd" target="_blank">
                            Quero fazer parte
                        </a>
                    </button>

                    <button className={styles.buttonHasBorder}>
                        <a href="https://wa.link/t2c44e" target="_blank">
                            Quero apoiar
                        </a>
                    </button>
                </div>
                <div className={styles.form}>
                    <img src={olloLogo} alt="Logo Ollo" />
                    <h3>Entre em contato através das redes sociais.</h3>
                    <div className={styles.contact}>
                        <a href={estatutoMoviafro} target="_blank" download><p>Estatuto da Associação Cultural Moviafro</p></a>
                        <a href="mailto:moviafrofsa@gmail.com" target="_blank"><p>moviafrofsa@gmail.com</p></a>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/moviafrofsa.oficial" target="_blank"><InstagramLogo size={30} weight="light" /></a>
                            <a href="/wa.link/qsan19" target="_blank"><WhatsappLogo size={30} weight="fill" /></a>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    )
}