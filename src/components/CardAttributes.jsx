import styles from './CardAttributes.module.css';
import { motion } from 'framer-motion';


export function CardAttributes({ title, role, description }) {
    return (
        <motion.section className={styles.cardAttributes} initial={{ y: 61 }}
            whileInView={{ y: 0 }} transition={{ duration: 0.6 }}>
            <details>
                <motion.summary><h1>{title}</h1>
                <h2>{role}</h2>
                </motion.summary>
                <article className={styles.container}>
                    <p>{description}</p>
                </article>
            </details>
        </motion.section>
    )
}