import styles from './CardOperation.module.css';

export function CardOperation({ number, title, description }) {
    return (
        <section className={styles.cardOperation}>
            {/* <h1>{number}</h1> */}
            <article className={styles.container}>
                <h1>{number}</h1>
                <h4>{title}</h4>
                <p>{description}</p>
            </article>
        </section>
    )
}