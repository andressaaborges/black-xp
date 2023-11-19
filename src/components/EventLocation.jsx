import { motion } from 'framer-motion';
import { Calendar, ArrowCircleRight, MapPinLine } from '@phosphor-icons/react';
import styles from './EventLocation.module.css';
import pattern4 from "../assets/patterns/2.png";


const EventLocation = () => {
    const locations = [
        {
            title: 'Online',
            description: 'Participe do evento online no conforto da sua casa.',
            icon: <ArrowCircleRight size={30} />,
        },
        {
            title: 'Espaço Gamer da Arena Fonte Nova - Salvador',
            description: 'Junte-se a nós no Espaço Gamer da Arena Fonte Nova em Salvador.',
            icon: <MapPinLine size={30} />,
        },
        {
            title: '9 e 10 de dezembro',
            description: 'Dia cheio de atividades e diversão.',
            icon: <Calendar size={30} />,
        },
    ];

    return (
        <section className={styles.eventLocation} id="location">
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Onde e Quando?</h2>
                </div>

                <div className={styles.cardContainer}>
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={styles.icon}>{location.icon}</div>
                            <h3>{location.title}</h3>
                            <p>{location.description}</p>
                            <img src={pattern4} alt="Padrão geométrico Black XP" title="Padrão geométrico Black XP" />
                        </motion.div>
                    ))}
                </div>

                {/* <div className={styles.mapContainer}>
        <Map />
      </div> */}
            </div>
        </section>
    );
};

// const Map = () => {

//   const googleMapsApiKey = 'SAIzaSyDEkoaClI-HZ-turDCa2XbURw-L-WMK0f8';

//   return (
//     <iframe
//       title="Localização"
//       className={styles.map}
//       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEkoaClI-HZ-turDCa2XbURw-L-WMK0f8&region=GB&callback=initMap"
//       frameBorder="0"
//       allowFullScreen
//     ></iframe>
//   );
// };

export default EventLocation;