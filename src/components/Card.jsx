import styles from './Card.module.css';
import olloLogoBlue from './../assets/olloLogoBlue.svg';

export function Card({ content }) {
    return (
        <section className={styles.card}>
            <header className={styles.header}>
                <img className={styles.image} src={olloLogoBlue} alt="Logo Ollo" />
            </header>
            <div className={styles.content}>
                <h3>{content.name}</h3>
                <p>{content.paragraph}</p>
                <footer className={styles.footer}>
                    <a href="https://ollo.is/br/hire/"><button className={styles.button}>Quero contratar</button></a>
                </footer>
            </div>
        </section>
    )
}
