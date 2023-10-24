import styles from './Companies.module.css';
import partnessMoviafro from './../assets/partness/partness-moviafro.svg';
import { motion } from 'framer-motion';

export function Companies() {
    return (
        <section className={styles.companies} id="clients">
            <article className={styles.container}>
                <motion.h2 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Nossos Parceiros<br/><span>Somos Ubuntu</span></motion.h2>
                <div className={styles.logoCompanies}>
                    <img src={partnessMoviafro} alt="Parceiros da Moviafro" />
                </div>
            </article>
        </section>
    )
}