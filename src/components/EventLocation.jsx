import { motion } from 'framer-motion';
import { Calendar, MapPinLine, Laptop } from '@phosphor-icons/react';
import styles from './EventLocation.module.css';
import pattern4 from "../assets/patterns/2.png";


const EventLocation = () => {
    const locations = [
        {   
            id: 1,
            title: 'Online',
            description: 'Participe do evento online no conforto da sua casa.',
            icon: <Laptop size={30} />,
        },
        {
            id: 2,
            title: 'Nave Arena CWG Arena Fonte Nova - Salvador',
            description: 'Junte-se a nós no Nave Arena CWG Arena Fonte Nova em Salvador.',
            icon: <MapPinLine size={30} />,
        },
        {
            id: 3,
            title: '12 a 14 de Janeiro',
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
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={styles.card}
                        >
                            <div className={styles.icon}>{location.icon}</div>
                            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0}}
                            transition={{ duration: 0.5, delay: 2 * 0.2 }}>{location.title}</motion.h3>
                            <p>{location.description}</p>
                            <img src={pattern4} alt="Padrão geométrico Black XP" title="Padrão geométrico Black XP" />
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
