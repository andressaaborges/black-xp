import styles from './CardAttributes.module.css';
import { motion } from 'framer-motion';
import { CalendarCheck, CaretCircleDown, CaretCircleUp, Microphone } from '@phosphor-icons/react';
import { useState } from 'react';


export function CardAttributes({ photo, title, role, description, date }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <motion.section className={styles.cardAttributes} initial={{ y: 61 }}
            whileInView={{ y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.header}>
                <img src={photo} alt="Foto da pessoa palestrante" title="Foto da pessoa palestrante" />
            </div>
            <div className={styles.content}>
                <h1>{title}</h1>
                <div className={styles.subtitle}>
                    <CalendarCheck size={30} />
                    <h2>{date}</h2>
                </div>
                <div className={styles.subtitle}>
                    <Microphone size={30} />
                    <h2>{role}</h2>
                </div>
            </div>
            <details aria-expanded={isExpanded}>
                <motion.summary onClick={handleToggle}>
                    <div className={styles.subtitle}>
                        {isExpanded ? <CaretCircleUp size={30} /> : <CaretCircleDown size={30} />}
                        <h2>{isExpanded ? "Saiba Menos" : "Saiba Mais"}</h2>
                    </div>
                </motion.summary>
                {isExpanded && (
                    <article className={styles.container}>
                        <p>{description}</p>
                    </article>
                )}
            </details>
        </motion.section>
    )
}