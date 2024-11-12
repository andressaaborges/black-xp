import styles from './CardTalents.module.css';

export function CardTalents({ talent }) {
    return (
        <section className={styles.cardTalents}>
            <div className={styles.headerCard}>
                <img src={talent.photo} alt="Foto do evento anterior" />
            </div>
            {/* <article className={styles.container}> */}

            {/* <h1>{talent.name}<br />{talent.surname}</h1> */}
            {/* <div className={styles.dataTalents}>
                    <h4>{role}</h4>
                    <p>{talent.companies}</p>
                </div> */}
            {/* </article> */}
        </section>
    )
}