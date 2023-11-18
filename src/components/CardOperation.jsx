import styles from './CardOperation.module.css';

export function CardOperation({ icon, title, description }) {
    return (
        <section className={styles.cardOperation}>
            <article className={styles.container}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.text}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </article>
        </section>
    );
}
