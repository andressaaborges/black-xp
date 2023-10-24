import styles from './Card.module.css';

export function Card({ hasBorderLeft = true, content }) {
    return (
        <section className={hasBorderLeft ? styles.cardLeft : styles.cardRight}>
            <header className={styles.header}>
                {/* <img className={styles.image} src={olloLogoBlue} alt="Logo Ollo" /> */}
                {/* <p><strong>Início</strong></p> */}
            </header>
            <div className={styles.content}>
                <h3>{content.name}</h3>
                <p>{content.paragraph}</p>
                {/* <footer className={styles.footer}>
                    <p><strong>2006</strong></p>
                </footer> */}
            </div>
        </section>

    )
}
