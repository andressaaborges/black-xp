import styles from './Companies.module.css';
import olloLogosCompanies from './../assets/olloLogosCompanies.png';

export function Companies() {
    return (
        <section className={styles.companies} id="clients">
            <article className={styles.container}>
                <h2>Veja as empresas que já se <span>conectaram com a gente</span> e com os nossos talentos.</h2>
                <div className={styles.logoCompanies}>
                    <img src={olloLogosCompanies} alt="Ollo Logo Companies" />
                </div>
            </article>
        </section>
    )
}