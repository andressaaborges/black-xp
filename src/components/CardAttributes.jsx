import styles from './CardAttributes.module.css';

export function CardAttributes({ content }) {
    return (
        <section className={styles.cardAttributes}>
            <h1>Somos <span>{content.title}</span></h1>
            <article className={styles.container}>
                <p>{content.text}</p>
            </article>
        </section>
    )
}