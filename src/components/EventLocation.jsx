import { motion } from 'framer-motion';
import { CalendarX, HouseLine, YoutubeLogo } from '@phosphor-icons/react';
import styles from './EventLocation.module.css';
import pattern4 from "../assets/patterns/7.svg";


const EventLocation = () => {
    const locations = [
        {
            id: 1,
            title: 'Online',
            description: 'Workshops online a partir de 18 de novembro no Youtube.',
            icon: <YoutubeLogo size={30} weight="duotone" />,
        },
        {
            id: 2,
            title: 'Casa Vale do Dendê - Pelourinho',
            description: 'Junte-se a nós Online na Vale do Dendê no Pelourinho.',
            icon: <HouseLine size={30} weight="duotone" />,
        },
        {
            id: 3,
            title: '28 e 29 de Novembro',
            description: 'Uma Live de Abertura te espera no dia 28/11 às 19h.',
            icon: <CalendarX size={30} weight="duotone" />,
        },
    ];

    return (
        <section className={styles.eventLocation} id="location">
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Onde e Quando?</h2>
                </div>

                <div className={styles.cardContainer}>
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={styles.card}
                        >
                            <div className={styles.icon}>{location.icon}</div>
                            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 2 * 0.2 }}>{location.title}</motion.h3>
                            <p>{location.description}</p>
                            <motion.img src={pattern4} alt="Padrão geométrico Black XP" title="Padrão geométrico Black XP" whileInView={{ scale: 1.0, rotate: [0, 90, 180, 270, 360], transition: { duration: 0.5, ease: 'easeInOut', loop: Infinity } }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }} />
                        </div>
                    ))}
                </div>

                {/* <div className={styles.mapContainer}>
        <Map />
      </div> */}
            </div>
        </section>
    );
};

export default EventLocation;
