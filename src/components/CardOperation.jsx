import styles from './CardOperation.module.css';

export function CardOperation({ content, number }) {
    return (
        <section className={styles.cardOperation}>
            {/* <h1>{number}</h1> */}
            <article className={styles.container}>
                <h1>{number}</h1>
                <h4>{content.title}</h4>
                <p>{content.text}</p>
            </article>
        </section>
    )
}