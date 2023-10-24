import styles from './CardTalents.module.css';

export function CardTalents({ talent, role }) {
    return (
        <section className={styles.cardTalents}>
            <article className={styles.container}>
            
                <img src={talent.photo} alt="Foto do talento" />
                <h1>{talent.name}<br/>{talent.surname}</h1>
                <div className={styles.dataTalents}>
                    
                    <h4>{role}</h4>
                    <p>{talent.companies}</p>
                </div>
            </article>
        </section>
    )
}