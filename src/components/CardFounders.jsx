import styles from './CardFounders.module.css';
import patterns2 from './../assets/patterns/6.png';
import { motion } from 'framer-motion';

export function CardFounders({ talent }) {
    return (
        <section className={styles.cardFounders}>
            <article className={styles.containerFounders}>
                <div className={styles.dataFounders}>
                    <div className={styles.imgFounders}>{talent.photo}</div>
                    {/* <h1>{talent.name}</h1> */}
                    <h4>{talent.role}</h4>
                    <p>{talent.companies}</p>
                    <motion.img className={styles.patterns2} src={patterns2} alt="Padrão geométrico da BlackXP" title="Padrão geométrico da BlackXP" whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} />
                </div>
            </article>
        </section>
    )
}