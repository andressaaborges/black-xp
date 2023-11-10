import styles from './Card.module.css';

export function Card({ hasBorderLeft = true, content }) {
    return (
        <section className={hasBorderLeft ? styles.cardLeft : styles.cardRight}>
            <div className={styles.content}>
                <h3>{content.name}</h3>
                <p>{content.paragraph}</p>
            </div>
            <footer className={styles.footer}>
                <img className={styles.image} src={content.photo} alt="História da Moviafro" title="História da Moviafro" />
            </footer>
        </section>
    )
}
