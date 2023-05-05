import styles from './CardTalents.module.css';

export function CardTalents({ talent }) {
    return (
        <section className={styles.cardTalents}>
            <article className={styles.container}>
                <img src={talent.photo} alt="Foto do talento" />
                <h1>{talent.name}</h1>
                <h4>{talent.role}</h4>
                <p>{talent.companies}</p>
            </article>
        </section>
    )
}