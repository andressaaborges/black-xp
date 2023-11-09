import styles from './CardFounders.module.css';

export function CardFounders({ talent }) {
    return (
        <section className={styles.cardFounders}>
            <article className={styles.containerFounders}>
                <div className={styles.header}>
                    <img className={styles.imgFounders} src={talent.photo} alt={talent.name} />
                    <h1>{talent.name}</h1>
                </div>
                <div className={styles.dataFounders}>
                    <h4>{talent.role}</h4>
                    <p>{talent.companies}</p>
                </div>
            </article>
        </section>
    )
}